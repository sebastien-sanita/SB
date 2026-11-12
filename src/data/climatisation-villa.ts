/**
 * Page « Climatisation invisible en villa » — /climatisation-villa-var/ (FR uniquement).
 * Textes : maquette client du 12/11/2026. Aucun prix sur cette page (décision client).
 * Gabarit : src/pages/climatisation-villa-var.astro.
 */

export const climContent = {
  meta: {
    title: "Climatisation invisible en villa, Var | SB Design",
    description:
      "Climatisation pensée avec le projet : unités cachées, groupes dissimulés, démarches en site classé, suivi à distance.",
  },
  hero: {
    label: "Climatisation invisible · Var et Côte d’Azur",
    titleLine1: "Une villa fraîche,",
    titleLine2: "sans rien qui dépasse",
    subtitle:
      "Nous intégrons la climatisation au projet d’architecture intérieure : unités cachées en faux plafond ou dans le mobilier, groupes extérieurs dissimulés dans un local technique ou derrière un habillage, réseaux encastrés pendant les travaux.",
    imageAlt:
      "Salon de la Villa Azur vu à travers une verrière : canapé d’angle, bibliothèque intégrée et plafond lisse à spots encastrés",
  },
  cta: { etude: "Demander une étude d’intégration", formules: "Voir les formules" },
  arguments: {
    title1: "Pensée avec le projet,",
    title2: "pas ajoutée après",
    intro:
      "La climatisation se décide au moment des plans : c’est là qu’on peut la rendre invisible et silencieuse, pièce par pièce.",
    items: [
      {
        tag: "Invisible",
        title: "Pas de goulotte",
        text: "Liaisons encastrées, unité gainable en faux plafond de couloir ou de salle de bains, grilles fines alignées sur le calepinage.",
      },
      {
        tag: "Extérieurs",
        title: "Groupes dissimulés",
        text: "Local technique, habillage bois ou pierre, implantation hors des vues de la terrasse et de la piscine.",
      },
      {
        tag: "Démarches",
        title: "Copropriété, mairie, ABF",
        text: "Sites classés et inscrits du littoral, abords de monuments, copropriétés de résidences : nous montons les dossiers.",
      },
      {
        tag: "Un seul chantier",
        title: "Finitions comprises",
        text: "Suivi de chantier à distance avec photos et comptes rendus, pour les propriétaires qui ne sont pas sur place.",
      },
    ],
  },
  formules: {
    title1: "Quatre",
    title2: "formules",
    intro:
      "Grouper la climatisation avec d’autres travaux mutualise les déplacements, le placo, la peinture et les démarches. Chaque devis montre la ligne « économie travaux groupés ».",
    items: [
      {
        tag: "Le plus demandé",
        title: "Clim + suite parentale",
        text: "Chambre, dressing et salle de bains traités ensemble, unité gainable dans le faux plafond du dressing.",
      },
      {
        tag: "Pièce de vie",
        title: "Clim + pièce de vie",
        text: "Séjour et cuisine ouverts, diffusion linéaire intégrée au faux plafond ou aux bibliothèques.",
      },
      {
        tag: "Toute la villa",
        title: "Clim + rénovation",
        text: "Réseau prévu dès les plans, une bouche par pièce, réglage pièce par pièce.",
      },
      {
        tag: "Seule",
        title: "Clim intégrée",
        text: "Même exigence d’intégration, avec reprises de finitions, sans autres travaux.",
      },
    ],
  },
  etapes: {
    title1: "Comment",
    title2: "ça se passe",
    steps: [
      { title: "Visite et relevé", text: "Contraintes de l’immeuble, passages possibles, emplacement des unités." },
      { title: "Étude d’intégration", text: "Plan des réseaux, vues 3D, démarches à prévoir." },
      { title: "Devis unique", text: "Climatisation et travaux associés, avec la ligne travaux groupés." },
      { title: "Autorisations", text: "Déclaration préalable, ABF ou site classé si besoin." },
      { title: "Chantier et mise en service", text: "Pose, finitions, réglages, contrat d’entretien proposé." },
    ],
  },
  faq: {
    title1: "Questions",
    title2: "fréquentes",
    items: [
      {
        q: "Peut-on climatiser en site classé ?",
        a: "Oui, avec une implantation qui ne se voit pas depuis l’extérieur et un dossier soigné. Les délais d’autorisation sont plus longs : il faut s’y prendre tôt.",
      },
      {
        q: "Je suis à l’étranger une partie de l’année",
        a: "Nous suivons le chantier pour vous, avec comptes rendus réguliers en français, en anglais ou en italien.",
      },
      {
        q: "La climatisation chauffe-t-elle aussi ?",
        a: "Oui, les systèmes réversibles chauffent l’hiver et complètent ou remplacent le chauffage existant.",
      },
      {
        q: "Est-ce bruyant ?",
        a: "Une unité gainable bien dimensionnée reste discrète. Nous plaçons les unités loin des chambres quand c’est possible.",
      },
      {
        q: "Et l’entretien d’une résidence secondaire ?",
        a: "Un contrat d’entretien annuel avec visite avant l’été, adapté aux maisons occupées une partie de l’année.",
      },
    ],
  },
  form: {
    title1: "Demander une étude",
    title2: "d’intégration",
    intro:
      "Dites-nous où se trouve la villa et ce que vous envisagez. Nous vous rappelons pour fixer la visite, sur place ou en visio.",
    honeypot: "Ne pas remplir",
    nom: "Nom",
    telephone: "Téléphone",
    email: "E-mail",
    formule: "Formule",
    selectDefault: "Sélectionnez",
    formules: ["Clim + suite parentale", "Clim + pièce de vie", "Clim + rénovation complète", "Clim seule"],
    ville: "Ville ou code postal de la villa",
    villePlaceholder: "ex. Bormes-les-Mimosas",
    message: "Message",
    messagePlaceholder: "Votre projet, vos contraintes, la période souhaitée…",
    optional: "facultatif",
    submit: "Être rappelé",
    success: "Merci, votre demande est bien reçue. Nous vous rappelons pour fixer la visite, sur place ou en visio.",
    error: "L’envoi n’a pas abouti. Merci de réessayer, ou de nous écrire à",
  },
};
