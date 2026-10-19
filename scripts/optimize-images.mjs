/**
 * optimize-images.mjs — Génération des variantes WebP responsives
 * ----------------------------------------------------------------
 * Parcourt public/images/, et pour chaque JPEG/JPG/PNG :
 *   - génère des variantes WebP à plusieurs largeurs (sans upscale)
 *   - écrit un manifeste src/data/image-manifest.json
 *
 * Les fichiers ORIGINAUX ne sont JAMAIS modifiés ni supprimés :
 * ils restent le fallback <img> pour les rares navigateurs sans WebP.
 *
 * Lancer :  node scripts/optimize-images.mjs        (ignore l'existant)
 *           node scripts/optimize-images.mjs --force (regénère tout)
 */
import sharp from 'sharp';
import { readdir, stat, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..');
const IMAGES_DIR = path.join(ROOT, 'public', 'images');
const MANIFEST_PATH = path.join(ROOT, 'src', 'data', 'image-manifest.json');

/** Largeurs cibles pour le srcset. Aucune variante > largeur d'origine. */
const TARGET_WIDTHS = [480, 960, 1600, 2400];
const WEBP_QUALITY = 80;
const SOURCE_EXT = new Set(['.jpg', '.jpeg', '.png']);

const force = process.argv.includes('--force');

/** Liste récursive des fichiers image source. */
async function collect(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await collect(full)));
    else if (SOURCE_EXT.has(path.extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
}

async function run() {
  if (!existsSync(IMAGES_DIR)) {
    console.error(`✗ Dossier introuvable : ${IMAGES_DIR}`);
    process.exit(1);
  }

  const sources = await collect(IMAGES_DIR);
  console.log(`${sources.length} images source trouvées.\n`);

  const manifest = {};
  let generated = 0;
  let skipped = 0;
  let bytesIn = 0;
  let bytesOut = 0;

  for (const file of sources) {
    const ext = path.extname(file);
    const base = file.slice(0, -ext.length); // chemin sans extension
    const meta = await sharp(file).metadata();
    const origW = meta.width ?? 0;
    const origH = meta.height ?? 0;

    // Largeurs à générer : cibles <= largeur d'origine (jamais d'upscale)
    let widths = TARGET_WIDTHS.filter((w) => w <= origW);
    if (widths.length === 0) widths = [origW]; // image plus petite que 480px

    bytesIn += (await stat(file)).size;

    for (const w of widths) {
      const out = `${base}-${w}.webp`;
      if (!force && existsSync(out)) {
        skipped++;
      } else {
        await sharp(file)
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
          .toFile(out);
        generated++;
      }
      bytesOut += (await stat(out)).size;
    }

    // Clé du manifeste = chemin tel qu'utilisé dans le code (avec extension)
    const key = '/' + path.relative(path.join(ROOT, 'public'), file).split(path.sep).join('/');
    manifest[key] = { w: origW, h: origH, widths };
    process.stdout.write(`  ${path.basename(file)} → ${widths.length} variante(s)\r`);
  }

  // Manifeste trié pour des diffs git stables
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  await mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  await writeFile(MANIFEST_PATH, JSON.stringify(sorted, null, 2) + '\n');

  const mb = (n) => (n / 1048576).toFixed(1) + ' MB';
  console.log('\n');
  console.log(`✓ ${generated} variantes WebP générées, ${skipped} déjà présentes.`);
  console.log(`✓ Manifeste écrit : ${path.relative(ROOT, MANIFEST_PATH)} (${Object.keys(sorted).length} entrées)`);
  console.log(`  Originaux : ${mb(bytesIn)}  →  WebP (toutes variantes) : ${mb(bytesOut)}`);
}

run().catch((err) => {
  console.error('\n✗ Échec :', err);
  process.exit(1);
});
