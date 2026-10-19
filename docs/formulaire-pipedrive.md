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
