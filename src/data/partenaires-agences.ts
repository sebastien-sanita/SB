/**
 * Page « Partenaires agences » — /partenaires-agences-var/ (FR) et /en/real-estate-agents/ (EN).
 * Textes : maquette client du 12/11/2026. Gabarit : src/components/sections/AgencesPage.astro.
 *
 * Loi Hoguet : ne jamais parler d'argent versé aux agents sur ces pages.
 * Les valeurs envoyées par le formulaire (options, cases) restent en français dans les deux
 * langues : elles sont définies dans src/components/sections/AgenceForm.astro, pas ici.
 */

export type AgencesLang = "fr" | "en";

/** Adresse e-mail de contact affichée sur le site (pied de page, page contact). */
export const agencesEmail = "info@sbdesign.fr";

export const agencesPdf = "/docs/dossier-soumission-agences-sbdesign.pdf";

/** Chemins réels des deux versions (slugs différents) : hreflang + sélecteur de langue. */
export const agencesPaths: Record<AgencesLang, string> = {
  fr: "/partenaires-agences-var/",
  en: "/en/real-estate-agents/",
};

export const agencesMerciPaths: Record<AgencesLang, string> = {
  fr: "/espace-agences-merci/",
  en: "/en/espace-agences-merci/",
};

const fr = {
  meta: {
    title: "Partenaires agences immobilières du Var | SB Design Riviera",
    description:
      "Villas à rénover de Hyères à Saint-Tropez : premier avis sous 24 h, projet chiffré et vues 3D pour vos acquéreurs, en français et en anglais.",
  },
  hero: {
    label: "Partenaires agences · Var et Côte d’Azur",
    titleLine1: "Une villa qui ne se vend pas ?",
    titleLine2: "Vendez-la avec son projet",
    subtitle:
      "Pour les agences de Hyères à Saint-Tropez et Sainte-Maxime. Sous 24 h, un premier avis. Après une visite, sous 72 h, un dossier en trois scénarios, en français et en anglais, pour vos vendeurs et vos acquéreurs, y compris à l’étranger.",
    imageAlt:
      "Villa Aiguebelle au Lavandou : allée dallée entre palmiers et murets en pierre, piscine et vue sur la mer",
  },
  cta: { submit: "Soumettre un bien", download: "Télécharger le dossier" },
  scenarios: {
    title1: "Trois scénarios",
    title2: "pour débloquer la vente",
    intro:
      "Un acquéreur raisonne en budget global : achat plus travaux. Nous lui donnons ce chiffre avant qu’il ne l’imagine trop haut.",
    items: [
      {
        key: "A",
        title: "Vendre en l’état",
        text: "Le coût réel des travaux lot par lot, pour défendre le prix ou justifier un ajustement.",
        quote: "Les travaux sont chiffrés, pas devinés.",
      },
      {
        key: "B",
        title: "Rafraîchir avant la vente",
        text: "Avant la saison : peinture, suite parentale, climatisation invisible, extérieurs.",
        quote: "Le bien se présente au niveau de son prix.",
      },
      {
        key: "C",
        title: "Vendu avec son projet",
        text: "Plans, vues 3D et devis ferme valable 6 mois : l’acquéreur à distance sait ce qu’il achète.",
        quote: "L’acquéreur achète un projet, pas un chantier.",
      },
    ],
    quoteOpen: "« ",
    quoteClose: " »",
  },
  avis: {
    title1: "Le premier avis,",
    title2: "sous 24 h",
    intro: "À partir de l’adresse et des pièces de votre mandat.",
    items: [
      "DPE officiel du bien, retrouvé dans la base de l’ADEME",
      "Ventes réelles du quartier (DVF) : prix médian au m² et haut de marché",
      "Lecture prix affiché + travaux face au marché, pour le vendeur et pour l’acquéreur",
      "Urbanisme : PLU, loi Littoral, sites classés, ABF, risques (feux de forêt, submersion)",
      "Enveloppe de travaux d’après nos chantiers récents",
    ],
  },
  dossier: {
    title1: "Le dossier,",
    title2: "72 h après la visite",
    intro: "Une demi-journée sur place avec relevé 3D.",
    steps: [
      { title: "Coût réel des travaux", text: "Lot par lot, sans surprise pour l’acquéreur." },
      { title: "Vues 3D du projet", text: "Pour les annonces et les visites." },
      { title: "Devis ferme 6 mois", text: "L’acquéreur sait ce qu’il signe." },
    ],
    note: "Le premier dossier est offert à chaque nouvelle agence partenaire. Version anglaise sur demande.",
  },
  soumission: {
    title1: "Le dossier",
    title2: "de soumission",
    intro:
      "La fiche du bien et la liste des pièces à joindre. Ces pièces sont en général déjà dans votre dossier de mandat.",
    fileLabel: "Dossier de soumission SB Design Riviera",
    fileMeta:
      "PDF · 2 pages · fiche du bien et liste des pièces (DPE complet, diagnostics, plans, photos, règlement de copropriété, PV d’AG…)",
  },
  form: {
    title1: "Soumettre",
    title2: "un bien",
    honeypot: "Ne pas remplir",
    legendAgence: "Votre agence",
    legendBien: "Le bien",
    legendAnalyse: "Pour une analyse fiable dès le premier avis",
    analyseIntro:
      "Ces informations sont en général déjà dans votre dossier de mandat. Avec le numéro du DPE, nous retrouvons le diagnostic complet dans la base officielle de l’ADEME.",
    agence: "Agence",
    agent: "Votre nom",
    telephone: "Téléphone",
    email: "E-mail",
    adresse: "Adresse complète du bien",
    adressePlaceholder: "numéro, rue, code postal, ville",
    typeBien: "Type",
    surface: "Surface habitable (m²)",
    prix: "Prix affiché",
    mois: "En vente depuis (mois)",
    etat: "État général",
    acquereur: "Un acquéreur est-il positionné ?",
    travaux: "Travaux à prévoir selon vous",
    message: "Ce qui bloque la vente, selon vous",
    dpeNumero: "Numéro du DPE (13 caractères)",
    dpeNumeroPlaceholder: "ex. 2369E1234567X",
    dpeNumeroTitle: "13 caractères, chiffres et lettres",
    dpeClasse: "Classe DPE",
    etage: "Étage (0 = rez-de-chaussée)",
    annee: "Année de construction",
    copropriete: "En copropriété ?",
    documents: "Pièces que vous pouvez nous transmettre",
    dpeFichier: "DPE ou diagnostics (PDF)",
    photo1: "Photo 1",
    photo2: "Photo 2",
    optional: "facultatif",
    submit: "Demander le premier avis",
    filesNote:
      "8 Mo au total pour les fichiers. Pour le reste du dossier (plans, PV d’AG, autres photos), répondez simplement à notre premier avis ou écrivez à",
    options: {
      type_bien: { Villa: "Villa", Appartement: "Appartement", Maison: "Maison" },
      etat: { rafraichir: "À rafraîchir", renover: "À rénover", lourd: "Rénovation lourde", bon: "Bon état" },
      ouiNon: { oui: "oui", non: "non" },
      dpeInconnu: "je ne sais pas",
      travaux: {
        "salle de bain": "Salle de bains",
        cuisine: "Cuisine",
        climatisation: "Climatisation",
        menuiseries: "Fenêtres",
        sols: "Sols",
        "électricité": "Électricité",
        redistribution: "Redistribution des pièces",
      },
      documents: {
        dpe: "DPE complet",
        diagnostics: "Diagnostics (amiante, plomb, électricité, gaz)",
        plans: "Plans ou mesurage Carrez",
        photos: "Photos de toutes les pièces",
        reglement_copro: "Règlement de copropriété",
        pv_ag: "PV des 3 dernières AG",
        copro_fiche: "Carnet d’entretien / plan de travaux de la copropriété",
        urbanisme_anterieur: "Permis ou déclarations antérieurs",
        taxe_fonciere: "Taxe foncière",
        factures_travaux: "Factures de travaux récents",
      },
    },
  },
  merci: {
    metaTitle: "Demande reçue | SB Design Riviera",
    metaDescription: "Votre demande est bien reçue : premier avis sous 24 h ouvrées.",
    label: "Partenaires agences",
    title: "Votre demande est bien reçue",
    text: "Merci. Nous étudions le bien et revenons vers vous avec un premier avis sous 24 h ouvrées.",
    more: "Pour compléter le dossier (plans, PV d’AG, autres photos), répondez simplement à ce premier avis ou écrivez à",
    back: "Retour à la page partenaires",
  },
};

const en: typeof fr = {
  meta: {
    title: "Estate agent partners in the Var | SB Design Riviera",
    description:
      "Villas to renovate from Hyères to Saint-Tropez: a first opinion within 24 hours, a costed project and 3D views for your buyers, in French and English.",
  },
  hero: {
    label: "Estate agent partners · Var and French Riviera",
    titleLine1: "A villa that will not sell?",
    titleLine2: "Sell it with its project",
    subtitle:
      "For estate agencies from Hyères to Saint-Tropez and Sainte-Maxime. A first opinion within 24 hours. Then, within 72 hours of a site visit, a report setting out three scenarios, in French and in English, for your vendors and your buyers, including those based abroad.",
    imageAlt:
      "Villa Aiguebelle in Le Lavandou: paved path between palm trees and dry-stone walls, swimming pool and sea view",
  },
  cta: { submit: "Submit a property", download: "Download the pack" },
  scenarios: {
    title1: "Three scenarios",
    title2: "to unlock the sale",
    intro:
      "A buyer thinks in terms of an overall budget: purchase plus works. We give them that figure before they imagine it far too high.",
    items: [
      {
        key: "A",
        title: "Sell as it stands",
        text: "The true cost of the works, trade by trade, to defend the asking price or justify an adjustment.",
        quote: "The works are costed, not guessed.",
      },
      {
        key: "B",
        title: "Refresh before the sale",
        text: "Ahead of the season: paintwork, master suite, invisible air conditioning, outdoor areas.",
        quote: "The property presents at the level of its price.",
      },
      {
        key: "C",
        title: "Sold with its project",
        text: "Plans, 3D views and a fixed quotation valid for six months: a buyer at a distance knows exactly what they are buying.",
        quote: "The buyer is purchasing a project, not a building site.",
      },
    ],
    quoteOpen: "“",
    quoteClose: "”",
  },
  avis: {
    title1: "The first opinion,",
    title2: "within 24 hours",
    intro: "Based on the address and the documents already in your instruction file.",
    items: [
      "The property’s official DPE (energy performance certificate), retrieved from the ADEME register",
      "Actual sales recorded in the neighbourhood (DVF data): median price per m² and top of the market",
      "Asking price plus works, read against the market, for the vendor and for the buyer",
      "Planning: PLU (local plan), Loi Littoral (coastal protection law), listed sites, ABF (heritage architect), risks (wildfire, coastal flooding)",
      "A works budget drawn from our recent projects",
    ],
  },
  dossier: {
    title1: "The report,",
    title2: "72 hours after the visit",
    intro: "Half a day on site, with a 3D survey.",
    steps: [
      { title: "True cost of the works", text: "Trade by trade, with no surprises for the buyer." },
      { title: "3D views of the project", text: "For your listings and your viewings." },
      { title: "Fixed quotation, six months", text: "The buyer knows what they are signing." },
    ],
    note: "The first report is offered to every new partner agency. English version on request.",
  },
  soumission: {
    title1: "The submission",
    title2: "pack",
    intro:
      "The property sheet and the list of documents to attach. These documents are generally already in your instruction file.",
    fileLabel: "SB Design Riviera submission pack",
    fileMeta:
      "PDF, in French · 2 pages · property sheet and list of documents (full DPE, surveys, plans, photographs, co-ownership rules, general meeting minutes…)",
  },
  form: {
    title1: "Submit",
    title2: "a property",
    honeypot: "Do not fill in",
    legendAgence: "Your agency",
    legendBien: "The property",
    legendAnalyse: "For a reliable analysis from the first opinion",
    analyseIntro:
      "This information is generally already in your instruction file. With the DPE number, we retrieve the full energy report from the official ADEME register.",
    agence: "Agency",
    agent: "Your name",
    telephone: "Telephone",
    email: "Email",
    adresse: "Full address of the property",
    adressePlaceholder: "number, street, postcode, town",
    typeBien: "Type",
    surface: "Living area (m²)",
    prix: "Asking price",
    mois: "On the market for (months)",
    etat: "General condition",
    acquereur: "Is a buyer already interested?",
    travaux: "Works required, in your view",
    message: "What is holding up the sale, in your view",
    dpeNumero: "DPE number (13 characters)",
    dpeNumeroPlaceholder: "e.g. 2369E1234567X",
    dpeNumeroTitle: "13 characters, digits and letters",
    dpeClasse: "DPE rating",
    etage: "Floor (0 = ground floor)",
    annee: "Year of construction",
    copropriete: "In co-ownership (copropriété)?",
    documents: "Documents you are able to send us",
    dpeFichier: "DPE or surveys (PDF)",
    photo1: "Photograph 1",
    photo2: "Photograph 2",
    optional: "optional",
    submit: "Request the first opinion",
    filesNote:
      "8 MB in total for the files. For the rest of the file (plans, general meeting minutes, further photographs), simply reply to our first opinion or write to",
    options: {
      type_bien: { Villa: "Villa", Appartement: "Apartment", Maison: "House" },
      etat: { rafraichir: "To refresh", renover: "To renovate", lourd: "Major renovation", bon: "Good condition" },
      ouiNon: { oui: "yes", non: "no" },
      dpeInconnu: "I do not know",
      travaux: {
        "salle de bain": "Bathroom",
        cuisine: "Kitchen",
        climatisation: "Air conditioning",
        menuiseries: "Windows",
        sols: "Flooring",
        "électricité": "Electrics",
        redistribution: "Reconfiguring the rooms",
      },
      documents: {
        dpe: "Full DPE report",
        diagnostics: "Surveys (asbestos, lead, electrics, gas)",
        plans: "Plans or certified floor area (Carrez)",
        photos: "Photographs of every room",
        reglement_copro: "Co-ownership rules",
        pv_ag: "Minutes of the last 3 general meetings",
        copro_fiche: "Building maintenance log / co-ownership works plan",
        urbanisme_anterieur: "Earlier planning permissions or declarations",
        taxe_fonciere: "Property tax notice (taxe foncière)",
        factures_travaux: "Invoices for recent works",
      },
    },
  },
  merci: {
    metaTitle: "Request received | SB Design Riviera",
    metaDescription: "Your request has been received: first opinion within one working day.",
    label: "Estate agent partners",
    title: "Your request has been received",
    text: "Thank you. We are studying the property and will come back to you with a first opinion within one working day.",
    more: "To complete the file (plans, general meeting minutes, further photographs), simply reply to that first opinion or write to",
    back: "Back to the partners page",
  },
};

export const agencesContent: Record<AgencesLang, typeof fr> = { fr, en };
