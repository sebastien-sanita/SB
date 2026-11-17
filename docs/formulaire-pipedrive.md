# Formulaire de contact sbdesign.fr → Pipedrive (pipeline « SB Design »)

Le formulaire (`src/pages/contact.astro`, `en/contact.astro`, `it/contact.astro`) est un **Netlify Form** nommé `contact`,
soumis en AJAX par `src/scripts/contact-form.ts` : tout le `FormData` est envoyé, champs cachés compris.
La correspondance vers Pipedrive se règle **dans l’intégration Netlify → Pipedrive** (automatisation ou formulaire web),
pas dans ce dépôt. Les listes envoient toujours le **libellé français**, quelle que soit la langue de la page
(index aligné sur les trois langues dans `src/i18n/strings.ts`, clés `options*` de `contactPage`), pour une correspondance stable.

| Champ du formulaire | Type | Obligatoire | Valeurs envoyées | Champ Pipedrive cible |
|---|---|---|---|---|
| `firstname`, `lastname` | texte | oui | — | Personne : prénom / nom |
| `email` | e-mail | oui | — | Personne : e-mail |
| `phone` | téléphone | oui *(nouveau)* | — | Personne : téléphone |
| `nature_travaux` *(nouveau)* | liste | oui | Rénovation complète d’une villa · Rénovation d’un appartement · Aménagement et décoration intérieure · Mobilier et agencements sur mesure · Construction neuve ou extension · Valorisation avant location ou vente · Autre | Affaire : **Nature des travaux** |
| `statut_propriete` *(nouveau)* | liste | oui | J’ai le bien · Acquisition en cours · Je cherche encore | Affaire : **Statut propriété** |
| `budget_travaux` *(nouveau)* | liste | oui | Moins de 100 000 € · 100 000 € – 250 000 € · 250 000 € – 500 000 € · Plus de 500 000 € · Je ne sais pas encore | Affaire : **Budget déclaré** |
| `code_postal` *(nouveau)* | texte, 5 chiffres (`pattern="[0-9]{5}"`) | oui | ex. 83980 | Affaire : **code postal** (champ personnalisé ou adresse) |
| `echeance` *(nouveau)* | liste | oui | Dès que possible · Dans les 3 mois · Dans 3 à 6 mois · Dans plus de 6 mois · Je ne sais pas encore | Affaire : **Timeline projet** |
| `message` | texte long | oui | — | Note de l’affaire |
| `marque` *(nouveau, caché)* | constante | — | `SB Design` | Affaire : **Marque** |
| `source_lead` *(nouveau, caché)* | constante | — | `Site web` | Affaire : **Source du lead** |
| `pipeline` *(nouveau, caché)* | constante | — | `SB Design` | Routage vers le pipeline **SB Design** |
| `lang` | caché | — | fr / en / it | Note ou champ libre |
| `utm_*`, `gclid`, `fbclid`, `fbp`, `fbc`, `ga_client_id`… (`TrackingFields.astro`) | cachés | — | remplis par le navigateur | Champs personnalisés de suivi |

Champ supprimé : `project` (Rénovation complète · Raffinement intérieur · Valorisation patrimoniale), remplacé par
`nature_travaux`. Le retirer du mapping existant s’il y figurait.

Mêmes noms de champs que rsd-agencements.com et rsd-bath.com pour `echeance`, `statut_propriete`, `marque`,
`source_lead` et `pipeline` (mêmes libellés pour `echeance`). Propres à sbdesign.fr : `nature_travaux`,
`budget_travaux` (les deux autres sites envoient `budget`) et `code_postal`.

Points d’attention côté Pipedrive :
- si **Statut propriété** est un champ à options, y ajouter « J’ai le bien » (les sites RS.D envoient « Propriétaire » / « Locataire ») ;
- si **Budget déclaré** est un champ à options, y ajouter les cinq tranches ci-dessus (différentes de celles des sites RS.D) ;
- Netlify relit la liste des champs au déploiement : les nouveaux champs n’apparaissent qu’à partir du premier déploiement qui les contient.

Recette : un envoi de test par langue, puis vérifier dans Pipedrive que l’affaire arrive dans le pipeline SB Design
avec Marque, Source du lead, Nature des travaux, Budget déclaré, Statut propriété, Timeline projet et code postal renseignés.
Supprimer ensuite les affaires de test.

---

# Variante « climatisation » du formulaire de contact (ajout du 12/11/2026)

Page `/climatisation-villa-var/` (`src/pages/climatisation-villa-var.astro`). **Même circuit que le contact** :
même Netlify Form `contact`, même script `src/scripts/contact-form.ts` (envoi AJAX, `TrackingFields`, honeypot),
mêmes champs cachés `marque` = `SB Design`, `pipeline` = `SB Design`, `lang` = `fr`. Seule différence :
**`source_lead` = `Page climatisation`** (au lieu de `Site web`). Aucun nouveau nom de champ.

| Champ visible | `name` envoyé (existant) | Obligatoire | Valeurs |
|---|---|---|---|
| Nom | `lastname` | oui | texte libre (pas de champ prénom : `firstname` n’est pas envoyé) |
| Téléphone | `phone` | oui | — |
| E-mail | `email` | non | — |
| Formule | `nature_travaux` | oui | Clim + suite parentale · Clim + pièce de vie · Clim + rénovation complète · Clim seule |
| Ville ou code postal de la villa | `code_postal` | non | texte libre (pas de contrôle « 5 chiffres » sur cette page) |
| Message | `message` | non | — |

Non envoyés par cette page : `firstname`, `statut_propriete`, `budget_travaux`, `echeance`.

À vérifier côté Pipedrive / Zap avant la mise en ligne :
- si **Source du lead** est un champ à options, y ajouter « Page climatisation » ;
- si **Nature des travaux** est un champ à options, y ajouter les quatre formules ci-dessus ;
- `code_postal` peut contenir un nom de commune (« Bormes-les-Mimosas ») : le champ cible doit accepter du texte ;
- le Zap ne doit pas exiger `firstname`, `email`, `budget_travaux`, `statut_propriete` ni `echeance`.

Recette : un envoi de test depuis la page, vérifier que l’affaire arrive dans le pipeline SB Design avec la source
« Page climatisation » et la formule, puis supprimer l’affaire de test.

# Formulaire agences `agence-var` (ajout du 12/11/2026)

Pages `/partenaires-agences-var/` (FR) et `/en/real-estate-agents/` (EN), composant
`src/components/sections/AgenceForm.astro`. Ce formulaire part en
**envoi natif** (pas d’AJAX, pas de `TrackingFields`) vers Netlify Forms, et c’est la **notification e-mail**
de Netlify qui est lue par le script de premier avis de Savério (dans Mail, sur son Mac).

- Nom du formulaire Netlify : `agence-var` — `method="POST"`, `enctype="multipart/form-data"`, honeypot `bot-field`.
- Page de remerciement (`action`) : `/espace-agences-merci/` (FR) ou `/en/espace-agences-merci/` (EN), toutes deux
  en `noindex` et exclues du sitemap (`filter` dans `astro.config.mjs`).
- Champ caché `subject`, à ne jamais modifier : `[RS.D AGENCE] SB Design Var — Nouveau mandat`
  (le script ne lit que les mails dont le sujet contient `[RS.D AGENCE]`).
- **Ne renommer aucun champ et ne pas changer les `value` des options** : la page anglaise envoie les mêmes
  valeurs françaises, seuls les libellés visibles sont traduits (`src/data/partenaires-agences.ts`).

| Champ | Type | Obligatoire | Valeurs envoyées |
|---|---|---|---|
| `agence`, `agent` | texte | oui | — |
| `telephone` | téléphone | oui | — |
| `email` | e-mail | oui | — |
| `adresse` | texte | oui | numéro, rue, code postal, ville |
| `type_bien` | liste | — | Villa · Appartement · Maison |
| `surface_m2`, `prix_affiche`, `mois_en_vente` | texte | non | — |
| `etat` | liste | — | `rafraichir` · `renover` · `lourd` · `bon` |
| `acquereur` | liste | — | `non` · `oui` |
| `travaux` | caché, rempli à l’envoi | — | cases cochées jointes par « , » : salle de bain, cuisine, climatisation, menuiseries, sols, électricité, redistribution |
| `message` | texte long | non | ce qui bloque la vente |
| `dpe_numero` | texte, 13 caractères (`pattern="[0-9A-Za-z]{13}"`) | non | ex. 2369E1234567X |
| `dpe_classe` | liste | — | vide (« je ne sais pas ») · A à G |
| `etage`, `annee_construction` | texte | non | — |
| `copropriete` | liste | — | `oui` · `non` |
| `documents` | caché, rempli à l’envoi | — | **depuis le 17/11/2026 : déduit des fichiers joints** (plus de cases à cocher ; dpe_fichier→dpe, diagnostics_fichier→diagnostics, plans_fichier→plans, photos→photos, copro_fichier→reglement_copro, pv_ag, autre_fichier→urbanisme_anterieur, taxe_fonciere, factures_travaux), mêmes valeurs : dpe, diagnostics, plans, photos, reglement_copro, pv_ag, copro_fiche, urbanisme_anterieur, taxe_fonciere, factures_travaux |
| `dpe_fichier` | fichier PDF (DPE complet) | non | — |
| `diagnostics_fichier`, `plans_fichier`, `copro_fichier`, `autre_fichier` | fichier PDF | non | **ajoutés le 17/11/2026** |
| `photo1` … `photo4` | fichier JPG | non | une seule zone « Photos (4 max) » visible ; le navigateur réduit les photos (1600 px, JPG) et les répartit dans `photo1`…`photo4`. `photo3` et `photo4` **ajoutés le 17/11/2026** |

`travaux` et `documents` sont remplis par le petit script en bas du composant (sans JavaScript, ils partent vides).
Limite Netlify : 8 Mo de fichiers par envoi ; le formulaire affiche le total et bloque l'envoi au-delà (17/11/2026), le texte sous le formulaire invite à envoyer le reste par e-mail
(info@sbdesign.fr).

À faire dans Netlify **après le premier déploiement** qui contient le formulaire :
1. Forms → vérifier que `agence-var` apparaît avec tous les champs ci-dessus ;
2. Forms → `agence-var` → Form notifications → **Add notification → Email notification** vers l’adresse relevée
   par Mail sur le Mac de Savério (à confirmer par Savério : decosanit@me.com ou contact@rsd-agencements.com) ;
3. un envoi de test par langue : vérifier le sujet du mail reçu, la présence de `travaux` et `documents`,
   les pièces jointes, puis la redirection vers la page de remerciement.

Le dossier à télécharger est dans `public/docs/dossier-soumission-agences-sbdesign.pdf`.

# Formulaires agences : Pipedrive et suivi (ajout du 12/11/2026)

**Deux sorties par soumission, indépendantes :**
1. la notification e-mail Netlify, lue par le script de premier avis de Savério (à créer dès qu'il a confirmé l'adresse) ;
2. une notification Netlify « HTTP POST », limitée au formulaire `agence-var`, vers Zapier.

**Zapier** : workflow « RSD & SB Design_Formulaire agences_Website_Pipedrive »
(https://zapier.com/workflow/01a1cfd4-d650-7166-be83-46e4107b8255), un seul pour les deux sites, qui route sur `form_name` :
`agence` → pipeline RSD Agencement, Marque RSD Agencements ; `agence-var` → pipeline SB Design, Marque SB Design
(étape « Nouveau lead » dans les deux cas). Il retrouve ou crée l'organisation (l'agence, par nom exact) et la personne
(l'agent, par e-mail), crée l'affaire « Agence · <agence> · <adresse> » avec Source du lead = « Agence immobilière (site web) »,
puis une note récapitulative avec les liens vers les pièces jointes.
**17/11/2026 : 6 nouveaux champs fichiers** (`diagnostics_fichier`, `plans_fichier`, `copro_fichier`, `autre_fichier`, `photo3`, `photo4`) : à ajouter à la note du workflow Zapier, sinon leurs liens n'y apparaissent pas (ils restent dans Netlify et dans la notification e-mail).

**Champs d'affaire Pipedrive « — Agences »** (créés le 12/11/2026) : Adresse du bien, Surface habitable (m²), Prix affiché,
En vente depuis (mois), État général, Travaux à prévoir, Acquéreur positionné, Étage, Année de construction, Copropriété,
N° DPE, Classe DPE, Pièces disponibles, Ce qui bloque la vente. `type_bien` alimente le champ existant « Type de bien ».
Les `value` du formulaire sont traduites en options Pipedrive dans le code du workflow : **changer une `value` ou ajouter
une case à cocher impose de mettre à jour le workflow**, sinon la valeur reste dans la note mais pas dans le champ.

**Suivi** : l'envoi natif recharge la page, c'est donc la page de remerciement (`/espace-agences-merci/` et `/en/espace-agences-merci/`) qui pousse `agence_lead` dans le
dataLayer, avec `form_id`, et seulement après un vrai envoi (témoin `sessionStorage` `rsd_agence_envoi`). Dans GTM :
déclencheur « CE - agence_lead », balises « GA4 - agence_lead » et « Meta Pixel - AgenceLead » (événement personnalisé
`AgenceLead`). `agence_lead` est un événement clé GA4. Il est volontairement distinct de `generate_lead` / `Lead` :
un agent immobilier n'est pas un prospect particulier.

**Piège Netlify (constaté le 12/11/2026)** : Netlify ne garde qu'une définition par nom de formulaire. Toute page qui
réutilise le formulaire `contact` doit déclarer **tous** ses champs (en cachés s'ils ne sont pas demandés), sinon la page
Contact peut perdre ceux qui manquent. C'est le rôle des champs cachés vides du formulaire de la page climatisation.
