/**
 * Page zone Var / corniche des Maures — méthode, calendrier, FAQ, maillage
 * (Le Lavandou, Bormes-les-Mimosas, Rayol-Canadel). Réalisations citées :
 * villa-azur, villa-aiguebelle, villa-pramousquier, bormes-les-mimosas (src/data/projects.ts).
 */
import type { ZoneExtras } from './types';

export const varExtras: ZoneExtras = {
  fr: {
    realisationsIntro:
      'Sur la corniche des Maures, nos réalisations couvrent la rénovation comme la construction neuve : rénovation intégrale de la Villa Azur au Rayol-Canadel, rénovation complète d’une villa sur les hauteurs d’Aiguebelle, construction d’une villa contemporaine à Pramousquier et de deux villas jumelles à Bormes-les-Mimosas.',
    methode: {
      title1: 'Notre méthode',
      title2: 'sur la corniche des Maures',
      intro:
        'Terrains en pente, accès étroits, pinèdes et vues à préserver : sur la corniche des Maures, un projet se décide d’abord sur le site. Notre méthode part de ce terrain pour aboutir à une maison livrée clé en main, mobilier compris.',
      steps: [
        {
          title: 'Diagnostic du site et de l’existant',
          text: 'Pente, accès des engins, état de la structure, des réseaux et de la piscine, orientation et vues : ce relevé détermine ce qui peut être conservé, transformé ou reconstruit.',
        },
        {
          title: 'Projet architectural et intérieur',
          text: 'Volumes ouverts sur la mer, terrasses, matériaux — pierre naturelle, bois massif, enduits minéraux — et lumière : le projet est présenté en plans, planches de matériaux et vues 3D.',
        },
        {
          title: 'Consultation des entreprises',
          text: 'Nous consultons des entreprises du secteur, comparons leurs offres et établissons un planning réaliste, compatible avec la saison.',
        },
        {
          title: 'Mobilier sur mesure et livraison',
          text: 'Cuisine, dressings, rangements et mobilier sont dessinés pour la maison ; la livraison comprend la mise en place de la décoration, pour une villa prête à vivre.',
        },
      ],
    },
    calendrier: {
      title1: 'Un exemple',
      title2: 'de calendrier',
      intro:
        'Sur la corniche, le calendrier se construit à rebours depuis l’été. Voici un phasage type pour la rénovation d’une villa, à adapter selon l’ampleur du projet et les autorisations nécessaires.',
      phases: [
        {
          saison: 'Automne',
          title: 'Étude et conception',
          text: 'Diagnostic sur place, programme, esquisse et vues 3D, choix des matériaux et chiffrage. Les dossiers d’urbanisme sont préparés si le projet modifie l’aspect extérieur ou l’emprise.',
        },
        {
          saison: 'Hiver',
          title: 'Travaux structurants',
          text: 'Démolitions, maçonnerie, réseaux, reprise de piscine ou de terrasses : les travaux lourds profitent de la période où la corniche est la plus calme.',
        },
        {
          saison: 'Printemps',
          title: 'Finitions et extérieurs',
          text: 'Revêtements, menuiseries, cuisine et salles de bains, mobilier sur mesure, puis jardins, éclairage et terrasses.',
        },
        {
          saison: 'Avant l’été',
          title: 'Livraison clé en main',
          text: 'Nettoyage, installation du mobilier et de la décoration, réception : la maison est prête pour la saison.',
        },
      ],
      note: 'Calendrier indicatif : la durée réelle dépend du projet, des autorisations et des contraintes du site — accès, pente, obligations de débroussaillement.',
    },
    faq: {
      title1: 'Questions',
      title2: 'fréquentes',
      items: [
        {
          q: 'Intervenez-vous sur toute la corniche des Maures ?',
          a: 'Oui, du Lavandou et de Bormes-les-Mimosas jusqu’au Rayol-Canadel et à Cavalaire-sur-Mer, en passant par Aiguebelle et Pramousquier, ainsi qu’à Hyères. Plus à l’est, nous intervenons aussi dans le golfe de Saint-Tropez.',
        },
        {
          q: 'Rénover ou reconstruire : comment décider pour une villa ancienne ?',
          a: 'Le diagnostic tranche : état de la structure, qualité de l’implantation, possibilités offertes par les règles d’urbanisme. Nous avons mené les deux démarches sur la corniche — rénovation intégrale de la Villa Azur et de la villa d’Aiguebelle, construction neuve à Pramousquier et à Bormes-les-Mimosas.',
        },
        {
          q: 'Pouvez-vous concevoir le mobilier et les agencements sur mesure ?',
          a: 'Oui. Cuisines, dressings, rangements, bibliothèques et meubles sont dessinés pour chaque maison et coordonnés avec les travaux, ce qui évite les écarts entre architecture et aménagement. À la Villa Azur, la cuisine en marbre avec îlot central a été conçue sur mesure.',
        },
        {
          q: 'Comment préserver une résidence secondaire pendant les mois d’absence ?',
          a: 'Dès la conception, nous privilégions des matériaux durables et faciles à vivre — pierre naturelle, bois massif, enduits minéraux — et prévoyons ventilation, protections solaires et rangements adaptés aux fermetures prolongées, pour limiter l’entretien à la réouverture.',
        },
      ],
    },
    secteurs: {
      title: 'Nos secteurs',
      links: [
        { path: '/architecte-interieur-le-lavandou', label: 'Le Lavandou' },
        { path: '/architecte-interieur-bormes-les-mimosas', label: 'Bormes-les-Mimosas' },
        { path: '/architecte-interieur-rayol-canadel', label: 'Rayol-Canadel' },
      ],
    },
  },
  en: {
    realisationsIntro:
      'On the Corniche des Maures, our projects span renovation and new build: the complete renovation of Villa Azur in Rayol-Canadel, the full renovation of a villa on the heights of Aiguebelle, a contemporary new-build villa in Pramousquier and two twin villas in Bormes-les-Mimosas.',
    methode: {
      title1: 'Our method',
      title2: 'on the Corniche des Maures',
      intro:
        'Sloping plots, narrow access roads, pine forests and views to preserve: on the Corniche des Maures, a project is first decided on site. Our method starts from the land and ends with a turnkey house, furniture included.',
      steps: [
        {
          title: 'Site and building assessment',
          text: 'Slope, access for machinery, condition of the structure, services and pool, orientation and views: this survey determines what can be kept, transformed or rebuilt.',
        },
        {
          title: 'Architecture and interiors',
          text: 'Volumes opening onto the sea, terraces, materials — natural stone, solid wood, mineral renders — and light: the design is presented in plans, material boards and 3D views.',
        },
        {
          title: 'Contractor tendering',
          text: 'We consult local contractors, compare their offers and set a realistic schedule that fits the season.',
        },
        {
          title: 'Bespoke furniture and handover',
          text: 'Kitchen, dressing rooms, storage and furniture are designed for the house; handover includes styling, for a villa ready to live in.',
        },
      ],
    },
    calendrier: {
      title1: 'A sample',
      title2: 'schedule',
      intro:
        'On the Corniche, the schedule is planned backwards from the summer. Here is a typical phasing for a villa renovation, to be adapted to the scope of the project and the permits required.',
      phases: [
        {
          saison: 'Autumn',
          title: 'Study and design',
          text: 'On-site assessment, brief, sketch design and 3D views, choice of materials and costing. Planning applications are prepared if the project changes the exterior or the footprint.',
        },
        {
          saison: 'Winter',
          title: 'Structural works',
          text: 'Demolition, masonry, services, pool or terrace works: heavy works take advantage of the period when the Corniche is at its quietest.',
        },
        {
          saison: 'Spring',
          title: 'Finishes and outdoor works',
          text: 'Floor and wall finishes, joinery, kitchen and bathrooms, bespoke furniture, then gardens, lighting and terraces.',
        },
        {
          saison: 'Before summer',
          title: 'Turnkey handover',
          text: 'Cleaning, furniture and decoration in place, final inspection: the house is ready for the season.',
        },
      ],
      note: 'Indicative schedule: the actual duration depends on the project, the permits and the site constraints — access, slope, brush-clearing obligations.',
    },
    faq: {
      title1: 'Frequently asked',
      title2: 'questions',
      items: [
        {
          q: 'Do you work along the whole Corniche des Maures?',
          a: 'Yes, from Le Lavandou and Bormes-les-Mimosas to Le Rayol-Canadel and Cavalaire-sur-Mer, via Aiguebelle and Pramousquier, as well as in Hyères. Further east, we also work in the Gulf of Saint-Tropez.',
        },
        {
          q: 'Renovate or rebuild: how do you decide for an older villa?',
          a: 'The assessment decides: condition of the structure, quality of the siting, possibilities allowed by planning rules. We have taken both routes on the Corniche — complete renovations of Villa Azur and of the Aiguebelle villa, new builds in Pramousquier and Bormes-les-Mimosas.',
        },
        {
          q: 'Can you design bespoke furniture and joinery?',
          a: 'Yes. Kitchens, dressing rooms, storage, bookcases and furniture are designed for each house and coordinated with the works, avoiding gaps between architecture and fit-out. At Villa Azur, the marble kitchen with its central island was made to measure.',
        },
        {
          q: 'How do you protect a second home during long absences?',
          a: 'From the design stage, we favour durable, easy-living materials — natural stone, solid wood, mineral renders — and plan ventilation, sun protection and storage suited to long closures, to limit maintenance when the house reopens.',
        },
      ],
    },
    secteurs: {
      title: 'Our areas',
      links: [
        { path: '/architecte-interieur-le-lavandou', label: 'Le Lavandou' },
        { path: '/architecte-interieur-bormes-les-mimosas', label: 'Bormes-les-Mimosas' },
        { path: '/architecte-interieur-rayol-canadel', label: 'Rayol-Canadel' },
      ],
    },
  },
  it: {
    realisationsIntro:
      'Sulla Corniche des Maures le nostre realizzazioni spaziano dalla ristrutturazione alla nuova costruzione: ristrutturazione integrale di Villa Azur a Rayol-Canadel, ristrutturazione completa di una villa sulle alture di Aiguebelle, costruzione di una villa contemporanea a Pramousquier e di due ville gemelle a Bormes-les-Mimosas.',
    methode: {
      title1: 'Il nostro metodo',
      title2: 'sulla Corniche des Maures',
      intro:
        'Terreni in pendenza, accessi stretti, pinete e viste da preservare: sulla Corniche des Maures un progetto si decide anzitutto sul posto. Il nostro metodo parte dal terreno per arrivare a una casa consegnata chiavi in mano, arredi compresi.',
      steps: [
        {
          title: 'Analisi del sito e dell’esistente',
          text: 'Pendenza, accesso dei mezzi, stato della struttura, degli impianti e della piscina, orientamento e viste: questo rilievo stabilisce cosa conservare, trasformare o ricostruire.',
        },
        {
          title: 'Progetto architettonico e d’interni',
          text: 'Volumi aperti sul mare, terrazze, materiali — pietra naturale, legno massello, intonaci minerali — e luce: il progetto viene presentato con piante, tavole dei materiali e viste 3D.',
        },
        {
          title: 'Consultazione delle imprese',
          text: 'Consultiamo imprese della zona, confrontiamo le offerte e definiamo un cronoprogramma realistico, compatibile con la stagione.',
        },
        {
          title: 'Arredi su misura e consegna',
          text: 'Cucina, cabine armadio, ripostigli e arredi sono disegnati per la casa; la consegna comprende l’allestimento decorativo, per una villa pronta da vivere.',
        },
      ],
    },
    calendrier: {
      title1: 'Un esempio',
      title2: 'di calendario',
      intro:
        'Sulla Corniche il calendario si costruisce a ritroso partendo dall’estate. Ecco una scansione tipo per la ristrutturazione di una villa, da adattare all’entità del progetto e alle autorizzazioni necessarie.',
      phases: [
        {
          saison: 'Autunno',
          title: 'Studio e progettazione',
          text: 'Analisi sul posto, programma, progetto di massima e viste 3D, scelta dei materiali e stima dei costi. Le pratiche urbanistiche si preparano se il progetto modifica l’aspetto esterno o l’ingombro.',
        },
        {
          saison: 'Inverno',
          title: 'Opere strutturali',
          text: 'Demolizioni, opere murarie, impianti, interventi su piscina o terrazze: i lavori pesanti sfruttano il periodo in cui la Corniche è più tranquilla.',
        },
        {
          saison: 'Primavera',
          title: 'Finiture ed esterni',
          text: 'Rivestimenti, serramenti, cucina e bagni, arredi su misura, poi giardini, illuminazione e terrazze.',
        },
        {
          saison: 'Prima dell’estate',
          title: 'Consegna chiavi in mano',
          text: 'Pulizia, posa di arredi e decorazione, collaudo: la casa è pronta per la stagione.',
        },
      ],
      note: 'Calendario indicativo: la durata effettiva dipende dal progetto, dalle autorizzazioni e dai vincoli del sito — accessi, pendenza, obblighi di decespugliamento.',
    },
    faq: {
      title1: 'Domande',
      title2: 'frequenti',
      items: [
        {
          q: 'Intervenite su tutta la Corniche des Maures?',
          a: 'Sì, da Le Lavandou e Bormes-les-Mimosas fino a Le Rayol-Canadel e Cavalaire-sur-Mer, passando per Aiguebelle e Pramousquier, oltre che a Hyères. Più a est interveniamo anche nel golfo di Saint-Tropez.',
        },
        {
          q: 'Ristrutturare o ricostruire: come decidere per una villa datata?',
          a: 'Decide l’analisi: stato della struttura, qualità dell’impianto sul terreno, possibilità offerte dalle norme urbanistiche. Sulla Corniche abbiamo seguito entrambe le strade — ristrutturazione integrale di Villa Azur e della villa di Aiguebelle, nuove costruzioni a Pramousquier e a Bormes-les-Mimosas.',
        },
        {
          q: 'Potete progettare arredi e allestimenti su misura?',
          a: 'Sì. Cucine, cabine armadio, ripostigli, librerie e mobili sono disegnati per ogni casa e coordinati con i lavori, evitando scarti tra architettura e allestimento. A Villa Azur la cucina in marmo con isola centrale è stata realizzata su misura.',
        },
        {
          q: 'Come preservare una seconda casa durante i mesi di assenza?',
          a: 'Fin dalla progettazione privilegiamo materiali durevoli e facili da vivere — pietra naturale, legno massello, intonaci minerali — e prevediamo ventilazione, protezioni solari e ripostigli adatti alle chiusure prolungate, per limitare la manutenzione alla riapertura.',
        },
      ],
    },
    secteurs: {
      title: 'Le nostre zone',
      links: [
        { path: '/architecte-interieur-le-lavandou', label: 'Le Lavandou' },
        { path: '/architecte-interieur-bormes-les-mimosas', label: 'Bormes-les-Mimosas' },
        { path: '/architecte-interieur-rayol-canadel', label: 'Rayol-Canadel' },
      ],
    },
  },
};
