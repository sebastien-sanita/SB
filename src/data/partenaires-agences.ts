/**
 * Page « Partenaires agences » — /partenaires-agences-var/ (FR) et /en/real-estate-agents/ (EN).
 * Textes : maquette client du 12/11/2026. Gabarit : src/components/sections/AgencesPage.astro.
 *
 * Loi Hoguet : ne jamais parler d'argent versé aux agents sur ces pages.
 * Les valeurs envoyées par le formulaire (options, cases) restent en français dans les deux
 * langues : elles sont définies dans src/components/sections/AgenceForm.astro, pas ici.
 */

export type AgencesLang = "fr" | "en" | "it";

/** Adresse e-mail de contact affichée sur le site (pied de page, page contact). */
export const agencesEmail = "info@sbdesign.fr";

export const agencesPdf = "/docs/dossier-soumission-agences-sbdesign.pdf";

/** Chemins réels des deux versions (slugs différents) : hreflang + sélecteur de langue. */
export const agencesPaths: Record<AgencesLang, string> = {
  fr: "/partenaires-agences-var/",
  en: "/en/real-estate-agents/",
  it: "/it/partner-agenzie-immobiliari/",
};

export const agencesMerciPaths: Record<AgencesLang, string> = {
  fr: "/espace-agences-merci/",
  en: "/en/espace-agences-merci/",
  it: "/it/espace-agences-merci/",
};

const fr = {
  meta: {
    title: "Rénovation de villas avant vente, Bormes | SB Design",
    description:
      "Agences immobilières de Bormes-les-Mimosas et du Lavandou : villa à rénover chiffrée sous 24 h, vues 3D et devis ferme pour vendre plus vite.",
  },
  hero: {
    label: "Partenaires agences · Bormes-les-Mimosas · Le Lavandou",
    titlePrefix: "Villas",
    titleMorphWords: ["À rénover", "À valoriser", "À vendre"],
    subtitle:
      "Une villa qui ne se vend pas ? Vendez-la avec son projet. Pour les agences immobilières de Bormes-les-Mimosas au Rayol-Canadel : premier avis sous 24 h, puis estimation des travaux, vues 3D et devis ferme pour vos acquéreurs, en France comme à l’étranger.",
    imageAlt:
      "Villa Aiguebelle au Lavandou : allée dallée entre palmiers et murets en pierre, piscine et vue sur la mer",
  },
  cta: { submit: "Soumettre un bien", download: "Version PDF" },
  scenarios: {
    title1: "Trois scénarios",
    title2: "pour débloquer la vente",
    keyLabel: "Scénario",
    intro:
      "Notre conviction : chaque villa a un potentiel, et notre rôle est de le révéler, chiffres à l’appui. Un acquéreur raisonne en budget global : achat plus travaux. Nous lui donnons ce chiffre avant qu’il ne l’imagine trop haut, avec un devis professionnel, celui que demandent les banques pour financer les travaux.",
    items: [
      {
        key: "1",
        title: "Vendre en l’état",
        text: "Le coût réel des travaux lot par lot, pour défendre le prix ou justifier un ajustement.",
        quote: "Les travaux sont chiffrés, pas devinés.",
      },
      {
        key: "2",
        title: "Rafraîchir avant la vente",
        text: "Avant la saison : peinture, suite parentale, climatisation invisible, extérieurs.",
        quote: "Le bien se présente au niveau de son prix.",
      },
      {
        key: "3",
        title: "Vendu avec son projet",
        text: "Plans, vues 3D du projet (bien plus qu’un home staging virtuel) et devis ferme valable 6 mois : l’acquéreur à distance sait ce qu’il achète.",
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
    intro: "Une demi-journée sur place avec relevé 3D. Puis un seul interlocuteur, de l’estimation des travaux à la rénovation clé en main.",
    steps: [
      { title: "Coût réel des travaux", text: "Lot par lot, sans surprise pour l’acquéreur." },
      { title: "Vues 3D du projet", text: "Pour les annonces et les visites." },
      { title: "Devis ferme 6 mois", text: "L’acquéreur sait ce qu’il signe." },
    ],
    note: "Le premier dossier est offert à chaque nouvelle agence partenaire. Version anglaise sur demande.",
  },
  soumission: {
    title1: "La version",
    title2: "PDF",
    intro:
      "Vous préférez un document ? Téléchargez la fiche : les mêmes questions que le formulaire ci-dessus, à remplir à l’écran. Envoyez-la à info@sbdesign.fr avec vos documents en PDF et 4 photos maximum. Une seule des deux façons suffit.",
    button: "Télécharger le PDF",
    fileLabel: "Dossier de soumission SB Design Riviera",
    fileMeta:
      "PDF à remplir à l’écran · 2 pages · fiche du bien et liste des pièces (DPE complet, diagnostics, plans, photos, règlement de copropriété, PV d’AG…)",
  },
  depot: {
    kicker: "Espace agences",
    title1: "Soumettre",
    title2: "un bien",
    lead: "C’est ici que tout se passe : un seul formulaire, quelques minutes, et notre premier avis sous 24 h ouvrées.",
    steps: [
      { title: "Le formulaire", text: "Quelques minutes : l’agence, le bien, son DPE." },
      { title: "Vos pièces", text: "Documents en PDF et jusqu’à 4 photos." },
      { title: "Premier avis", text: "Sous 24 h ouvrées, à partager avec votre vendeur." },
    ],
    prepareTitle: "À préparer",
    prepare: [
      "DPE complet (ou son numéro)",
      "Diagnostics techniques",
      "Plans ou mesurage Carrez",
      "4 photos : séjour, cuisine, salle de bains, extérieur",
      "En copropriété : règlement et PV d’AG",
    ],
    prepareNote: "Tout est en général déjà dans votre dossier de mandat. Il manque une pièce ? Envoyez quand même : nous la demanderons ensuite.",
    question: "Une question ?",
  },
  form: {
    title1: "Soumettre",
    title2: "un bien en ligne",
    lead: "Le plus rapide : quelques minutes, vos documents en PDF et jusqu’à 4 photos. Premier avis sous 24 h ouvrées.",
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
    fichiers: {
      legend: "Pièces jointes",
      intro: "Documents en PDF, photos en JPG ou directement depuis votre téléphone : elles sont réduites automatiquement avant l’envoi. 8 Mo au total.",
      docs: [
      { name: "dpe_fichier", label: "DPE complet" },
      { name: "diagnostics_fichier", label: "Diagnostics techniques" },
      { name: "plans_fichier", label: "Plans ou mesurage Carrez" },
      { name: "copro_fichier", label: "Copropriété : règlement et PV d’AG" },
      { name: "autre_fichier", label: "Taxe foncière, autorisations, factures" },
      ],
      photos: "Photos du bien (4 maximum)",
      photosHint: "Choisissez jusqu’à 4 photos en une fois : séjour, cuisine, salle de bains, extérieur.",
      tooMany: "4 photos maximum : seules les 4 premières sont gardées.",
      notPdf: "Ce document doit être un fichier PDF.",
      total: "Total des fichiers",
      tooBig: "Les fichiers dépassent 8 Mo : retirez un document et ajoutez-le plutôt par un lien ci-dessus.",
      wait: "Préparation des photos…",
    },
    optional: "facultatif",
    lienFichiers: "Lien vers d’autres fichiers",
    lienHint: "WeTransfer, Google Drive, Dropbox… pour les fichiers lourds ou les pièces en plus.",
    draftNote: "Vos réponses restent enregistrées sur cet appareil jusqu’à l’envoi.",
    submit: "Demander le premier avis",
    filesNote:
      "Une pièce arrivera plus tard ? Répondez simplement à notre premier avis ou écrivez à",
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
    title: "Villa Renovation Before Sale, Le Lavandou | SB Design",
    description:
      "Estate agents in Bormes-les-Mimosas and Le Lavandou: villas with renovation potential costed within 24 hours, 3D views and a fixed quote to sell faster.",
  },
  hero: {
    label: "Estate agent partners · Bormes-les-Mimosas · Le Lavandou",
    titlePrefix: "Villas",
    titleMorphWords: ["To renovate", "With potential", "To sell"],
    subtitle:
      "A villa that will not sell? Sell it with its project. For estate agencies from Bormes-les-Mimosas to Le Rayol-Canadel: a first opinion within 24 hours, then a renovation cost estimate, 3D views and a fixed quotation for your buyers, in France or abroad.",
    imageAlt:
      "Villa Aiguebelle in Le Lavandou: paved path between palm trees and dry-stone walls, swimming pool and sea view",
  },
  cta: { submit: "Submit a property", download: "PDF version" },
  scenarios: {
    title1: "Three scenarios",
    title2: "to unlock the sale",
    keyLabel: "Scenario",
    intro:
      "Our conviction: every villa has potential, and our role is to reveal it, with figures to back it up. A buyer thinks in terms of an overall budget: purchase plus works. We give them that figure before they imagine it far too high, with a professional quotation of the kind banks ask for to finance the works.",
    items: [
      {
        key: "1",
        title: "Sell as it stands",
        text: "The true cost of the works, trade by trade, to defend the asking price or justify an adjustment.",
        quote: "The works are costed, not guessed.",
      },
      {
        key: "2",
        title: "Refresh before the sale",
        text: "Ahead of the season: paintwork, master suite, invisible air conditioning, outdoor areas.",
        quote: "The property presents at the level of its price.",
      },
      {
        key: "3",
        title: "Sold with its project",
        text: "Plans, 3D views of the project (far more than virtual staging) and a fixed quotation valid for six months: a buyer at a distance knows exactly what they are buying.",
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
    intro: "Half a day on site, with a 3D survey. Then a single contact, from the cost estimate to turnkey renovation.",
    steps: [
      { title: "True cost of the works", text: "Trade by trade, with no surprises for the buyer." },
      { title: "3D views of the project", text: "For your listings and your viewings." },
      { title: "Fixed quotation, six months", text: "The buyer knows what they are signing." },
    ],
    note: "The first report is offered to every new partner agency. English version on request.",
  },
  soumission: {
    title1: "The PDF",
    title2: "version",
    intro:
      "Prefer a document? Download the form: the same questions as the online form above, to fill in on screen. Send it to info@sbdesign.fr with your documents as PDF and up to 4 photographs. One of the two is enough.",
    button: "Download the PDF",
    fileLabel: "SB Design Riviera submission pack",
    fileMeta:
      "Fillable PDF, in French · 2 pages · property sheet and list of documents (full DPE, surveys, plans, photographs, co-ownership rules, general meeting minutes…)",
  },
  depot: {
    kicker: "Estate agent area",
    title1: "Submit",
    title2: "a property",
    lead: "This is where everything happens: one form, a few minutes, and our first opinion within one working day.",
    steps: [
      { title: "The form", text: "A few minutes: the agency, the property, its DPE." },
      { title: "Your documents", text: "Documents as PDF and up to 4 photographs." },
      { title: "First opinion", text: "Within one working day, to share with your vendor." },
    ],
    prepareTitle: "Have ready",
    prepare: [
      "Full DPE report (or its number)",
      "Technical surveys",
      "Plans or Carrez measurement",
      "4 photographs: living room, kitchen, bathroom, outside",
      "In co-ownership: rules and general meeting minutes",
    ],
    prepareNote: "Everything is usually already in your instruction file. A document missing? Send anyway: we will ask for it afterwards.",
    question: "A question?",
  },
  form: {
    title1: "Submit",
    title2: "a property online",
    lead: "The quickest way: a few minutes, your documents as PDF and up to 4 photographs. First opinion within one working day.",
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
    fichiers: {
      legend: "Attachments",
      intro: "Documents as PDF, photographs as JPG or straight from your phone: they are reduced automatically before sending. 8 MB in total.",
      docs: [
      { name: "dpe_fichier", label: "Full DPE report" },
      { name: "diagnostics_fichier", label: "Technical surveys" },
      { name: "plans_fichier", label: "Plans or certified floor area (Carrez)" },
      { name: "copro_fichier", label: "Co-ownership rules and minutes" },
      { name: "autre_fichier", label: "Property tax, permissions, invoices" },
      ],
      photos: "Photographs of the property (4 maximum)",
      photosHint: "Select up to 4 photographs at once: living room, kitchen, bathroom, outside.",
      tooMany: "4 photographs maximum: only the first 4 are kept.",
      notPdf: "This document must be a PDF file.",
      total: "Total size of files",
      tooBig: "The files exceed 8 MB: remove a document and add it via a link above instead.",
      wait: "Preparing photographs…",
    },
    optional: "optional",
    lienFichiers: "Link to further files",
    lienHint: "WeTransfer, Google Drive, Dropbox… for large files or extra documents.",
    draftNote: "Your answers are kept on this device until you send them.",
    submit: "Request the first opinion",
    filesNote:
      "A document will follow later? Simply reply to our first opinion or write to",
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

const it: typeof fr = {
  meta: {
    title: "Ristrutturazione ville prima della vendita | SB Design",
    description:
      "Agenzie immobiliari di Bormes-les-Mimosas e Le Lavandou: villa da ristrutturare stimata in 24 ore, viste 3D e preventivo fisso per vendere prima.",
  },
  hero: {
    label: "Agenzie partner · Bormes-les-Mimosas · Le Lavandou",
    titlePrefix: "Ville",
    titleMorphWords: ["Da ristrutturare", "Da valorizzare", "Da vendere"],
    subtitle:
      "Una villa che non si vende? Vendetela con il suo progetto. Per le agenzie immobiliari da Bormes-les-Mimosas a Le Rayol-Canadel: un primo parere entro 24 ore, poi stima dei lavori, viste 3D e preventivo fisso per i vostri acquirenti, in Francia come all’estero.",
    imageAlt:
      "Villa Aiguebelle a Le Lavandou: vialetto lastricato tra palme e muretti in pietra, piscina e vista sul mare",
  },
  cta: { submit: "Proporre un immobile", download: "Versione PDF" },
  scenarios: {
    title1: "Tre scenari",
    title2: "per sbloccare la vendita",
    keyLabel: "Scenario",
    intro:
      "La nostra convinzione: ogni villa ha un potenziale, e il nostro ruolo è rivelarlo, cifre alla mano. Un acquirente ragiona in budget complessivo: acquisto più lavori. Gli diamo questa cifra prima che la immagini troppo alta, con un preventivo professionale, quello che le banche richiedono per finanziare i lavori.",
    items: [
      {
        key: "1",
        title: "Vendere così com’è",
        text: "Il costo reale dei lavori, voce per voce, per difendere il prezzo o giustificare un adeguamento.",
        quote: "I lavori sono stimati, non indovinati.",
      },
      {
        key: "2",
        title: "Rinfrescare prima della vendita",
        text: "Prima della stagione: pittura, suite padronale, climatizzazione invisibile, esterni.",
        quote: "L’immobile si presenta all’altezza del suo prezzo.",
      },
      {
        key: "3",
        title: "Venduta con il suo progetto",
        text: "Planimetrie, viste 3D del progetto (molto più di un home staging virtuale) e preventivo fisso valido 6 mesi: l’acquirente a distanza sa cosa compra.",
        quote: "L’acquirente compra un progetto, non un cantiere.",
      },
    ],
    quoteOpen: "«",
    quoteClose: "»",
  },
  avis: {
    title1: "Il primo parere,",
    title2: "entro 24 ore",
    intro: "A partire dall’indirizzo e dai documenti del vostro mandato.",
    items: [
      "DPE ufficiale dell’immobile (certificazione energetica francese), recuperato dal registro dell’ADEME",
      "Vendite reali del quartiere (dati DVF): prezzo mediano al m² e fascia alta del mercato",
      "Prezzo richiesto più lavori, confrontato con il mercato, per il venditore e per l’acquirente",
      "Urbanistica: PLU (piano locale), legge sul litorale, siti tutelati, ABF (architetto dei beni culturali), rischi (incendi boschivi, mareggiate)",
      "Budget dei lavori basato sui nostri cantieri recenti",
    ],
  },
  dossier: {
    title1: "Il dossier,",
    title2: "72 ore dopo il sopralluogo",
    intro: "Mezza giornata sul posto con rilievo 3D. Poi un solo interlocutore, dalla stima dei lavori alla ristrutturazione chiavi in mano.",
    steps: [
      { title: "Costo reale dei lavori", text: "Voce per voce, senza sorprese per l’acquirente." },
      { title: "Viste 3D del progetto", text: "Per i vostri annunci e le vostre visite." },
      { title: "Preventivo fisso 6 mesi", text: "L’acquirente sa cosa firma." },
    ],
    note: "Il primo dossier è offerto a ogni nuova agenzia partner. Versione inglese su richiesta.",
  },
  soumission: {
    title1: "La versione",
    title2: "PDF",
    intro:
      "Preferite un documento? Scaricate la scheda: le stesse domande del modulo qui sopra, da compilare sullo schermo. Inviatela a info@sbdesign.fr con i documenti in PDF e al massimo 4 foto. Basta uno dei due modi.",
    button: "Scaricare il PDF",
    fileLabel: "Dossier di presentazione SB Design Riviera",
    fileMeta:
      "PDF compilabile, in francese · 2 pagine · scheda dell’immobile ed elenco dei documenti (DPE completo, diagnosi, planimetrie, foto, regolamento di condominio, verbali di assemblea…)",
  },
  depot: {
    kicker: "Area agenzie",
    title1: "Proporre",
    title2: "un immobile",
    lead: "È qui che succede tutto: un solo modulo, pochi minuti, e il nostro primo parere entro un giorno lavorativo.",
    steps: [
      { title: "Il modulo", text: "Pochi minuti: l’agenzia, l’immobile, il DPE." },
      { title: "I documenti", text: "Documenti in PDF e fino a 4 foto." },
      { title: "Primo parere", text: "Entro un giorno lavorativo, da condividere con il venditore." },
    ],
    prepareTitle: "Da preparare",
    prepare: [
      "DPE completo (o il suo numero)",
      "Diagnosi tecniche",
      "Planimetrie o misurazione Carrez",
      "4 foto: soggiorno, cucina, bagno, esterni",
      "In condominio: regolamento e verbali di assemblea",
    ],
    prepareNote: "Tutto è in genere già nel vostro dossier di mandato. Manca un documento? Inviate comunque: lo chiederemo dopo.",
    question: "Una domanda?",
  },
  form: {
    title1: "Proporre",
    title2: "un immobile online",
    lead: "Il modo più rapido: pochi minuti, i documenti in PDF e fino a 4 foto. Primo parere entro un giorno lavorativo.",
    honeypot: "Non compilare",
    legendAgence: "La vostra agenzia",
    legendBien: "L’immobile",
    legendAnalyse: "Per un’analisi affidabile fin dal primo parere",
    analyseIntro:
      "Queste informazioni sono in genere già nel vostro dossier di mandato. Con il numero del DPE recuperiamo la diagnosi completa dal registro ufficiale dell’ADEME.",
    agence: "Agenzia",
    agent: "Il vostro nome",
    telephone: "Telefono",
    email: "E-mail",
    adresse: "Indirizzo completo dell’immobile",
    adressePlaceholder: "numero, via, codice postale, comune",
    typeBien: "Tipo",
    surface: "Superficie abitabile (m²)",
    prix: "Prezzo richiesto",
    mois: "In vendita da (mesi)",
    etat: "Stato generale",
    acquereur: "C’è già un acquirente interessato?",
    travaux: "Lavori da prevedere secondo voi",
    message: "Cosa blocca la vendita, secondo voi",
    dpeNumero: "Numero del DPE (13 caratteri)",
    dpeNumeroPlaceholder: "es. 2369E1234567X",
    dpeNumeroTitle: "13 caratteri, cifre e lettere",
    dpeClasse: "Classe DPE",
    etage: "Piano (0 = piano terra)",
    annee: "Anno di costruzione",
    copropriete: "In condominio (copropriété)?",
    documents: "Documenti che potete inviarci",
    fichiers: {
      legend: "Allegati",
      intro: "Documenti in PDF, foto in JPG o direttamente dal telefono: vengono ridotte automaticamente prima dell’invio. 8 MB in totale.",
      docs: [
      { name: "dpe_fichier", label: "DPE completo" },
      { name: "diagnostics_fichier", label: "Diagnosi tecniche" },
      { name: "plans_fichier", label: "Planimetrie o misurazione Carrez" },
      { name: "copro_fichier", label: "Condominio: regolamento e verbali" },
      { name: "autre_fichier", label: "Tassa fondiaria, permessi, fatture" },
      ],
      photos: "Foto dell’immobile (massimo 4)",
      photosHint: "Selezionate fino a 4 foto in una volta: soggiorno, cucina, bagno, esterni.",
      tooMany: "Massimo 4 foto: vengono tenute solo le prime 4.",
      notPdf: "Questo documento deve essere un file PDF.",
      total: "Totale dei file",
      tooBig: "I file superano 8 MB: togliete un documento e aggiungetelo invece tramite un link qui sopra.",
      wait: "Preparazione delle foto…",
    },
    optional: "facoltativo",
    lienFichiers: "Link ad altri file",
    lienHint: "WeTransfer, Google Drive, Dropbox… per i file pesanti o i documenti in più.",
    draftNote: "Le risposte restano salvate su questo dispositivo fino all’invio.",
    submit: "Richiedere il primo parere",
    filesNote:
      "Un documento arriverà più tardi? Rispondete semplicemente al nostro primo parere oppure scriveteci a",
    options: {
      type_bien: { Villa: "Villa", Appartement: "Appartamento", Maison: "Casa" },
      etat: { rafraichir: "Da rinfrescare", renover: "Da ristrutturare", lourd: "Ristrutturazione importante", bon: "Buono stato" },
      ouiNon: { oui: "sì", non: "no" },
      dpeInconnu: "Non lo so",
      travaux: {
        "salle de bain": "Bagno",
        cuisine: "Cucina",
        climatisation: "Climatizzazione",
        menuiseries: "Serramenti",
        sols: "Pavimenti",
        "électricité": "Impianto elettrico",
        redistribution: "Ridistribuzione degli spazi",
      },
      documents: {
        dpe: "DPE completo",
        diagnostics: "Diagnosi (amianto, piombo, elettricità, gas)",
        plans: "Planimetrie o misurazione Carrez",
        photos: "Foto di tutte le stanze",
        reglement_copro: "Regolamento di condominio",
        pv_ag: "Verbali delle ultime 3 assemblee",
        copro_fiche: "Libretto di manutenzione / piano lavori del condominio",
        urbanisme_anterieur: "Permessi o dichiarazioni precedenti",
        taxe_fonciere: "Avviso della tassa fondiaria (taxe foncière)",
        factures_travaux: "Fatture di lavori recenti",
      },
    },
  },
  merci: {
    metaTitle: "Richiesta ricevuta | SB Design Riviera",
    metaDescription: "La vostra richiesta è stata ricevuta: primo parere entro un giorno lavorativo.",
    label: "Agenzie partner",
    title: "La vostra richiesta è stata ricevuta",
    text: "Grazie. Stiamo esaminando l’immobile e vi invieremo un primo parere entro un giorno lavorativo.",
    more: "Per completare il dossier (planimetrie, verbali di assemblea, altre foto), rispondete semplicemente a quel primo parere oppure scriveteci a",
    back: "Torna alla pagina partner",
  },
};

export const agencesContent: Record<AgencesLang, typeof fr> = { fr, en, it };
