/**
 * <Picture> — version React du composant image responsive.
 *
 * Même comportement que src/components/ui/Picture.astro :
 * lit src/data/image-manifest.json et émet <picture> + <source webp> + <img>.
 * Utilisable dans les composants .tsx (HeroMinimal, ProjectGrid, etc.)
 *
 * Pour les images de fond CSS (background-image), un helper getSrcSet est
 * exporté en complément.
 */
import type { CSSProperties, ImgHTMLAttributes } from 'react';
import manifest from '@/data/image-manifest.json';

type Entry = { w: number; h: number; widths: number[] };
const MANIFEST = manifest as Record<string, Entry>;

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string;
  alt: string;
  sizes?: string;
  pictureStyle?: CSSProperties;
};

export default function Picture({
  src,
  alt,
  sizes = '100vw',
  loading = 'lazy',
  decoding = 'async',
  pictureStyle,
  ...rest
}: Props) {
  const entry = MANIFEST[src];
  const lastDot = src.lastIndexOf('.');
  const base = lastDot > 0 ? src.slice(0, lastDot) : src;

  // Fallback gracieux si l'image n'est pas dans le manifeste
  if (!entry) {
    return <img src={src} alt={alt} loading={loading} decoding={decoding} {...rest} />;
  }

  const srcSet = entry.widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ');

  return (
    <picture style={{ display: 'contents', ...pictureStyle }}>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={entry.w}
        height={entry.h}
        loading={loading}
        decoding={decoding}
        {...rest}
      />
    </picture>
  );
}

/**
 * Pour les rares cas où l'image est utilisée en background CSS et où on veut
 * tout de même charger la meilleure variante WebP.
 * Renvoie l'URL de la variante WebP la plus large ≤ targetWidth.
 */
export function getWebpVariant(src: string, targetWidth = 1600): string {
  const entry = MANIFEST[src];
  if (!entry) return src;
  const lastDot = src.lastIndexOf('.');
  const base = lastDot > 0 ? src.slice(0, lastDot) : src;
  const w = [...entry.widths].reverse().find((x) => x <= targetWidth) ?? entry.widths[0];
  return `${base}-${w}.webp`;
}
