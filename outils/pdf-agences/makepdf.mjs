import puppeteer from 'puppeteer-core';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'node:fs';

const [htmlPath, outPath] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const p = await b.newPage();
await p.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });
await p.evaluateHandle('document.fonts.ready');

const info = await p.evaluate(() => {
  const pages = [...document.querySelectorAll('.page')];
  const res = { pages: pages.map((pg) => ({ w: pg.offsetWidth, h: pg.offsetHeight, over: pg.scrollHeight > pg.clientHeight + 1, last: Math.max(...[...pg.querySelectorAll('*:not(footer):not(footer *)')].map((e) => e.getBoundingClientRect().bottom - pg.getBoundingClientRect().top)), foot: pg.querySelector('footer').getBoundingClientRect().top - pg.getBoundingClientRect().top })), items: [] };
  pages.forEach((pg, i) => {
    const pr = pg.getBoundingClientRect();
    pg.querySelectorAll('[data-field],[data-check],[data-radio]').forEach((el) => {
      const r = el.getBoundingClientRect();
      res.items.push({ page: i, kind: el.dataset.field ? 'text' : el.dataset.radio ? 'radio' : 'check', name: el.dataset.field || el.dataset.check || el.dataset.radio, value: el.dataset.value, multi: el.hasAttribute('data-multi'), x: r.left - pr.left, y: r.top - pr.top, w: r.width, h: r.height });
    });
  });
  return res;
});
console.log('pages', JSON.stringify(info.pages));
const pdfBytes = await p.pdf({ preferCSSPageSize: true, printBackground: true });
await b.close();

const doc = await PDFDocument.load(pdfBytes);
const font = await doc.embedFont(StandardFonts.Helvetica);
const form = doc.getForm();
const pages = doc.getPages();
for (const it of info.items) {
  const page = pages[it.page];
  const { width: PW, height: PH } = page.getSize();
  const k = PW / info.pages[it.page].w;
  const x = it.x * k, w = it.w * k, h = it.h * k, y = PH - (it.y * k) - h;
  if (it.kind === 'text') {
    const f = form.createTextField(it.name);
    if (it.multi) f.enableMultiline();
    f.addToPage(page, { x: x + 1, y: y + 1, width: w - 2, height: h - 2, borderWidth: 0, textColor: rgb(0.1, 0.1, 0.1), font });
    f.setFontSize(it.multi ? 9 : 10);
  } else if (it.kind === 'radio') {
    let g;
    try { g = form.getRadioGroup(it.name); } catch { g = form.createRadioGroup(it.name); }
    g.addOptionToPage(it.value, page, { x, y, width: w, height: h, borderWidth: 0.6, borderColor: rgb(0.545, 0.451, 0.333), backgroundColor: rgb(1, 1, 1), textColor: rgb(0.545, 0.451, 0.333) });
  } else {
    const c = form.createCheckBox(it.name);
    c.addToPage(page, { x, y, width: w, height: h, borderWidth: 0.6, borderColor: rgb(0.545, 0.451, 0.333), backgroundColor: rgb(1, 1, 1), textColor: rgb(0.545, 0.451, 0.333) });
  }
}
form.updateFieldAppearances(font);
doc.setTitle('Dossier de soumission — agences immobilières — SB Design Riviera');
doc.setAuthor('SB Design Riviera');
fs.writeFileSync(outPath, await doc.save());
console.log('fields', info.items.length);
