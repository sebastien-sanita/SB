/**
 * Page « Climatisation invisible en villa » — FR : /climatisation-villa-var/,
 * EN : /en/air-conditioning-villa-var/, IT : /it/climatizzazione-villa-var/.
 * Textes FR : maquette client du 12/11/2026. Aucun prix sur cette page (décision client).
 * Gabarit : src/components/sections/ClimPage.astro.
 *
 * Formulaire : les VALEURS envoyées (liste des formules) restent en français dans les trois
 * langues (Pipedrive) ; seuls les libellés affichés sont traduits (form.formules).
 */

export type ClimLang = "fr" | "en" | "it";

/** Chemins réels des trois versions : hreflang, sélecteur de langue, pied de page. */
export const climPaths: Record<ClimLang, string> = {
  fr: "/climatisation-villa-var/",
  en: "/en/air-conditioning-villa-var/",
  it: "/it/climatizzazione-villa-var/",
};

/** Valeurs envoyées par le champ `nature_travaux` (identiques dans les trois langues). */
export const climFormuleValues = ["Clim + suite parentale", "Clim + pièce de vie", "Clim + rénovation complète", "Clim seule"];

const fr = {
  meta: {
    title: "Climatisation invisible en villa, Le Lavandou | SB Design",
    description:
      "Climatisation gainable et réversible intégrée à votre villa, de Bormes-les-Mimosas au Lavandou : unités cachées, groupes dissimulés, démarches ABF.",
  },
  hero: {
    label: "Villas · Bormes-les-Mimosas · Le Lavandou",
    titlePrefix: "Climatisation",
    titleMorphWords: ["Invisible", "Gainable", "Réversible"],
    subtitle:
      "Chez SB Design Riviera, la climatisation fait partie de l’architecture : invisible et silencieuse, pensée avec le projet de votre villa à Bormes-les-Mimosas, au Lavandou ou au Rayol-Canadel.",
    imageAlt:
      "Salon de la Villa Azur vu à travers une verrière : canapé d’angle, bibliothèque intégrée et plafond lisse à spots encastrés",
  },
  cta: { etude: "Demander une étude d’intégration", formules: "Voir les formules" },
  arguments: {
    title1: "Pensée avec le projet,",
    title2: "pas ajoutée après",
    intro:
      "Notre conviction : le confort ne doit jamais se voir. Une villa se juge à ses volumes, à sa lumière et à ses matières, pas à ses appareils. Au Lavandou, à Bormes-les-Mimosas, à Cavalière ou à Aiguebelle, beaucoup de villas sont en site classé ou soumises à la loi Littoral : la climatisation se décide donc au moment des plans, là où l’on peut la rendre invisible et silencieuse, pièce par pièce.",
    items: [
      {
        tag: "Invisible",
        title: "Pas de goulotte",
        text: "Liaisons encastrées, climatisation gainable en faux plafond de couloir ou de salle de bains, grilles fines alignées sur le calepinage et les lignes du projet.",
      },
      {
        tag: "Extérieurs",
        title: "Groupes dissimulés",
        text: "Aucun groupe extérieur visible : local technique, habillage bois ou pierre, implantation hors des vues de la terrasse et de la piscine.",
      },
      {
        tag: "Démarches",
        title: "Copropriété, mairie, ABF",
        text: "Sites classés et inscrits du littoral, abords de monuments, copropriétés de résidences : nous montons les dossiers.",
      },
      {
        tag: "Un seul interlocuteur",
        title: "Finitions comprises",
        text: "Nos équipes intègrent climatisation, chauffage, plomberie et agencements sur mesure. Suivi de chantier à distance avec photos et comptes rendus, pour les propriétaires qui ne sont pas sur place.",
      },
    ],
  },
  formules: {
    title1: "Quatre",
    title2: "formules",
    intro:
      "Grouper la climatisation avec d’autres travaux mutualise les déplacements, le placo, la peinture et les démarches. Chaque devis montre la ligne « économie travaux groupés ». Le résultat : une villa confortable été comme hiver, et un patrimoine valorisé.",
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
  chantiers: {
    title1: "Sur nos",
    title2: "chantiers",
    intro:
      "Les unités se posent avant la fermeture des plafonds, avec la rigueur d’un atelier. Une fois les finitions faites, il ne reste qu’une grille fine.",
    items: [
      {
        src: "/images/projets/climatisation-villa-construction-unites-gainables.jpg",
        tag: "Chantier",
        caption: "Villa en construction : les unités gainables sont suspendues sous la dalle, avant les plafonds.",
        alt: "Villa en construction : unités de climatisation gainables suspendues sous la dalle, gaines et câbles en attente avant la pose des plafonds",
      },
      {
        src: "/images/projets/climatisation-villa-renovation-unite-gainable.jpg",
        tag: "Chantier",
        caption: "Villa en rénovation : l’unité gainable est logée sous la dalle, avant l’habillage du plafond.",
        alt: "Villa en rénovation : unité de climatisation gainable fixée sous la dalle, liaisons et câbles en attente avant l’habillage du plafond",
      },
      {
        src: "/images/projets/climatisation-faux-plafond-fente-soufflage-chantier.jpg",
        tag: "Chantier",
        caption: "Le faux plafond se referme : la fente de soufflage est réservée dans les plaques.",
        alt: "Pièce en travaux : faux plafond en plaques de plâtre avec la fente de soufflage de la climatisation réservée, avant les finitions",
      },
      {
        src: "/images/projets/climatisation-cuisine-grille-lineaire-faux-plafond.jpg",
        tag: "Terminé",
        caption: "Une fois fini : une grille linéaire noire, alignée dans le faux plafond de la cuisine.",
        alt: "Cuisine rénovée avec îlot bleu : grille de climatisation linéaire noire intégrée au faux plafond, spots encastrés",
      },
    ],
  },
  faq: {
    title1: "Questions",
    title2: "fréquentes",
    items: [
      {
        q: "Qu’est-ce qu’une climatisation gainable ?",
        a: "Une unité cachée dans un faux plafond, qui distribue l’air frais dans chaque pièce par des gaines et des grilles fines. C’est la solution la plus discrète pour climatiser une villa entière.",
      },
      {
        q: "Faut-il une autorisation pour climatiser une villa au Lavandou ou à Bormes-les-Mimosas ?",
        a: "Souvent, oui : une déclaration préalable en mairie dès que le groupe extérieur modifie l’aspect de la maison, et l’avis de l’Architecte des Bâtiments de France en site protégé. Nous montons ces dossiers pour vous.",
      },
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
        q: "Climatisation réversible ou pompe à chaleur : quelle différence ?",
        a: "Aucune sur le principe : une climatisation réversible est une pompe à chaleur air-air. Elle rafraîchit l’été, chauffe l’hiver et produit plus de chaleur qu’elle ne consomme d’électricité.",
      },
      {
        q: "Une villa climatisée prend-elle de la valeur ?",
        a: "Sur la Côte d’Azur, le confort d’été est devenu un critère attendu par les acquéreurs et les locataires haut de gamme. Une climatisation intégrée avec soin participe à la valorisation de la villa, pour la location saisonnière comme pour la revente, sans altérer son architecture.",
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
      "Dites-nous où se trouve la villa et ce que vous envisagez. Nous intervenons de Bormes-les-Mimosas au Rayol-Canadel, en passant par Le Lavandou, La Fossette, Aiguebelle et Cavalière. Nous vous rappelons pour fixer la visite, sur place ou en visio.",
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

const en: typeof fr = {
  meta: {
    title: "Invisible Villa Air Conditioning, Le Lavandou | SB Design",
    description:
      "Concealed ducted air conditioning designed into your villa, from Bormes-les-Mimosas to Le Lavandou: hidden units, screened outdoor units, permits.",
  },
  hero: {
    label: "Villas · Bormes-les-Mimosas · Le Lavandou",
    titlePrefix: "Air conditioning,",
    titleMorphWords: ["Invisible", "Ducted", "Reversible"],
    subtitle:
      "At SB Design Riviera, air conditioning is part of the architecture: invisible and quiet, designed with your villa project in Bormes-les-Mimosas, Le Lavandou or Le Rayol-Canadel.",
    imageAlt:
      "Living room of Villa Azur seen through a glass partition: corner sofa, built-in bookcase and smooth ceiling with recessed spotlights",
  },
  cta: { etude: "Request an integration study", formules: "See the packages" },
  arguments: {
    title1: "Designed with the project,",
    title2: "not added afterwards",
    intro:
      "Our conviction: comfort should never be seen. A villa is judged by its volumes, its light and its materials, not by its appliances. In Le Lavandou, Bormes-les-Mimosas, Cavalière or Aiguebelle, many villas stand in protected coastal sites, so air conditioning is decided at the drawing stage: that is when it can be made invisible and quiet, room by room.",
    items: [
      {
        tag: "Invisible",
        title: "No surface trunking",
        text: "Concealed pipework, ducted air conditioning in the corridor or bathroom false ceiling, slim grilles aligned with the lines of the project.",
      },
      {
        tag: "Outdoors",
        title: "Screened outdoor units",
        text: "No visible outdoor unit: plant room, timber or stone cladding, placed out of sight of the terrace and pool.",
      },
      {
        tag: "Permits",
        title: "Co-ownership, town hall, heritage",
        text: "Listed coastal sites, surroundings of historic monuments, residential co-ownerships: we prepare the applications.",
      },
      {
        tag: "A single contact",
        title: "Finishes included",
        text: "Our teams handle air conditioning, heating, plumbing and bespoke joinery. Remote site monitoring with photos and reports, for owners who are not on site.",
      },
    ],
  },
  formules: {
    title1: "Four",
    title2: "packages",
    intro:
      "Combining air conditioning with other works shares travel, plasterboard, painting and permits. Every quote shows the “combined works saving” line. The result: a villa that is comfortable all year round, and a property that gains in value.",
    items: [
      {
        tag: "Most requested",
        title: "A/C + master suite",
        text: "Bedroom, dressing room and bathroom together, ducted unit in the dressing room false ceiling.",
      },
      {
        tag: "Living space",
        title: "A/C + living area",
        text: "Open-plan living room and kitchen, linear diffusers built into the false ceiling or bookcases.",
      },
      {
        tag: "Whole villa",
        title: "A/C + renovation",
        text: "Network planned from the drawings, one outlet per room, room-by-room control.",
      },
      {
        tag: "On its own",
        title: "Integrated A/C",
        text: "The same standard of integration, with finishes made good, without other works.",
      },
    ],
  },
  etapes: {
    title1: "How it",
    title2: "works",
    steps: [
      { title: "Visit and survey", text: "Building constraints, possible routes, location of the units." },
      { title: "Integration study", text: "Network layout, 3D views, permits required." },
      { title: "Single quote", text: "Air conditioning and related works, with the combined works line." },
      { title: "Permits", text: "Prior declaration, heritage architect or listed site if needed." },
      { title: "Works and commissioning", text: "Installation, finishes, settings, maintenance contract offered." },
    ],
  },
  chantiers: {
    title1: "On our",
    title2: "sites",
    intro:
      "The units go in before the ceilings are closed, with the precision of a workshop. Once the finishes are done, only a slim grille remains.",
    items: [
      {
        ...fr.chantiers.items[0],
        tag: "Work in progress",
        caption: "Villa under construction: the ducted units hang below the slab, before the ceilings.",
        alt: "Villa under construction: ducted air conditioning units suspended below the slab, ducts and cables ready before the ceilings are fitted",
      },
      {
        ...fr.chantiers.items[1],
        tag: "Work in progress",
        caption: "Villa under renovation: the ducted unit sits below the slab, before the ceiling is clad.",
        alt: "Villa under renovation: ducted air conditioning unit fixed below the slab, pipes and cables ready before the ceiling is clad",
      },
      {
        ...fr.chantiers.items[2],
        tag: "Work in progress",
        caption: "The false ceiling closes: the supply slot is set into the boards.",
        alt: "Room under works: plasterboard false ceiling with the air conditioning supply slot set in, before finishing",
      },
      {
        ...fr.chantiers.items[3],
        tag: "Finished",
        caption: "Once finished: a black linear grille, aligned in the kitchen false ceiling.",
        alt: "Renovated kitchen with blue island: black linear air conditioning grille built into the false ceiling, recessed spotlights",
      },
    ],
  },
  faq: {
    title1: "Frequently asked",
    title2: "questions",
    items: [
      {
        q: "What is ducted air conditioning?",
        a: "A unit hidden in a false ceiling that sends cool air to each room through ducts and slim grilles. It is the most discreet way to air-condition a whole villa.",
      },
      {
        q: "Do I need a permit to air-condition a villa in Le Lavandou or Bormes-les-Mimosas?",
        a: "Often, yes: a prior declaration at the town hall when the outdoor unit changes the look of the house, and the opinion of the Architecte des Bâtiments de France in protected areas. We prepare these applications for you.",
      },
      {
        q: "Can air conditioning be installed in a listed site?",
        a: "Yes, with a layout that cannot be seen from outside and a careful application. Approval takes longer, so it is best to start early.",
      },
      {
        q: "I live abroad part of the year",
        a: "We oversee the works for you, with regular reports in French, English or Italian.",
      },
      {
        q: "Does the air conditioning also heat?",
        a: "Yes, reversible systems heat in winter and complement or replace the existing heating.",
      },
      {
        q: "Reversible air conditioning or heat pump: what is the difference?",
        a: "None in principle: reversible air conditioning is an air-to-air heat pump. It cools in summer, heats in winter and produces more heat than the electricity it uses.",
      },
      {
        q: "Does air conditioning add value to a villa?",
        a: "On the French Riviera, summer comfort is now expected by high-end buyers and tenants. Carefully integrated air conditioning adds to the value of the villa, for holiday lets as well as resale, without altering its architecture.",
      },
      {
        q: "Is it noisy?",
        a: "A correctly sized ducted unit stays discreet. Wherever possible, we place the units away from the bedrooms.",
      },
      {
        q: "What about maintenance for a second home?",
        a: "An annual maintenance contract with a visit before summer, suited to houses occupied part of the year.",
      },
    ],
  },
  form: {
    title1: "Request an",
    title2: "integration study",
    intro:
      "Tell us where the villa is and what you have in mind. We work from Bormes-les-Mimosas to Le Rayol-Canadel, including Le Lavandou, La Fossette, Aiguebelle and Cavalière. We will call you back to arrange a visit, on site or by video call.",
    honeypot: "Do not fill in",
    nom: "Name",
    telephone: "Phone",
    email: "Email",
    formule: "Package",
    selectDefault: "Select",
    formules: ["A/C + master suite", "A/C + living area", "A/C + full renovation", "A/C only"],
    ville: "Town or postcode of the villa",
    villePlaceholder: "e.g. Bormes-les-Mimosas",
    message: "Message",
    messagePlaceholder: "Your project, your constraints, preferred timing…",
    optional: "optional",
    submit: "Call me back",
    success: "Thank you, we have received your request. We will call you back to arrange a visit, on site or by video call.",
    error: "Your request could not be sent. Please try again, or email us at",
  },
};

const it: typeof fr = {
  meta: {
    title: "Climatizzazione invisibile in villa, Lavandou | SB Design",
    description:
      "Climatizzazione canalizzata e reversibile integrata nella villa, da Bormes-les-Mimosas a Le Lavandou: unità nascoste, motori schermati, pratiche.",
  },
  hero: {
    label: "Ville · Bormes-les-Mimosas · Le Lavandou",
    titlePrefix: "Climatizzazione",
    titleMorphWords: ["Invisibile", "Canalizzata", "Reversibile"],
    subtitle:
      "Per SB Design Riviera la climatizzazione fa parte dell’architettura: invisibile e silenziosa, pensata con il progetto della vostra villa a Bormes-les-Mimosas, Le Lavandou o Le Rayol-Canadel.",
    imageAlt:
      "Soggiorno di Villa Azur visto attraverso una vetrata: divano angolare, libreria su misura e soffitto liscio con faretti incassati",
  },
  cta: { etude: "Richiedi uno studio di integrazione", formules: "Vedi le formule" },
  arguments: {
    title1: "Pensata con il progetto,",
    title2: "non aggiunta dopo",
    intro:
      "La nostra convinzione: il comfort non deve mai vedersi. Una villa si giudica dai suoi volumi, dalla sua luce e dai suoi materiali, non dai suoi apparecchi. A Le Lavandou, Bormes-les-Mimosas, Cavalière o Aiguebelle molte ville si trovano in siti tutelati o soggetti alla legge sul litorale: la climatizzazione si decide quindi in fase di progetto, quando si può renderla invisibile e silenziosa, stanza per stanza.",
    items: [
      {
        tag: "Invisibile",
        title: "Nessuna canalina",
        text: "Linee incassate, climatizzazione canalizzata nel controsoffitto del corridoio o del bagno, griglie sottili allineate alle linee del progetto.",
      },
      {
        tag: "Esterni",
        title: "Unità esterne schermate",
        text: "Nessuna unità esterna in vista: locale tecnico, rivestimento in legno o pietra, posizione fuori dalla vista di terrazza e piscina.",
      },
      {
        tag: "Pratiche",
        title: "Condominio, comune, Soprintendenza",
        text: "Siti tutelati del litorale, aree vicine a monumenti, residenze in condominio: prepariamo noi le pratiche.",
      },
      {
        tag: "Un solo interlocutore",
        title: "Finiture comprese",
        text: "Le nostre squadre integrano climatizzazione, riscaldamento, idraulica e arredi su misura. Direzione lavori a distanza con foto e resoconti, per i proprietari che non sono sul posto.",
      },
    ],
  },
  formules: {
    title1: "Quattro",
    title2: "formule",
    intro:
      "Abbinare la climatizzazione ad altri lavori permette di condividere trasferte, cartongesso, pittura e pratiche. Ogni preventivo mostra la voce «risparmio lavori abbinati». Il risultato: una villa confortevole in ogni stagione e un patrimonio valorizzato.",
    items: [
      {
        tag: "La più richiesta",
        title: "Clima + suite padronale",
        text: "Camera, cabina armadio e bagno insieme, unità canalizzata nel controsoffitto della cabina armadio.",
      },
      {
        tag: "Zona giorno",
        title: "Clima + zona giorno",
        text: "Soggiorno e cucina open space, diffusione lineare integrata nel controsoffitto o nelle librerie.",
      },
      {
        tag: "Tutta la villa",
        title: "Clima + ristrutturazione",
        text: "Impianto previsto fin dal progetto, una bocchetta per stanza, regolazione stanza per stanza.",
      },
      {
        tag: "Da sola",
        title: "Clima integrata",
        text: "La stessa cura dell’integrazione, con ripristino delle finiture, senza altri lavori.",
      },
    ],
  },
  etapes: {
    title1: "Come",
    title2: "funziona",
    steps: [
      { title: "Sopralluogo e rilievo", text: "Vincoli dell’edificio, passaggi possibili, posizione delle unità." },
      { title: "Studio di integrazione", text: "Schema dell’impianto, viste 3D, pratiche da prevedere." },
      { title: "Preventivo unico", text: "Climatizzazione e lavori collegati, con la voce lavori abbinati." },
      { title: "Autorizzazioni", text: "Dichiarazione preventiva, architetto dei beni culturali o sito tutelato se necessario." },
      { title: "Cantiere e messa in funzione", text: "Posa, finiture, regolazioni, contratto di manutenzione proposto." },
    ],
  },
  chantiers: {
    title1: "Nei nostri",
    title2: "cantieri",
    intro:
      "Le unità si posano prima della chiusura dei soffitti, con la precisione di un atelier. Una volta terminate le finiture, resta solo una griglia sottile.",
    items: [
      {
        ...fr.chantiers.items[0],
        tag: "Cantiere",
        caption: "Villa in costruzione: le unità canalizzate sono sospese sotto il solaio, prima dei soffitti.",
        alt: "Villa in costruzione: unità di climatizzazione canalizzate sospese sotto il solaio, condotti e cavi predisposti prima della posa dei soffitti",
      },
      {
        ...fr.chantiers.items[1],
        tag: "Cantiere",
        caption: "Villa in ristrutturazione: l’unità canalizzata è alloggiata sotto il solaio, prima del rivestimento del soffitto.",
        alt: "Villa in ristrutturazione: unità di climatizzazione canalizzata fissata sotto il solaio, linee e cavi predisposti prima del rivestimento del soffitto",
      },
      {
        ...fr.chantiers.items[2],
        tag: "Cantiere",
        caption: "Il controsoffitto si chiude: la fessura di mandata è ricavata nelle lastre.",
        alt: "Stanza in lavorazione: controsoffitto in cartongesso con la fessura di mandata della climatizzazione predisposta, prima delle finiture",
      },
      {
        ...fr.chantiers.items[3],
        tag: "Finito",
        caption: "A lavori finiti: una griglia lineare nera, allineata nel controsoffitto della cucina.",
        alt: "Cucina ristrutturata con isola blu: griglia lineare nera della climatizzazione integrata nel controsoffitto, faretti incassati",
      },
    ],
  },
  faq: {
    title1: "Domande",
    title2: "frequenti",
    items: [
      {
        q: "Che cos’è la climatizzazione canalizzata?",
        a: "Un’unità nascosta nel controsoffitto che distribuisce l’aria fresca in ogni stanza tramite condotti e griglie sottili. È la soluzione più discreta per climatizzare un’intera villa.",
      },
      {
        q: "Serve un’autorizzazione per climatizzare una villa a Le Lavandou o a Bormes-les-Mimosas?",
        a: "Spesso sì: una dichiarazione preventiva in comune quando l’unità esterna modifica l’aspetto della casa, e il parere dell’Architecte des Bâtiments de France nelle aree tutelate. Prepariamo noi queste pratiche.",
      },
      {
        q: "Si può climatizzare in un sito tutelato?",
        a: "Sì, con una posizione invisibile dall’esterno e una pratica accurata. I tempi di autorizzazione sono più lunghi: conviene muoversi per tempo.",
      },
      {
        q: "Vivo all’estero per parte dell’anno",
        a: "Seguiamo il cantiere per voi, con resoconti regolari in francese, inglese o italiano.",
      },
      {
        q: "La climatizzazione riscalda anche?",
        a: "Sì, i sistemi reversibili riscaldano in inverno e integrano o sostituiscono il riscaldamento esistente.",
      },
      {
        q: "Climatizzazione reversibile o pompa di calore: che differenza c’è?",
        a: "Nessuna nel principio: una climatizzazione reversibile è una pompa di calore aria-aria. Rinfresca d’estate, riscalda d’inverno e produce più calore dell’elettricità che consuma.",
      },
      {
        q: "Una villa climatizzata acquista valore?",
        a: "In Costa Azzurra il comfort estivo è ormai un requisito atteso da acquirenti e locatari di alto livello. Una climatizzazione integrata con cura contribuisce a valorizzare la villa, per l’affitto stagionale come per la rivendita, senza alterarne l’architettura.",
      },
      {
        q: "È rumorosa?",
        a: "Un’unità canalizzata ben dimensionata resta discreta. Quando possibile, posizioniamo le unità lontano dalle camere.",
      },
      {
        q: "E la manutenzione di una seconda casa?",
        a: "Un contratto di manutenzione annuale con visita prima dell’estate, pensato per le case abitate solo parte dell’anno.",
      },
    ],
  },
  form: {
    title1: "Richiedi uno studio",
    title2: "di integrazione",
    intro:
      "Diteci dove si trova la villa e cosa avete in mente. Interveniamo da Bormes-les-Mimosas a Le Rayol-Canadel, passando per Le Lavandou, La Fossette, Aiguebelle e Cavalière. Vi richiamiamo per fissare il sopralluogo, sul posto o in videochiamata.",
    honeypot: "Non compilare",
    nom: "Nome",
    telephone: "Telefono",
    email: "E-mail",
    formule: "Formula",
    selectDefault: "Seleziona",
    formules: ["Clima + suite padronale", "Clima + zona giorno", "Clima + ristrutturazione completa", "Solo clima"],
    ville: "Comune o CAP della villa",
    villePlaceholder: "es. Bormes-les-Mimosas",
    message: "Messaggio",
    messagePlaceholder: "Il vostro progetto, i vincoli, il periodo desiderato…",
    optional: "facoltativo",
    submit: "Richiamatemi",
    success: "Grazie, abbiamo ricevuto la vostra richiesta. Vi richiamiamo per fissare il sopralluogo, sul posto o in videochiamata.",
    error: "L’invio non è riuscito. Riprovate, oppure scriveteci a",
  },
};

export const climContentByLang: Record<ClimLang, typeof fr> = { fr, en, it };

/** Compatibilité : contenu français. */
export const climContent = fr;
