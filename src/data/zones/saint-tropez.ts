/**
 * Page zone golfe de Saint-Tropez — méthode, calendrier, FAQ, maillage
 * (Ramatuelle, Sainte-Maxime). Réalisation citée : villa-la-croix-valmer (src/data/projects.ts).
 */
import type { ZoneExtras } from './types';

export const saintTropezExtras: ZoneExtras = {
  fr: {
    realisationsIntro:
      'À La Croix-Valmer, un projet mixte associe construction neuve et rénovation d’une piscine existante, avec aménagement intérieur et extérieur complet. Dessiné en rendus 3D pour valider les volumes et l’insertion paysagère avant réalisation, il privilégie une ligne basse, des terrasses généreuses et un carport intégré à l’architecture.',
    methode: {
      title1: 'Notre méthode',
      title2: 'dans le golfe',
      intro:
        'Dans le golfe de Saint-Tropez, la plupart des propriétaires n’habitent pas sur place et la saison impose son tempo. Notre méthode tient en quatre temps, avec un interlocuteur unique du programme à la remise des clés.',
      steps: [
        {
          title: 'Programme et usages',
          text: 'Séjours en famille, invités, location saisonnière : nous partons de la façon dont la maison sera vécue pour définir le nombre de suites, les espaces de réception, les rangements et les zones de service.',
        },
        {
          title: 'Esquisse et rendus 3D',
          text: 'Volumes, ouvertures, matériaux et insertion paysagère sont dessinés puis visualisés en 3D — comme pour la villa de La Croix-Valmer — afin que chaque arbitrage se fasse sur une image fidèle.',
        },
        {
          title: 'Autorisations et calendrier de saison',
          text: 'Démarches d’urbanisme selon le zonage, contraintes éventuelles de la loi Littoral ou d’un domaine privé, périodes de chantier encadrées : nous les intégrons dès l’esquisse, sous réserve de vérification auprès de la mairie.',
        },
        {
          title: 'Chantier coordonné et installation',
          text: 'Coordination des entreprises, comptes rendus réguliers, puis installation du mobilier et de la décoration : la maison est livrée prête à recevoir.',
        },
      ],
    },
    calendrier: {
      title1: 'Un exemple',
      title2: 'de calendrier',
      intro:
        'Dans le golfe, tout se joue hors saison : l’été, la fréquentation et les règles locales compliquent les chantiers. Voici un phasage type, à ajuster selon le projet et les autorisations.',
      phases: [
        {
          saison: 'Automne',
          title: 'Étude et autorisations',
          text: 'Programme, esquisse, rendus 3D et choix des matériaux, puis préparation des dossiers d’urbanisme lorsqu’ils sont nécessaires. Les matériaux à long délai sont commandés en amont.',
        },
        {
          saison: 'Hiver',
          title: 'Gros œuvre et réseaux',
          text: 'Démolitions, maçonnerie, piscine, réseaux : les travaux lourds se concentrent sur la période la plus calme, quand les accès sont dégagés.',
        },
        {
          saison: 'Printemps',
          title: 'Second œuvre et finitions',
          text: 'Menuiseries, revêtements, cuisine, salles de bains et mobilier sur mesure, puis aménagements extérieurs — terrasses, plantations, éclairage.',
        },
        {
          saison: 'Avant l’été',
          title: 'Livraison',
          text: 'Réception des travaux, mise en place du mobilier et de la décoration : la villa est prête pour la saison, que vous l’habitiez ou la proposiez à la location.',
        },
      ],
      note: 'Calendrier indicatif : plusieurs communes du golfe encadrent les chantiers bruyants en période estivale par arrêté municipal — les dates sont à vérifier pour chaque commune.',
    },
    faq: {
      title1: 'Questions',
      title2: 'fréquentes',
      items: [
        {
          q: 'Peut-on faire des travaux à Saint-Tropez en juillet et en août ?',
          a: 'Les chantiers bruyants y sont souvent encadrés en période estivale, comme dans plusieurs communes voisines ; les dates exactes relèvent d’arrêtés municipaux à vérifier en mairie. Nous plaçons donc démolitions et gros œuvre hors saison et réservons l’été aux interventions discrètes, lorsqu’elles sont autorisées.',
        },
        {
          q: 'Peut-on visualiser le projet avant les travaux ?',
          a: 'Oui. Plans, planches de matériaux et rendus 3D permettent de valider volumes, ouvertures et ambiances avant le premier coup de pioche. Pour la villa de La Croix-Valmer, la conception en 3D a servi à vérifier l’insertion paysagère et l’harmonie des volumes avant réalisation.',
        },
        {
          q: 'Intervenez-vous sur des constructions neuves et des extensions ?',
          a: 'Oui, en plus de la rénovation et de l’aménagement intérieur : à La Croix-Valmer, le projet associe construction neuve et reprise de la piscine. Les possibilités d’extension dépendent du zonage, de l’emprise autorisée et, le cas échéant, du cahier des charges d’un domaine privé ; elles sont à vérifier auprès du service urbanisme dès les premières esquisses.',
        },
        {
          q: 'Quel budget prévoir pour un projet dans le golfe ?',
          a: 'Il dépend de l’état du bien, de l’ampleur des travaux et du niveau de finition souhaité ; un chiffrage sérieux suppose une visite. Après le diagnostic, vous recevez une estimation détaillée poste par poste, qui sert de base aux arbitrages avant le lancement des travaux.',
        },
      ],
    },
    secteurs: {
      title: 'Nos secteurs',
      links: [
        { path: '/architecte-interieur-ramatuelle', label: 'Ramatuelle' },
        { path: '/architecte-interieur-sainte-maxime', label: 'Sainte-Maxime' },
      ],
    },
  },
  en: {
    realisationsIntro:
      'In La Croix-Valmer, a mixed project combines a new build with the renovation of an existing pool, including complete interior and exterior design. Developed in 3D renderings to validate the volumes and the landscape integration before construction, it favours a low silhouette, generous terraces and a carport built into the architecture.',
    methode: {
      title1: 'Our method',
      title2: 'in the gulf',
      intro:
        'In the Gulf of Saint-Tropez, most owners do not live on site and the season sets the pace. Our method has four stages, with a single point of contact from the brief to the handover of the keys.',
      steps: [
        {
          title: 'Brief and lifestyle',
          text: 'Family stays, guests, seasonal letting: we start from how the house will be lived in to define the number of suites, the reception areas, storage and service spaces.',
        },
        {
          title: 'Sketch design and 3D renderings',
          text: 'Volumes, openings, materials and landscape integration are drawn and then visualised in 3D — as for the La Croix-Valmer villa — so that every decision is taken on a faithful image.',
        },
        {
          title: 'Permits and the seasonal calendar',
          text: 'Planning procedures according to the zoning, possible constraints of the Loi Littoral or a private estate, restricted works periods: we factor them in from the sketch stage, subject to confirmation with the town hall.',
        },
        {
          title: 'Coordinated works and installation',
          text: 'Contractor coordination, regular reports, then installation of furniture and decoration: the house is delivered ready to welcome you.',
        },
      ],
    },
    calendrier: {
      title1: 'A sample',
      title2: 'schedule',
      intro:
        'In the gulf, everything happens off season: in summer, crowds and local rules make building works difficult. Here is a typical phasing, to be adjusted to the project and the permits.',
      phases: [
        {
          saison: 'Autumn',
          title: 'Study and permits',
          text: 'Brief, sketch design, 3D renderings and choice of materials, then preparation of planning applications where needed. Long-lead materials are ordered early.',
        },
        {
          saison: 'Winter',
          title: 'Structural works and services',
          text: 'Demolition, masonry, pool, services: heavy works are concentrated in the quietest period, when access is clear.',
        },
        {
          saison: 'Spring',
          title: 'Fit-out and finishes',
          text: 'Joinery, floor and wall finishes, kitchen, bathrooms and bespoke furniture, then outdoor works — terraces, planting, lighting.',
        },
        {
          saison: 'Before summer',
          title: 'Handover',
          text: 'Final inspection, furniture and decoration in place: the villa is ready for the season, whether you live in it or let it.',
        },
      ],
      note: 'Indicative schedule: several towns in the gulf restrict noisy building works in summer by municipal order — dates should be checked for each town.',
    },
    faq: {
      title1: 'Frequently asked',
      title2: 'questions',
      items: [
        {
          q: 'Can building works take place in Saint-Tropez in July and August?',
          a: 'Noisy works are often restricted there in summer, as in several neighbouring towns; the exact dates are set by municipal orders to be checked with the town hall. We therefore schedule demolition and structural works off season and keep the summer for discreet work, where permitted.',
        },
        {
          q: 'Can I see the project before works begin?',
          a: 'Yes. Plans, material boards and 3D renderings let you validate volumes, openings and atmospheres before ground is broken. For the La Croix-Valmer villa, 3D design was used to check the landscape integration and the balance of volumes before construction.',
        },
        {
          q: 'Do you handle new builds and extensions?',
          a: 'Yes, as well as renovation and interior design: in La Croix-Valmer, the project combines a new build with a pool renovation. Extension possibilities depend on the zoning, the permitted footprint and, where relevant, the specifications of a private estate; they should be checked with the planning department from the first sketches.',
        },
        {
          q: 'What budget should I plan for a project in the gulf?',
          a: 'It depends on the condition of the property, the scope of works and the level of finish you want; a reliable estimate requires a site visit. After the assessment, you receive a detailed estimate, item by item, which forms the basis for decisions before works start.',
        },
      ],
    },
    secteurs: {
      title: 'Our areas',
      links: [
        { path: '/architecte-interieur-ramatuelle', label: 'Ramatuelle' },
        { path: '/architecte-interieur-sainte-maxime', label: 'Sainte-Maxime' },
      ],
    },
  },
  it: {
    realisationsIntro:
      'A La Croix-Valmer, un progetto misto unisce una nuova costruzione e la ristrutturazione di una piscina esistente, con allestimento completo degli interni e degli esterni. Studiato con rendering 3D per validare volumi e inserimento paesaggistico prima della realizzazione, privilegia una linea bassa, terrazze generose e un carport integrato nell’architettura.',
    methode: {
      title1: 'Il nostro metodo',
      title2: 'nel golfo',
      intro:
        'Nel golfo di Saint-Tropez la maggior parte dei proprietari non vive sul posto e la stagione detta i tempi. Il nostro metodo si articola in quattro fasi, con un unico interlocutore dal programma alla consegna delle chiavi.',
      steps: [
        {
          title: 'Programma e stile di vita',
          text: 'Soggiorni in famiglia, ospiti, locazione stagionale: partiamo da come sarà vissuta la casa per definire il numero di suite, gli spazi di ricevimento, i ripostigli e le zone di servizio.',
        },
        {
          title: 'Progetto di massima e rendering 3D',
          text: 'Volumi, aperture, materiali e inserimento paesaggistico vengono disegnati e poi visualizzati in 3D — come per la villa di La Croix-Valmer — perché ogni scelta si basi su un’immagine fedele.',
        },
        {
          title: 'Autorizzazioni e calendario stagionale',
          text: 'Pratiche urbanistiche secondo la zonizzazione, eventuali vincoli della Loi Littoral o di un comprensorio privato, periodi di cantiere regolamentati: li integriamo fin dal progetto di massima, previa verifica con il comune.',
        },
        {
          title: 'Cantiere coordinato e allestimento',
          text: 'Coordinamento delle imprese, resoconti regolari, poi posa di arredi e decorazione: la casa viene consegnata pronta ad accogliervi.',
        },
      ],
    },
    calendrier: {
      title1: 'Un esempio',
      title2: 'di calendario',
      intro:
        'Nel golfo tutto si gioca in bassa stagione: d’estate l’affluenza e le regole locali rendono difficili i cantieri. Ecco una scansione tipo, da adattare al progetto e alle autorizzazioni.',
      phases: [
        {
          saison: 'Autunno',
          title: 'Studio e autorizzazioni',
          text: 'Programma, progetto di massima, rendering 3D e scelta dei materiali, poi preparazione delle pratiche urbanistiche se necessarie. I materiali con tempi di consegna lunghi vengono ordinati in anticipo.',
        },
        {
          saison: 'Inverno',
          title: 'Opere strutturali e impianti',
          text: 'Demolizioni, opere murarie, piscina, impianti: i lavori pesanti si concentrano nel periodo più tranquillo, quando gli accessi sono liberi.',
        },
        {
          saison: 'Primavera',
          title: 'Finiture e allestimenti',
          text: 'Serramenti, rivestimenti, cucina, bagni e arredi su misura, poi sistemazioni esterne — terrazze, piantumazioni, illuminazione.',
        },
        {
          saison: 'Prima dell’estate',
          title: 'Consegna',
          text: 'Collaudo dei lavori, posa di arredi e decorazione: la villa è pronta per la stagione, che la abitiate o la proponiate in affitto.',
        },
      ],
      note: 'Calendario indicativo: diversi comuni del golfo regolamentano i cantieri rumorosi nel periodo estivo con ordinanza comunale — le date vanno verificate per ciascun comune.',
    },
    faq: {
      title1: 'Domande',
      title2: 'frequenti',
      items: [
        {
          q: 'Si possono fare lavori a Saint-Tropez a luglio e agosto?',
          a: 'I cantieri rumorosi vi sono spesso regolamentati in estate, come in diversi comuni vicini; le date esatte sono fissate da ordinanze comunali da verificare in municipio. Per questo collochiamo demolizioni e opere strutturali in bassa stagione e riserviamo l’estate agli interventi discreti, quando consentiti.',
        },
        {
          q: 'Si può visualizzare il progetto prima dei lavori?',
          a: 'Sì. Piante, tavole dei materiali e rendering 3D permettono di validare volumi, aperture e atmosfere prima dell’avvio del cantiere. Per la villa di La Croix-Valmer la progettazione in 3D è servita a verificare l’inserimento paesaggistico e l’armonia dei volumi prima della realizzazione.',
        },
        {
          q: 'Vi occupate di nuove costruzioni e ampliamenti?',
          a: 'Sì, oltre alla ristrutturazione e all’architettura d’interni: a La Croix-Valmer il progetto unisce nuova costruzione e ristrutturazione della piscina. Le possibilità di ampliamento dipendono dalla zonizzazione, dalla superficie consentita e, se del caso, dal regolamento di un comprensorio privato; vanno verificate con l’ufficio urbanistico fin dai primi schizzi.',
        },
        {
          q: 'Quale budget prevedere per un progetto nel golfo?',
          a: 'Dipende dallo stato dell’immobile, dall’entità dei lavori e dal livello di finitura desiderato; una stima affidabile richiede un sopralluogo. Dopo l’analisi ricevete una stima dettagliata voce per voce, che serve da base per le scelte prima dell’avvio dei lavori.',
        },
      ],
    },
    secteurs: {
      title: 'Le nostre zone',
      links: [
        { path: '/architecte-interieur-ramatuelle', label: 'Ramatuelle' },
        { path: '/architecte-interieur-sainte-maxime', label: 'Sainte-Maxime' },
      ],
    },
  },
};
