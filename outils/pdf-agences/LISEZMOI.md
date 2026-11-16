# PDF « Dossier de soumission agences »

Source du fichier `public/docs/dossier-soumission-agences-sbdesign.pdf` (PDF à remplir, 52 champs).

- `dossier.html` : mise en page (A4, 2 pages). Copier `public/images/logo-sb.png` à côté sous le nom `logo.png`.
- `makepdf.mjs` : imprime la page avec Chrome puis ajoute les champs à remplir aux emplacements `data-field` (texte) et `data-check` (cases).
  Il faut `puppeteer-core` et `pdf-lib@1.17.1` : `node makepdf.mjs /chemin/dossier.html sortie.pdf`
