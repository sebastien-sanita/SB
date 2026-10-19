/**
 * Contenu — Architecte d'intérieur au Lavandou (FR/EN/IT).
 * Réalisations citées : villa-aiguebelle et villa-pramousquier (src/data/projects.ts).
 */
import type { Commune } from './types';

export const commune: Commune = {
  slug: 'le-lavandou',
  heroImages: [
    '/images/projets/aiguebelle-6.jpeg',
    '/images/projets/pramousquier-2.jpg',
    '/images/projets/aiguebelle-4.jpeg',
  ],
  ogImage: '/images/projets/aiguebelle-6.jpeg',
  content: {
    fr: {
      meta: {
        title: 'Architecte d’intérieur Le Lavandou | SB Design Riviera',
        description:
          'Architecte d’intérieur au Lavandou : rénovation de villas à Aiguebelle, Cavalière et Pramousquier, conception à distance et livraison avant l’été.',
      },
      hero: {
        label: 'Le Lavandou · Corniche des Maures',
        titleLine1: 'Architecte d’intérieur',
        titleLine2: 'au Lavandou',
        subtitle:
          'Du port à Pramousquier, SB Design Riviera conçoit, rénove et livre les villas du Lavandou pour des propriétaires souvent éloignés.',
        imageAlt:
          'Villa Aiguebelle au Lavandou — terrasses et piscine à débordement face à la Méditerranée, réalisation SB Design Riviera',
      },
      commune: {
        title1: 'Le Lavandou,',
        title2: 'douze plages et une corniche',
        paragraphs: [
          'Entre Bormes-les-Mimosas et Le Rayol-Canadel, Le Lavandou déroule une douzaine de kilomètres de littoral au pied du massif des Maures. La commune doit sa réputation à ses plages successives — on en compte douze, du centre jusqu’à Pramousquier — et à une corniche où les villas s’étagent dans la pinède, face aux îles d’Hyères. Ancien village de pêcheurs devenu station balnéaire au XXe siècle, Le Lavandou a gardé une échelle humaine : un port de plaisance, un front de mer animé, des hameaux qui conservent chacun leur caractère.',
          'Pour un architecte d’intérieur, le territoire est d’une grande diversité : appartements en résidence sur le port, maisons de village dans les ruelles du centre, villas des années 1960 à 1980 à rénover intégralement sur les hauteurs, constructions contemporaines livrées brutes à aménager. La plupart des propriétaires ne résident pas sur place à l’année. Notre rôle est de concevoir, de coordonner et de livrer sans qu’ils aient à multiplier les déplacements.',
          'SB Design Riviera a récemment mené deux projets sur la corniche du Lavandou — une rénovation complète à Aiguebelle et une construction neuve à Pramousquier. Cette connaissance du terrain, des artisans et des règles d’urbanisme de la commune compte sur des chantiers où l’accès, le relief et la saison dictent le calendrier.',
        ],
        quartiersTitle: 'Les quartiers du Lavandou',
        quartiers: [
          {
            name: 'Centre et port',
            text: 'Le cœur de la station : le port de plaisance, le front de mer et ses commerces, les ruelles de l’ancien village. Appartements en résidence avec vue sur la rade et maisons de ville où lumière et rangements se gagnent au centimètre.',
          },
          {
            name: 'Saint-Clair',
            text: 'À l’est du centre, une plage réputée et un quartier résidentiel paisible, fréquenté par les peintres pointillistes au début du XXe siècle. Villas de pinède, maisons de famille à moderniser, accès aisé en toute saison.',
          },
          {
            name: 'La Fossette',
            text: 'Une petite crique encadrée de rochers et de pins, aux villas discrètes accrochées à la pente. Les projets y sont souvent affaire de terrasses, de vues cadrées et de volumes à ouvrir vers la mer.',
          },
          {
            name: 'Aiguebelle',
            text: 'Un hameau à flanc de colline, entre la route de la corniche et la plage. Terrain pentu, vues panoramiques sur la baie et les îles : c’est ici que nous avons entièrement repensé la Villa Aiguebelle, avec ses piliers de pierre et sa piscine à débordement.',
          },
          {
            name: 'Cavalière',
            text: 'Une large baie fermée à l’est par le cap Nègre. Villas de bord de mer, résidences dans la pinède : un quartier recherché pour les séjours en famille, avec des biens qui appellent souvent une remise à niveau complète.',
          },
          {
            name: 'Pramousquier',
            text: 'Dernier hameau avant Le Rayol-Canadel, avec sa plage et ses collines boisées. Nous y avons livré la Villa Pramousquier, une construction neuve avec hammam, cave à vin et pergola bioclimatique.',
          },
          {
            name: 'Cap Nègre',
            text: 'Un promontoire boisé et résidentiel, aux propriétés rares et très préservées, desservies par des voies privées. Discrétion, logistique de chantier encadrée et exigence de finitions y sont la règle.',
          },
        ],
      },
      biens: {
        title1: 'Villas, maisons de village,',
        title2: 'appartements avec vue',
        paragraphs: [
          'Le parc immobilier du Lavandou s’est constitué par vagues : villas de villégiature du début du XXe siècle à Saint-Clair et Aiguebelle, lotissements de pinède des années 1960 à 1980 sur la corniche, résidences de standing près du port, puis constructions contemporaines sur les derniers terrains disponibles. Chaque génération de bâti appelle une réponse différente — isolation, réseaux, redistribution des pièces ou simple remise au goût du jour.',
          'Nous intervenons sur l’ensemble de ces typologies avec une constante : faire entrer la mer dans la maison. Agrandissement des ouvertures, suppression de cloisons, continuité entre séjour et terrasse, matériaux qui supportent le sel, le vent et le soleil.',
        ],
        items: [
          'Villas de pinède sur la corniche, à rénover entièrement ou par phases',
          'Propriétés pieds dans l’eau à Cavalière, Saint-Clair ou La Fossette',
          'Maisons de village et maisons de ville dans le centre ancien',
          'Villas contemporaines livrées brutes, à aménager de A à Z',
          'Appartements de résidences avec vue sur la rade ou les îles',
        ],
        prestationsTitle: 'Nos prestations au Lavandou',
        prestations: [
          'Rénovation complète de villas et d’appartements',
          'Architecture d’intérieur et décoration sur mesure',
          'Mobilier, cuisines et agencements dessinés par l’agence',
          'Aménagement des extérieurs : terrasses, piscine, cuisine d’été',
          'Valorisation avant mise en location saisonnière ou vente',
        ],
      },
      contraintes: {
        title1: 'Ce qu’il faut savoir',
        title2: 'avant de rénover au Lavandou',
        intro:
          'Le Lavandou est une commune littorale, boisée et très fréquentée l’été. Trois réalités pèsent sur un projet : la réglementation d’urbanisme, la protection des espaces naturels et le calendrier saisonnier. Nous les intégrons dès l’esquisse.',
        items: [
          {
            title: 'Loi Littoral et bande des cent mètres',
            text: 'En dehors des espaces déjà urbanisés, les constructions nouvelles sont interdites dans la bande littorale des 100 mètres. Pour une villa existante, une extension ou une piscine dépend du zonage et se vérifie au cas par cas auprès du service urbanisme.',
          },
          {
            title: 'PLU et zonage',
            text: 'Le plan local d’urbanisme fixe, quartier par quartier, hauteurs, emprise au sol, reculs et parfois l’aspect extérieur (teintes, toitures, clôtures). Une rénovation intérieure n’y est généralement pas soumise ; une modification de façade ou de volume l’est.',
          },
          {
            title: 'Sites protégés et Natura 2000',
            text: 'La corniche des Maures et le littoral font l’objet de protections paysagères et environnementales — site classé, zones Natura 2000 terrestres et marines selon les secteurs. Elles peuvent entraîner un avis de l’architecte des Bâtiments de France ou des prescriptions particulières.',
          },
          {
            title: 'Débroussaillement obligatoire',
            text: 'Dans le Var, les propriétés situées en zone boisée sont soumises aux obligations légales de débroussaillement, en général sur 50 mètres autour des constructions. À anticiper dans le projet paysager et avant tout chantier en période à risque.',
          },
          {
            title: 'Accès et logistique de chantier',
            text: 'Voies étroites de la corniche, chemins privés à Cap Nègre, stationnement limité : livraisons, grues et bennes se planifient. Nous organisons les flux pour limiter la gêne et respecter les règlements des copropriétés et des domaines.',
          },
          {
            title: 'Contraintes estivales',
            text: 'Des arrêtés municipaux peuvent limiter les travaux bruyants en haute saison, et la circulation estivale ralentit tout. Le calendrier d’un chantier au Lavandou se construit donc de l’automne au printemps, pour livrer avant l’été.',
          },
        ],
        note:
          'Ces éléments sont donnés à titre indicatif : les règles exactes dépendent de la parcelle et évoluent. Nous les vérifions pour chaque projet auprès du service urbanisme de la commune avant de dessiner.',
      },
      methode: {
        title1: 'Notre méthode',
        title2: 'pour les propriétaires éloignés',
        intro:
          'Une large part de nos clients au Lavandou vit ailleurs en France ou à l’étranger. Nous avons structuré notre accompagnement pour qu’un projet puisse se décider, se suivre et se réceptionner à distance, avec un seul interlocuteur.',
        steps: [
          {
            title: 'Relevé et diagnostic sur place',
            text: 'Nous visitons le bien, relevons les cotes, photographions l’existant et identifions les points techniques — réseaux, structure, humidité, accès. Vous recevez un compte rendu clair, sans jargon.',
          },
          {
            title: 'Conception et visuels 3D',
            text: 'Plans, élévations, planches de matériaux et vues 3D vous sont présentés en visioconférence. Les arbitrages se font à distance, sur des images fidèles à ce qui sera livré.',
          },
          {
            title: 'Artisans locaux et budget consolidé',
            text: 'Nous consultons des entreprises de la corniche et du golfe que nous connaissons, comparons les offres et vous remettons un budget consolidé, poste par poste.',
          },
          {
            title: 'Suivi de chantier et reporting photo',
            text: 'Visites régulières, compte rendu illustré après chaque passage, points en visio aux étapes clés. Vous savez où en est le chantier sans avoir à venir.',
          },
          {
            title: 'Livraison clé en main avant la saison',
            text: 'Nettoyage, pose du mobilier, mise en place de la décoration et réception avec vous — ou avec votre gestionnaire — pour que la maison soit prête dès votre arrivée.',
          },
        ],
      },
      realisations: {
        title1: 'Nos réalisations',
        title2: 'au Lavandou',
        intro:
          'Deux projets récents sur la corniche, à Aiguebelle et à Pramousquier : une rénovation complète et une construction neuve, toutes deux livrées avec leur aménagement intérieur.',
        cards: [
          { slug: 'villa-aiguebelle', alt: 'Villa Aiguebelle au Lavandou — rénovation complète avec piscine à débordement face à la mer' },
          { slug: 'villa-pramousquier', alt: 'Villa Pramousquier au Lavandou — construction contemporaine en pierre et métal laqué' },
        ],
      },
      faq: {
        title1: 'Questions fréquentes',
        title2: 'sur un projet au Lavandou',
        items: [
          {
            q: 'Peut-on rénover une villa au Lavandou sans être sur place ?',
            a: 'Oui. Nous assurons le relevé, la conception, la consultation des artisans, le suivi de chantier et la réception. Vous validez les étapes à distance sur plans, visuels 3D et comptes rendus photo, et vous ne vous déplacez que si vous le souhaitez.',
          },
          {
            q: 'Quelle est la meilleure période pour des travaux au Lavandou ?',
            a: 'Hors saison. Les travaux bruyants peuvent être limités par arrêté municipal en été et la circulation estivale complique les livraisons. Nous étudions le projet à l’automne, conduisons les travaux en automne, en hiver et au printemps, et livrons avant l’été.',
          },
          {
            q: 'Faut-il une autorisation pour une rénovation intérieure ?',
            a: 'Une rénovation purement intérieure, sans modification de façade ni de surface, ne nécessite généralement pas d’autorisation d’urbanisme. Dès qu’une ouverture, une extension, une piscine ou un changement d’aspect extérieur est en jeu, une déclaration préalable ou un permis est requis. Nous vérifions le cas de votre parcelle auprès de la mairie.',
          },
          {
            q: 'Intervenez-vous dans les hameaux et à Cap Nègre ?',
            a: 'Oui, sur l’ensemble de la commune : centre et port, Saint-Clair, La Fossette, Aiguebelle, Cavalière, Pramousquier et Cap Nègre, ainsi que dans les communes voisines de Bormes-les-Mimosas et du Rayol-Canadel.',
          },
        ],
      },
      voisins: {
        title: 'Nos secteurs voisins',
        links: [
          { path: '/architecte-interieur-bormes-les-mimosas', label: 'Bormes-les-Mimosas' },
          { path: '/architecte-interieur-rayol-canadel', label: 'Rayol-Canadel-sur-Mer' },
          { path: '/architecte-interieur-var', label: 'Corniche des Maures · Var' },
          { path: '/architecte-interieur-saint-tropez', label: 'Golfe de Saint-Tropez' },
        ],
      },
      cta: {
        title1: 'Un projet',
        title2: 'au Lavandou ?',
        text: 'Échangeons sur votre villa ou votre appartement. Consultation confidentielle et sans engagement, sur place ou en visioconférence.',
        button: 'Prendre rendez-vous',
      },
    },

    en: {
      meta: {
        title: 'Interior Architect Le Lavandou | SB Design Riviera',
        description:
          'Interior architect in Le Lavandou: villa renovation in Aiguebelle, Cavalière, Pramousquier and Saint-Clair, remote design process, delivery before summer.',
      },
      hero: {
        label: 'Le Lavandou · Corniche des Maures',
        titleLine1: 'Interior architect',
        titleLine2: 'in Le Lavandou',
        subtitle:
          'From the harbour to Pramousquier, SB Design Riviera designs, renovates and delivers the villas of Le Lavandou for owners who are often far away.',
        imageAlt:
          'Villa Aiguebelle in Le Lavandou — terraces and infinity pool facing the Mediterranean, a project by SB Design Riviera',
      },
      commune: {
        title1: 'Le Lavandou,',
        title2: 'twelve beaches and a corniche',
        paragraphs: [
          'Between Bormes-les-Mimosas and Le Rayol-Canadel, Le Lavandou stretches along some twelve kilometres of coastline at the foot of the Maures massif. The town owes its reputation to its succession of beaches — twelve of them, from the centre to Pramousquier — and to a corniche where villas step down through the pine woods, facing the Hyères islands. A former fishing village that became a seaside resort in the twentieth century, Le Lavandou has kept a human scale: a marina, a lively seafront and hamlets that each retain their own character.',
          'For an interior architect, the territory is remarkably varied: apartments in residences by the harbour, village houses in the narrow streets of the centre, villas from the 1960s to the 1980s awaiting full renovation on the hillsides, contemporary builds delivered as shells to be fitted out. Most owners do not live here year-round. Our role is to design, coordinate and deliver without requiring them to travel back and forth.',
          'SB Design Riviera has recently completed two projects on the Le Lavandou corniche — a full renovation in Aiguebelle and a new build in Pramousquier. That first-hand knowledge of the terrain, the local trades and the town’s planning rules matters on sites where access, slope and season dictate the schedule.',
        ],
        quartiersTitle: 'The neighbourhoods of Le Lavandou',
        quartiers: [
          {
            name: 'Town centre and harbour',
            text: 'The heart of the resort: the marina, the seafront with its shops and the lanes of the old village. Apartments with views over the bay and townhouses where light and storage are won centimetre by centimetre.',
          },
          {
            name: 'Saint-Clair',
            text: 'East of the centre, a renowned beach and a quiet residential area, frequented by pointillist painters in the early twentieth century. Pine-wood villas, family houses to modernise, easy access in every season.',
          },
          {
            name: 'La Fossette',
            text: 'A small cove framed by rocks and pines, with discreet villas clinging to the slope. Projects here are often a matter of terraces, framed views and volumes opened up towards the sea.',
          },
          {
            name: 'Aiguebelle',
            text: 'A hillside hamlet between the corniche road and the beach. Steep plots and panoramic views over the bay and the islands: this is where we completely rethought Villa Aiguebelle, with its stone pillars and infinity pool.',
          },
          {
            name: 'Cavalière',
            text: 'A wide bay closed to the east by Cap Nègre. Seafront villas and residences in the pines: a sought-after area for family stays, where properties often call for a complete upgrade.',
          },
          {
            name: 'Pramousquier',
            text: 'The last hamlet before Le Rayol-Canadel, with its beach and wooded hills. Here we delivered Villa Pramousquier, a new build with a hammam, a wine cellar and a bioclimatic pergola.',
          },
          {
            name: 'Cap Nègre',
            text: 'A wooded residential headland with rare, highly protected properties served by private roads. Discretion, tightly managed site logistics and exacting finishes are the rule.',
          },
        ],
      },
      biens: {
        title1: 'Villas, village houses,',
        title2: 'apartments with a view',
        paragraphs: [
          'Le Lavandou’s housing stock was built in waves: early twentieth-century holiday villas in Saint-Clair and Aiguebelle, pine-wood estates from the 1960s to the 1980s along the corniche, high-end residences near the harbour, then contemporary builds on the last available plots. Each generation of building calls for a different response — insulation, services, a new room layout or simply a fresh, contemporary interior.',
          'We work across all of these types with one constant: bringing the sea into the house. Enlarged openings, removed partitions, continuity between living room and terrace, materials that withstand salt, wind and sun.',
        ],
        items: [
          'Pine-wood villas on the corniche, renovated in full or in phases',
          'Waterfront properties in Cavalière, Saint-Clair or La Fossette',
          'Village houses and townhouses in the old centre',
          'Contemporary villas delivered as shells, fitted out from A to Z',
          'Apartments in residences overlooking the bay or the islands',
        ],
        prestationsTitle: 'Our services in Le Lavandou',
        prestations: [
          'Complete renovation of villas and apartments',
          'Bespoke interior architecture and decoration',
          'Furniture, kitchens and joinery designed by the studio',
          'Outdoor design: terraces, pool, summer kitchen',
          'Enhancement before seasonal letting or sale',
        ],
      },
      contraintes: {
        title1: 'What to know',
        title2: 'before renovating in Le Lavandou',
        intro:
          'Le Lavandou is a coastal, wooded town that is very busy in summer. Three realities weigh on a project: planning regulations, the protection of natural areas and the seasonal calendar. We build them into the very first sketches.',
        items: [
          {
            title: 'Coastal Law and the 100-metre strip',
            text: 'Outside areas that are already built up, new construction is prohibited within the 100-metre coastal strip. For an existing villa, an extension or a pool depends on the zoning and is checked case by case with the town planning department.',
          },
          {
            title: 'Local plan (PLU) and zoning',
            text: 'The local plan sets, area by area, heights, footprint, setbacks and sometimes external appearance (colours, roofs, fences). An interior renovation is generally not subject to it; a change to the façade or to volumes is.',
          },
          {
            title: 'Protected sites and Natura 2000',
            text: 'The Corniche des Maures and the shoreline are covered by landscape and environmental protections — a listed site, terrestrial and marine Natura 2000 zones depending on the sector. They may require an opinion from the heritage architect or specific conditions.',
          },
          {
            title: 'Mandatory brush clearing',
            text: 'In the Var, properties in wooded areas are subject to legal brush-clearing obligations, generally within 50 metres of buildings. This must be anticipated in the landscape design and before any works during the fire-risk season.',
          },
          {
            title: 'Access and site logistics',
            text: 'Narrow corniche roads, private lanes at Cap Nègre, limited parking: deliveries, cranes and skips have to be planned. We organise the flows to limit disturbance and comply with the rules of co-ownerships and private estates.',
          },
          {
            title: 'Summer restrictions',
            text: 'Municipal orders may restrict noisy works in high season, and summer traffic slows everything down. A site schedule in Le Lavandou is therefore built from autumn to spring, so that the house is delivered before summer.',
          },
        ],
        note:
          'This information is given for guidance only: the exact rules depend on the plot and change over time. We check them for each project with the town planning department before drawing.',
      },
      methode: {
        title1: 'Our method',
        title2: 'for owners living abroad',
        intro:
          'A large share of our clients in Le Lavandou live elsewhere in France or abroad. We have structured our service so that a project can be decided, followed and handed over remotely, with a single point of contact.',
        steps: [
          {
            title: 'On-site survey and diagnosis',
            text: 'We visit the property, take measurements, photograph the existing state and identify the technical points — services, structure, damp, access. You receive a clear report, free of jargon.',
          },
          {
            title: 'Design and 3D visuals',
            text: 'Plans, elevations, material boards and 3D views are presented to you by video call. Decisions are made remotely, on images faithful to what will be delivered.',
          },
          {
            title: 'Local trades and a consolidated budget',
            text: 'We consult contractors from the corniche and the gulf whom we know, compare their offers and hand you a consolidated budget, item by item.',
          },
          {
            title: 'Site supervision and photo reporting',
            text: 'Regular visits, an illustrated report after each one, video calls at key milestones. You know where the site stands without having to come.',
          },
          {
            title: 'Turnkey delivery before the season',
            text: 'Cleaning, furniture installation, styling and handover with you — or with your property manager — so that the house is ready the day you arrive.',
          },
        ],
      },
      realisations: {
        title1: 'Our projects',
        title2: 'in Le Lavandou',
        intro:
          'Two recent projects on the corniche, in Aiguebelle and Pramousquier: a complete renovation and a new build, both delivered with their interiors.',
        cards: [
          { slug: 'villa-aiguebelle', alt: 'Villa Aiguebelle in Le Lavandou — complete renovation with an infinity pool facing the sea' },
          { slug: 'villa-pramousquier', alt: 'Villa Pramousquier in Le Lavandou — contemporary build in stone and lacquered metal' },
        ],
      },
      faq: {
        title1: 'Frequently asked questions',
        title2: 'about a project in Le Lavandou',
        items: [
          {
            q: 'Can I renovate a villa in Le Lavandou without being there?',
            a: 'Yes. We handle the survey, the design, the consultation of trades, site supervision and handover. You approve each stage remotely on plans, 3D visuals and photo reports, and you only travel if you wish to.',
          },
          {
            q: 'When is the best time for works in Le Lavandou?',
            a: 'Off season. Noisy works may be restricted by municipal order in summer, and summer traffic complicates deliveries. We study the project in autumn, carry out the works through autumn, winter and spring, and deliver before summer.',
          },
          {
            q: 'Do I need a permit for an interior renovation?',
            a: 'A purely interior renovation, with no change to the façade or floor area, generally requires no planning authorisation. As soon as an opening, an extension, a pool or a change to the external appearance is involved, a prior declaration or a permit is required. We check the situation of your plot with the town hall.',
          },
          {
            q: 'Do you work in the hamlets and at Cap Nègre?',
            a: 'Yes, across the whole town: the centre and harbour, Saint-Clair, La Fossette, Aiguebelle, Cavalière, Pramousquier and Cap Nègre, as well as in the neighbouring towns of Bormes-les-Mimosas and Le Rayol-Canadel.',
          },
        ],
      },
      voisins: {
        title: 'Neighbouring areas',
        links: [
          { path: '/architecte-interieur-bormes-les-mimosas', label: 'Bormes-les-Mimosas' },
          { path: '/architecte-interieur-rayol-canadel', label: 'Rayol-Canadel-sur-Mer' },
          { path: '/architecte-interieur-var', label: 'Corniche des Maures · Var' },
          { path: '/architecte-interieur-saint-tropez', label: 'Gulf of Saint-Tropez' },
        ],
      },
      cta: {
        title1: 'A project',
        title2: 'in Le Lavandou?',
        text: 'Let’s talk about your villa or apartment. Confidential, no-obligation consultation, on site or by video call.',
        button: 'Book a consultation',
      },
    },

    it: {
      meta: {
        title: 'Architetto d’interni Le Lavandou | SB Design Riviera',
        description:
          'Architetto d’interni a Le Lavandou: ristrutturazione di ville ad Aiguebelle, Cavalière e Pramousquier, progetto a distanza, consegna prima dell’estate.',
      },
      hero: {
        label: 'Le Lavandou · Corniche des Maures',
        titleLine1: 'Architetto d’interni',
        titleLine2: 'a Le Lavandou',
        subtitle:
          'Dal porto a Pramousquier, SB Design Riviera progetta, ristruttura e consegna le ville di Le Lavandou per proprietari spesso lontani.',
        imageAlt:
          'Villa Aiguebelle a Le Lavandou — terrazze e piscina a sfioro davanti al Mediterraneo, realizzazione SB Design Riviera',
      },
      commune: {
        title1: 'Le Lavandou,',
        title2: 'dodici spiagge e una corniche',
        paragraphs: [
          'Tra Bormes-les-Mimosas e Le Rayol-Canadel, Le Lavandou si distende per una dozzina di chilometri di litorale ai piedi del massiccio dei Maures. Il comune deve la sua fama alle spiagge che si susseguono — dodici, dal centro fino a Pramousquier — e a una corniche dove le ville digradano nella pineta, di fronte alle isole di Hyères. Antico villaggio di pescatori diventato stazione balneare nel Novecento, Le Lavandou ha conservato una scala umana: un porto turistico, un lungomare vivace e borgate che mantengono ciascuna il proprio carattere.',
          'Per un architetto d’interni il territorio è molto vario: appartamenti in residence sul porto, case di paese nei vicoli del centro, ville degli anni Sessanta-Ottanta da ristrutturare integralmente sulle alture, costruzioni contemporanee consegnate al grezzo da allestire. La maggior parte dei proprietari non vive qui tutto l’anno. Il nostro ruolo è progettare, coordinare e consegnare senza che debbano moltiplicare i viaggi.',
          'SB Design Riviera ha recentemente realizzato due progetti sulla corniche di Le Lavandou — una ristrutturazione completa ad Aiguebelle e una nuova costruzione a Pramousquier. Questa conoscenza del terreno, degli artigiani e delle regole urbanistiche del comune conta su cantieri in cui accesso, pendenza e stagione dettano il calendario.',
        ],
        quartiersTitle: 'I quartieri di Le Lavandou',
        quartiers: [
          {
            name: 'Centro e porto',
            text: 'Il cuore della località: il porto turistico, il lungomare con i suoi negozi, i vicoli dell’antico villaggio. Appartamenti in residence con vista sulla rada e case di città dove luce e spazi contenitivi si conquistano centimetro per centimetro.',
          },
          {
            name: 'Saint-Clair',
            text: 'A est del centro, una spiaggia rinomata e un quartiere residenziale tranquillo, frequentato dai pittori puntinisti all’inizio del Novecento. Ville nella pineta, case di famiglia da ammodernare, accesso agevole in ogni stagione.',
          },
          {
            name: 'La Fossette',
            text: 'Una piccola cala incorniciata da rocce e pini, con ville discrete aggrappate al pendio. I progetti riguardano spesso terrazze, viste inquadrate e volumi da aprire verso il mare.',
          },
          {
            name: 'Aiguebelle',
            text: 'Una borgata a mezza costa, tra la strada della corniche e la spiaggia. Terreni ripidi, viste panoramiche sulla baia e sulle isole: qui abbiamo ripensato integralmente Villa Aiguebelle, con i suoi pilastri in pietra e la piscina a sfioro.',
          },
          {
            name: 'Cavalière',
            text: 'Un’ampia baia chiusa a est dal Cap Nègre. Ville sul mare e residence nella pineta: un quartiere ricercato per i soggiorni in famiglia, con immobili che richiedono spesso un rinnovamento completo.',
          },
          {
            name: 'Pramousquier',
            text: 'L’ultima borgata prima di Le Rayol-Canadel, con la sua spiaggia e le colline boscose. Qui abbiamo consegnato Villa Pramousquier, una nuova costruzione con hammam, cantina e pergola bioclimatica.',
          },
          {
            name: 'Cap Nègre',
            text: 'Un promontorio boscoso e residenziale, con proprietà rare e molto preservate, servite da strade private. Discrezione, logistica di cantiere regolamentata e finiture impeccabili sono la regola.',
          },
        ],
      },
      biens: {
        title1: 'Ville, case di paese,',
        title2: 'appartamenti con vista',
        paragraphs: [
          'Il patrimonio immobiliare di Le Lavandou si è formato a ondate: ville di villeggiatura di inizio Novecento a Saint-Clair e Aiguebelle, lottizzazioni nella pineta degli anni Sessanta-Ottanta lungo la corniche, residence di pregio vicino al porto, infine costruzioni contemporanee sugli ultimi terreni disponibili. Ogni generazione di edifici richiede una risposta diversa — isolamento, impianti, ridistribuzione degli spazi o semplice aggiornamento dello stile.',
          'Interveniamo su tutte queste tipologie con una costante: far entrare il mare in casa. Aperture ampliate, tramezzi eliminati, continuità tra soggiorno e terrazza, materiali che resistono a sale, vento e sole.',
        ],
        items: [
          'Ville nella pineta sulla corniche, da ristrutturare integralmente o per fasi',
          'Proprietà in riva al mare a Cavalière, Saint-Clair o La Fossette',
          'Case di paese e case di città nel centro storico',
          'Ville contemporanee consegnate al grezzo, da allestire dalla A alla Z',
          'Appartamenti in residence con vista sulla rada o sulle isole',
        ],
        prestationsTitle: 'I nostri servizi a Le Lavandou',
        prestations: [
          'Ristrutturazione completa di ville e appartamenti',
          'Architettura d’interni e decorazione su misura',
          'Mobili, cucine e arredi fissi disegnati dallo studio',
          'Sistemazione degli esterni: terrazze, piscina, cucina estiva',
          'Valorizzazione prima della locazione stagionale o della vendita',
        ],
      },
      contraintes: {
        title1: 'Cosa sapere',
        title2: 'prima di ristrutturare a Le Lavandou',
        intro:
          'Le Lavandou è un comune costiero, boscoso e molto frequentato d’estate. Tre realtà pesano su un progetto: la normativa urbanistica, la tutela degli spazi naturali e il calendario stagionale. Le integriamo fin dai primi schizzi.',
        items: [
          {
            title: 'Legge Littoral e fascia dei cento metri',
            text: 'Al di fuori delle aree già urbanizzate, le nuove costruzioni sono vietate nella fascia costiera dei 100 metri. Per una villa esistente, un ampliamento o una piscina dipendono dalla zonizzazione e vanno verificati caso per caso con l’ufficio urbanistica.',
          },
          {
            title: 'PLU e zonizzazione',
            text: 'Il piano urbanistico comunale stabilisce, quartiere per quartiere, altezze, superficie coperta, distanze e talvolta l’aspetto esterno (tinte, coperture, recinzioni). Una ristrutturazione interna in genere non vi è soggetta; una modifica di facciata o di volume sì.',
          },
          {
            title: 'Siti protetti e Natura 2000',
            text: 'La Corniche des Maures e il litorale sono oggetto di tutele paesaggistiche e ambientali — sito classificato, zone Natura 2000 terrestri e marine a seconda dei settori. Possono comportare il parere dell’architetto dei Monumenti e prescrizioni particolari.',
          },
          {
            title: 'Decespugliamento obbligatorio',
            text: 'Nel Var, le proprietà in zona boscosa sono soggette agli obblighi legali di decespugliamento, in genere entro 50 metri dagli edifici. Da prevedere nel progetto del giardino e prima di ogni cantiere nel periodo a rischio incendi.',
          },
          {
            title: 'Accessi e logistica di cantiere',
            text: 'Strade strette della corniche, vie private a Cap Nègre, parcheggi limitati: consegne, gru e container vanno pianificati. Organizziamo i flussi per limitare i disagi e rispettare i regolamenti dei condomini e dei comprensori.',
          },
          {
            title: 'Vincoli estivi',
            text: 'Ordinanze comunali possono limitare i lavori rumorosi in alta stagione, e il traffico estivo rallenta tutto. Il calendario di un cantiere a Le Lavandou si costruisce quindi dall’autunno alla primavera, per consegnare prima dell’estate.',
          },
        ],
        note:
          'Queste indicazioni sono fornite a titolo orientativo: le regole esatte dipendono dal lotto e cambiano nel tempo. Le verifichiamo per ogni progetto con l’ufficio urbanistica del comune prima di disegnare.',
      },
      methode: {
        title1: 'Il nostro metodo',
        title2: 'per i proprietari lontani',
        intro:
          'Gran parte dei nostri clienti a Le Lavandou vive altrove in Francia o all’estero. Abbiamo strutturato il nostro servizio perché un progetto possa essere deciso, seguito e consegnato a distanza, con un unico interlocutore.',
        steps: [
          {
            title: 'Rilievo e diagnosi sul posto',
            text: 'Visitiamo l’immobile, rileviamo le misure, fotografiamo lo stato esistente e individuiamo i punti tecnici — impianti, struttura, umidità, accessi. Ricevete un resoconto chiaro, senza gergo.',
          },
          {
            title: 'Progetto e rendering 3D',
            text: 'Piante, prospetti, tavole dei materiali e viste 3D vi vengono presentati in videoconferenza. Le scelte si fanno a distanza, su immagini fedeli a ciò che sarà consegnato.',
          },
          {
            title: 'Artigiani locali e budget consolidato',
            text: 'Consultiamo imprese della corniche e del golfo che conosciamo, confrontiamo le offerte e vi consegniamo un budget consolidato, voce per voce.',
          },
          {
            title: 'Direzione lavori e report fotografici',
            text: 'Visite regolari, resoconto illustrato dopo ogni sopralluogo, videochiamate alle tappe chiave. Sapete a che punto è il cantiere senza dover venire.',
          },
          {
            title: 'Consegna chiavi in mano prima della stagione',
            text: 'Pulizia, posa degli arredi, allestimento decorativo e consegna con voi — o con il vostro gestore — perché la casa sia pronta al vostro arrivo.',
          },
        ],
      },
      realisations: {
        title1: 'Le nostre realizzazioni',
        title2: 'a Le Lavandou',
        intro:
          'Due progetti recenti sulla corniche, ad Aiguebelle e a Pramousquier: una ristrutturazione completa e una nuova costruzione, entrambe consegnate con i loro interni.',
        cards: [
          { slug: 'villa-aiguebelle', alt: 'Villa Aiguebelle a Le Lavandou — ristrutturazione completa con piscina a sfioro davanti al mare' },
          { slug: 'villa-pramousquier', alt: 'Villa Pramousquier a Le Lavandou — costruzione contemporanea in pietra e metallo laccato' },
        ],
      },
      faq: {
        title1: 'Domande frequenti',
        title2: 'su un progetto a Le Lavandou',
        items: [
          {
            q: 'Si può ristrutturare una villa a Le Lavandou senza essere sul posto?',
            a: 'Sì. Ci occupiamo del rilievo, del progetto, della consultazione degli artigiani, della direzione lavori e della consegna. Approvate ogni fase a distanza su piante, rendering 3D e report fotografici, e vi spostate solo se lo desiderate.',
          },
          {
            q: 'Qual è il periodo migliore per i lavori a Le Lavandou?',
            a: 'La bassa stagione. I lavori rumorosi possono essere limitati da ordinanza comunale in estate e il traffico estivo complica le consegne. Studiamo il progetto in autunno, conduciamo i lavori in autunno, inverno e primavera, e consegniamo prima dell’estate.',
          },
          {
            q: 'Serve un’autorizzazione per una ristrutturazione interna?',
            a: 'Una ristrutturazione puramente interna, senza modifiche di facciata o di superficie, in genere non richiede autorizzazioni urbanistiche. Non appena entrano in gioco un’apertura, un ampliamento, una piscina o una modifica dell’aspetto esterno, servono una dichiarazione preventiva o un permesso. Verifichiamo la situazione del vostro lotto con il comune.',
          },
          {
            q: 'Intervenite nelle borgate e a Cap Nègre?',
            a: 'Sì, in tutto il comune: centro e porto, Saint-Clair, La Fossette, Aiguebelle, Cavalière, Pramousquier e Cap Nègre, oltre che nei comuni vicini di Bormes-les-Mimosas e Le Rayol-Canadel.',
          },
        ],
      },
      voisins: {
        title: 'Le zone vicine',
        links: [
          { path: '/architecte-interieur-bormes-les-mimosas', label: 'Bormes-les-Mimosas' },
          { path: '/architecte-interieur-rayol-canadel', label: 'Rayol-Canadel-sur-Mer' },
          { path: '/architecte-interieur-var', label: 'Corniche des Maures · Var' },
          { path: '/architecte-interieur-saint-tropez', label: 'Golfo di Saint-Tropez' },
        ],
      },
      cta: {
        title1: 'Un progetto',
        title2: 'a Le Lavandou?',
        text: 'Parliamo della vostra villa o del vostro appartamento. Consulenza riservata e senza impegno, sul posto o in videoconferenza.',
        button: 'Prendere appuntamento',
      },
    },
  },
};
