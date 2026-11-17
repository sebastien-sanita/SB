# PDF « Dossier de soumission agences »

Source du fichier `public/docs/dossier-soumission-agences-sbdesign.pdf` (PDF à remplir, miroir du formulaire en ligne).

- `dossier.html` : mise en page (A4, 2 pages). Copier `public/images/logo-sb.png` à côté sous le nom `logo.png`.
- `makepdf.mjs` : imprime la page avec Chrome puis ajoute les champs à remplir aux emplacements `data-field` (texte), `data-check` (cases, plusieurs choix) et `data-radio` (choix unique).
  Il faut `puppeteer-core` et `pdf-lib@1.17.1` : `node makepdf.mjs /chemin/dossier.html sortie.pdf`
