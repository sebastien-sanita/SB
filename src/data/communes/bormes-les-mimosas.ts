/**
 * Contenu — Architecte d'intérieur à Bormes-les-Mimosas (FR/EN/IT).
 * Réalisations citées : bormes-les-mimosas et villa-aiguebelle (src/data/projects.ts).
 */
import type { Commune } from './types';

export const commune: Commune = {
  slug: 'bormes-les-mimosas',
  heroImages: [
    '/images/projets/bormes-les-mimosas-1.jpg',
    '/images/projets/bormes-les-mimosas-3.jpg',
    '/images/projets/aiguebelle-6.jpeg',
  ],
  ogImage: '/images/projets/bormes-les-mimosas-1.jpg',
  content: {
    fr: {
      meta: {
        title: 'Architecte d’intérieur à Bormes | SB Design Riviera',
        description:
          'Architecte d’intérieur à Bormes-les-Mimosas : villas du cap Bénat, de La Favière et de Cabasson, maisons du village. Conception à distance, clé en main.',
      },
      hero: {
        label: 'Bormes-les-Mimosas · Var',
        titleLine1: 'Architecte d’intérieur',
        titleLine2: 'à Bormes-les-Mimosas',
        subtitle:
          'Du village médiéval au cap Bénat, SB Design Riviera conçoit et rénove les maisons et villas de Bormes-les-Mimosas.',
        imageAlt:
          'Villas contemporaines à Bormes-les-Mimosas — volumes décalés, terrasses en bois et piscine, réalisation SB Design Riviera',
      },
      commune: {
        title1: 'Bormes-les-Mimosas,',
        title2: 'du village perché au cap Bénat',
        paragraphs: [
          'Bormes-les-Mimosas occupe une position singulière sur le littoral varois : un village médiéval perché à flanc de colline, dominé par les ruines de son château et descendant en ruelles étroites vers la plaine, et, en contrebas, un territoire littoral qui s’étend de La Favière au cap Bénat, en passant par Cabasson et le fort de Brégançon. Entre les deux, le massif des Maures, ses chênes-lièges et ses pinèdes.',
          'La commune attire depuis longtemps des propriétaires en quête de calme et de nature, à quelques minutes des plages du Lavandou. Le bâti y est contrasté : maisons de village aux façades colorées et aux volumes contraints, villas de pinède des grands domaines du cap Bénat, résidences avec vue autour du port de La Favière, constructions contemporaines dans les quartiers du Pin et de la plaine. Chaque situation impose sa propre lecture architecturale.',
          'SB Design Riviera y a conçu et livré deux villas contemporaines jumelles — volumes décalés sur plusieurs niveaux, terrasses en bois, piscine et ascenseur privatif — et intervient régulièrement sur la corniche voisine, au Lavandou. Nous connaissons les artisans, les contraintes d’accès et les règles d’urbanisme propres à chaque quartier de Bormes.',
        ],
        quartiersTitle: 'Les quartiers de Bormes-les-Mimosas',
        quartiers: [
          {
            name: 'Le village médiéval',
            text: 'Ruelles en escalier, passages couverts, façades ocre et volets colorés. Les maisons de village sont étroites, profondes et superposées : la rénovation y est affaire de lumière, de circulation verticale et de respect des façades, souvent encadrées par le règlement du centre ancien.',
          },
          {
            name: 'Le Pin de Bormes',
            text: 'Le quartier résidentiel et commerçant de la plaine, entre le village et la mer. Villas des années 1970 à 2000 sur des parcelles plates, faciles d’accès : des biens qui se prêtent bien à une rénovation complète ou à une extension.',
          },
          {
            name: 'La Favière et son port',
            text: 'La plage et le port de plaisance de Bormes, bordés de résidences et de villas. Appartements avec vue sur la rade, maisons proches de la plage : ici, les projets visent à ouvrir les volumes et à tirer parti de la lumière.',
          },
          {
            name: 'Cabasson',
            text: 'Un hameau discret face au fort de Brégançon, entre vignes et plage. Villas de caractère dans un environnement très préservé, où l’accès et le stationnement sont réglementés en saison.',
          },
          {
            name: 'Cap Bénat',
            text: 'Un cap boisé et résidentiel, en grande partie organisé en domaines privés gardiennés. Villas de pinède face aux îles d’Or, règlements de domaine à respecter, logistique de chantier à anticiper : c’est le secteur le plus exigeant de la commune.',
          },
        ],
      },
      biens: {
        title1: 'Maisons de village,',
        title2: 'villas de pinède et bord de mer',
        paragraphs: [
          'À Bormes-les-Mimosas, le type de bien dicte le projet. Une maison du village médiéval se rénove de l’intérieur, avec des escaliers à redessiner, des pièces à relier et une lumière à aller chercher en toiture ou en façade arrière. Une villa de pinède des années 1970 au cap Bénat demande le plus souvent une reprise complète — isolation, menuiseries, réseaux — avant de retrouver des volumes contemporains. Un appartement de résidence à La Favière se transforme par le dessin des rangements, de la cuisine et des salles de bains.',
          'Dans tous les cas, nous privilégions des matériaux pérennes et adaptés au climat littoral : pierre, bois massif, métal laqué, enduits à la chaux. Et nous dessinons les extérieurs avec le même soin que les intérieurs, car à Bormes on vit dehors une bonne partie de l’année.',
        ],
        items: [
          'Maisons de village dans le centre ancien, à restructurer',
          'Villas de pinède du cap Bénat et des domaines gardiennés',
          'Villas pieds dans l’eau ou proches des plages de La Favière et Cabasson',
          'Villas contemporaines du Pin et de la plaine, à aménager ou agrandir',
          'Appartements de résidences avec vue sur le port ou la rade',
        ],
        prestationsTitle: 'Nos prestations à Bormes-les-Mimosas',
        prestations: [
          'Rénovation complète de villas et de maisons de village',
          'Architecture d’intérieur, décoration et scénographie lumineuse',
          'Mobilier, cuisines et agencements sur mesure',
          'Construction neuve et extension, de la conception à la livraison',
          'Valorisation avant mise en location saisonnière ou vente',
        ],
      },
      contraintes: {
        title1: 'Ce qu’il faut savoir',
        title2: 'avant de rénover à Bormes',
        intro:
          'Commune littorale et forestière, Bormes-les-Mimosas cumule les protections : loi Littoral, espaces naturels remarquables, risque incendie, centre ancien. Un projet bien préparé les intègre en amont plutôt que de les subir en cours de chantier.',
        items: [
          {
            title: 'Loi Littoral et bande des cent mètres',
            text: 'Hors espaces urbanisés, toute construction nouvelle est interdite dans la bande des 100 mètres à partir du rivage. Les villas existantes de La Favière, de Cabasson ou du cap Bénat peuvent voir leurs possibilités d’extension limitées : à vérifier parcelle par parcelle.',
          },
          {
            title: 'PLU et centre ancien',
            text: 'Le plan local d’urbanisme distingue le village, les quartiers de la plaine et les secteurs naturels. Dans le centre ancien, l’aspect des façades, menuiseries et toitures est encadré ; en zone naturelle, les possibilités de construction sont très réduites.',
          },
          {
            title: 'Cap Bénat et espaces protégés',
            text: 'Le cap Bénat et le littoral de Brégançon comptent des espaces naturels protégés et des terrains du Conservatoire du littoral. Selon le secteur, des prescriptions paysagères ou environnementales s’appliquent, parfois avec avis de l’architecte des Bâtiments de France.',
          },
          {
            title: 'Débroussaillement obligatoire',
            text: 'Le massif des Maures est exposé au risque incendie : les obligations légales de débroussaillement s’imposent autour des constructions, en général sur 50 mètres. Elles conditionnent le projet de jardin et le calendrier des travaux extérieurs.',
          },
          {
            title: 'Domaines gardiennés et copropriétés',
            text: 'Au cap Bénat comme dans certaines résidences de La Favière, les règlements de domaine encadrent horaires de chantier, accès des entreprises et aspect extérieur. Nous les obtenons avant de planifier et nous y conformons.',
          },
          {
            title: 'Saison estivale',
            text: 'Arrêtés limitant les travaux bruyants, circulation dense entre le village et les plages, stationnement réglementé à Cabasson : les chantiers se mènent hors saison et se livrent avant l’été.',
          },
        ],
        note:
          'Ces informations sont indicatives : les règles dépendent de la parcelle, du zonage et des règlements de domaine en vigueur. Nous les vérifions auprès du service urbanisme de Bormes-les-Mimosas avant toute conception.',
      },
      methode: {
        title1: 'Notre méthode',
        title2: 'pour les propriétaires non résidents',
        intro:
          'Beaucoup de propriétaires à Bormes-les-Mimosas vivent à Paris, à Lyon, en Suisse ou plus loin. Nous avons bâti un accompagnement qui ne suppose aucune présence régulière sur place.',
        steps: [
          {
            title: 'Relevé et diagnostic',
            text: 'Visite du bien, relevé complet, photographies, lecture des contraintes techniques et réglementaires. Un compte rendu vous est remis avant toute esquisse.',
          },
          {
            title: 'Conception à distance',
            text: 'Plans, ambiances, matériaux et vues 3D sont présentés en visioconférence. Vous validez chaque étape sur des documents précis, à votre rythme.',
          },
          {
            title: 'Entreprises locales',
            text: 'Nous consultons des artisans de Bormes, du Lavandou et de la corniche, comparons les devis et constituons un budget consolidé avant la signature.',
          },
          {
            title: 'Chantier suivi et documenté',
            text: 'Visites régulières, reporting photo après chaque passage, coordination des entreprises et des livraisons, gestion des accès dans les domaines.',
          },
          {
            title: 'Livraison clé en main',
            text: 'Mobilier posé, décoration installée, nettoyage effectué : vous arrivez dans une maison terminée, prête pour la saison.',
          },
        ],
      },
      realisations: {
        title1: 'Nos réalisations',
        title2: 'à Bormes et sur la corniche',
        intro:
          'Deux villas contemporaines construites à Bormes-les-Mimosas et, à quelques minutes, la rénovation complète d’une villa sur les hauteurs d’Aiguebelle, au Lavandou.',
        cards: [
          { slug: 'bormes-les-mimosas', alt: 'Villas contemporaines à Bormes-les-Mimosas — construction neuve avec terrasses en bois et piscine' },
          { slug: 'villa-aiguebelle', alt: 'Villa Aiguebelle au Lavandou — rénovation complète d’une villa face à la mer' },
        ],
      },
      faq: {
        title1: 'Questions fréquentes',
        title2: 'sur un projet à Bormes-les-Mimosas',
        items: [
          {
            q: 'Peut-on modifier la façade d’une maison du village médiéval ?',
            a: 'Les façades, menuiseries et toitures du centre ancien sont encadrées par le règlement d’urbanisme et, selon le secteur, par l’avis de l’architecte des Bâtiments de France. Une rénovation intérieure reste libre ; toute modification visible depuis l’espace public nécessite une autorisation que nous préparons avec vous.',
          },
          {
            q: 'Travaillez-vous dans les domaines privés du cap Bénat ?',
            a: 'Oui. Nous demandons le règlement du domaine avant de planifier, respectons les horaires et les accès imposés aux entreprises, et organisons les livraisons en conséquence. Ces contraintes font partie du projet dès le départ.',
          },
          {
            q: 'Faut-il débroussailler avant de commencer les travaux ?',
            a: 'Si votre terrain est en zone boisée, les obligations légales de débroussaillement s’appliquent indépendamment des travaux. Nous les intégrons au projet paysager et vérifions la situation de la parcelle avant d’ouvrir le chantier.',
          },
          {
            q: 'Pouvez-vous gérer l’intégralité du projet à distance ?',
            a: 'Oui. De la conception en visioconférence au suivi de chantier avec reporting photo, jusqu’à la livraison clé en main, vous n’avez pas besoin d’être sur place. Nous pouvons aussi coordonner votre gestionnaire ou votre conciergerie.',
          },
        ],
      },
      voisins: {
        title: 'Nos secteurs voisins',
        links: [
          { path: '/architecte-interieur-le-lavandou', label: 'Le Lavandou' },
          { path: '/architecte-interieur-rayol-canadel', label: 'Rayol-Canadel-sur-Mer' },
          { path: '/architecte-interieur-var', label: 'Corniche des Maures · Var' },
          { path: '/architecte-interieur-saint-tropez', label: 'Golfe de Saint-Tropez' },
        ],
      },
      cta: {
        title1: 'Un projet',
        title2: 'à Bormes-les-Mimosas ?',
        text: 'Parlons de votre maison de village, de votre villa ou de votre appartement. Consultation confidentielle et sans engagement.',
        button: 'Prendre rendez-vous',
      },
    },

    en: {
      meta: {
        title: 'Interior Architect in Bormes | SB Design Riviera',
        description:
          'Interior architect in Bormes-les-Mimosas: villas at Cap Bénat, La Favière and Cabasson, houses in the medieval village. Remote design, turnkey delivery.',
      },
      hero: {
        label: 'Bormes-les-Mimosas · Var',
        titleLine1: 'Interior architect',
        titleLine2: 'in Bormes-les-Mimosas',
        subtitle:
          'From the medieval village to Cap Bénat, SB Design Riviera designs and renovates the houses and villas of Bormes-les-Mimosas.',
        imageAlt:
          'Contemporary villas in Bormes-les-Mimosas — staggered volumes, wooden terraces and pool, a project by SB Design Riviera',
      },
      commune: {
        title1: 'Bormes-les-Mimosas,',
        title2: 'from the hilltop village to Cap Bénat',
        paragraphs: [
          'Bormes-les-Mimosas holds a singular position on the Var coast: a medieval village perched on the hillside, overlooked by the ruins of its castle and descending through narrow lanes towards the plain, and, below it, a coastal territory stretching from La Favière to Cap Bénat by way of Cabasson and the Fort de Brégançon. In between, the Maures massif with its cork oaks and pine woods.',
          'The town has long attracted owners seeking calm and nature, a few minutes from the beaches of Le Lavandou. The built fabric is contrasted: village houses with coloured façades and constrained volumes, pine-wood villas in the large estates of Cap Bénat, residences with views around the harbour of La Favière, contemporary builds in the Le Pin and plain districts. Each situation calls for its own architectural reading.',
          'SB Design Riviera has designed and delivered two twin contemporary villas here — staggered volumes over several levels, wooden terraces, a pool and a private lift — and works regularly on the neighbouring corniche in Le Lavandou. We know the local trades, the access constraints and the planning rules specific to each district of Bormes.',
        ],
        quartiersTitle: 'The neighbourhoods of Bormes-les-Mimosas',
        quartiers: [
          {
            name: 'The medieval village',
            text: 'Stepped lanes, covered passages, ochre façades and coloured shutters. Village houses are narrow, deep and stacked: renovating them is a matter of light, vertical circulation and respect for façades, often governed by the rules of the old centre.',
          },
          {
            name: 'Le Pin de Bormes',
            text: 'The residential and commercial district of the plain, between the village and the sea. Villas from the 1970s to the 2000s on flat, easily accessible plots: properties well suited to a complete renovation or an extension.',
          },
          {
            name: 'La Favière and its harbour',
            text: 'The beach and marina of Bormes, lined with residences and villas. Apartments overlooking the bay, houses close to the beach: here, projects aim to open up volumes and make the most of the light.',
          },
          {
            name: 'Cabasson',
            text: 'A discreet hamlet facing the Fort de Brégançon, between vineyards and beach. Villas of character in a highly preserved setting, where access and parking are regulated in season.',
          },
          {
            name: 'Cap Bénat',
            text: 'A wooded residential headland, largely organised into private gated estates. Pine-wood villas facing the Îles d’Or, estate rules to respect, site logistics to anticipate: the most demanding sector of the town.',
          },
        ],
      },
      biens: {
        title1: 'Village houses,',
        title2: 'pine-wood and seafront villas',
        paragraphs: [
          'In Bormes-les-Mimosas, the type of property dictates the project. A house in the medieval village is renovated from the inside, with staircases to redesign, rooms to connect and light to be drawn in through the roof or the rear façade. A 1970s pine-wood villa at Cap Bénat most often needs a complete overhaul — insulation, windows, services — before regaining contemporary volumes. An apartment in a residence at La Favière is transformed through the design of storage, kitchen and bathrooms.',
          'In every case we favour durable materials suited to the coastal climate: stone, solid wood, lacquered metal, lime renders. And we design the outdoor spaces with the same care as the interiors, because in Bormes life is lived outside for much of the year.',
        ],
        items: [
          'Village houses in the old centre, to be restructured',
          'Pine-wood villas at Cap Bénat and in the gated estates',
          'Waterfront villas or houses near the beaches of La Favière and Cabasson',
          'Contemporary villas in Le Pin and the plain, to fit out or extend',
          'Apartments in residences overlooking the harbour or the bay',
        ],
        prestationsTitle: 'Our services in Bormes-les-Mimosas',
        prestations: [
          'Complete renovation of villas and village houses',
          'Interior architecture, decoration and lighting design',
          'Bespoke furniture, kitchens and joinery',
          'New builds and extensions, from design to delivery',
          'Enhancement before seasonal letting or sale',
        ],
      },
      contraintes: {
        title1: 'What to know',
        title2: 'before renovating in Bormes',
        intro:
          'A coastal and forested town, Bormes-les-Mimosas combines several layers of protection: the Coastal Law, remarkable natural areas, wildfire risk and a historic centre. A well-prepared project integrates them upstream rather than discovering them mid-construction.',
        items: [
          {
            title: 'Coastal Law and the 100-metre strip',
            text: 'Outside built-up areas, any new construction is prohibited within 100 metres of the shoreline. Existing villas at La Favière, Cabasson or Cap Bénat may have limited extension possibilities: to be checked plot by plot.',
          },
          {
            title: 'Local plan and historic centre',
            text: 'The local plan distinguishes the village, the districts of the plain and the natural sectors. In the old centre, the appearance of façades, windows and roofs is regulated; in natural zones, building possibilities are very limited.',
          },
          {
            title: 'Cap Bénat and protected areas',
            text: 'Cap Bénat and the Brégançon shoreline include protected natural areas and land owned by the Conservatoire du littoral. Depending on the sector, landscape or environmental conditions apply, sometimes with an opinion from the heritage architect.',
          },
          {
            title: 'Mandatory brush clearing',
            text: 'The Maures massif is exposed to wildfire risk: legal brush-clearing obligations apply around buildings, generally within 50 metres. They shape the garden design and the schedule of outdoor works.',
          },
          {
            title: 'Gated estates and co-ownerships',
            text: 'At Cap Bénat, as in some residences at La Favière, estate rules govern working hours, contractor access and external appearance. We obtain them before planning and comply with them.',
          },
          {
            title: 'Summer season',
            text: 'Orders restricting noisy works, dense traffic between the village and the beaches, regulated parking at Cabasson: works are carried out off season and delivered before summer.',
          },
        ],
        note:
          'This information is indicative: the rules depend on the plot, the zoning and the estate regulations in force. We check them with the Bormes-les-Mimosas planning department before any design work.',
      },
      methode: {
        title1: 'Our method',
        title2: 'for non-resident owners',
        intro:
          'Many owners in Bormes-les-Mimosas live in Paris, Lyon, Switzerland or further afield. We have built a service that assumes no regular presence on site.',
        steps: [
          {
            title: 'Survey and diagnosis',
            text: 'Visit of the property, full survey, photographs, review of technical and regulatory constraints. A report is handed to you before any sketch.',
          },
          {
            title: 'Remote design',
            text: 'Plans, moods, materials and 3D views are presented by video call. You approve each stage on precise documents, at your own pace.',
          },
          {
            title: 'Local contractors',
            text: 'We consult trades from Bormes, Le Lavandou and the corniche, compare quotes and put together a consolidated budget before signature.',
          },
          {
            title: 'A supervised, documented site',
            text: 'Regular visits, photo reporting after each one, coordination of contractors and deliveries, management of access within the estates.',
          },
          {
            title: 'Turnkey delivery',
            text: 'Furniture in place, decoration installed, cleaning done: you arrive in a finished house, ready for the season.',
          },
        ],
      },
      realisations: {
        title1: 'Our projects',
        title2: 'in Bormes and on the corniche',
        intro:
          'Two contemporary villas built in Bormes-les-Mimosas and, a few minutes away, the complete renovation of a villa on the heights of Aiguebelle, in Le Lavandou.',
        cards: [
          { slug: 'bormes-les-mimosas', alt: 'Contemporary villas in Bormes-les-Mimosas — new build with wooden terraces and pool' },
          { slug: 'villa-aiguebelle', alt: 'Villa Aiguebelle in Le Lavandou — complete renovation of a villa facing the sea' },
        ],
      },
      faq: {
        title1: 'Frequently asked questions',
        title2: 'about a project in Bormes-les-Mimosas',
        items: [
          {
            q: 'Can the façade of a house in the medieval village be altered?',
            a: 'Façades, windows and roofs in the old centre are governed by the planning rules and, depending on the sector, by the opinion of the heritage architect. An interior renovation remains free; any change visible from the public space requires an authorisation, which we prepare with you.',
          },
          {
            q: 'Do you work in the private estates of Cap Bénat?',
            a: 'Yes. We request the estate rules before planning, respect the working hours and access imposed on contractors, and organise deliveries accordingly. These constraints are part of the project from the outset.',
          },
          {
            q: 'Is brush clearing required before starting works?',
            a: 'If your plot is in a wooded area, the legal brush-clearing obligations apply regardless of the works. We integrate them into the landscape design and check the situation of the plot before opening the site.',
          },
          {
            q: 'Can you manage the entire project remotely?',
            a: 'Yes. From design by video call to site supervision with photo reporting and turnkey delivery, you do not need to be on site. We can also coordinate with your property manager or concierge service.',
          },
        ],
      },
      voisins: {
        title: 'Neighbouring areas',
        links: [
          { path: '/architecte-interieur-le-lavandou', label: 'Le Lavandou' },
          { path: '/architecte-interieur-rayol-canadel', label: 'Rayol-Canadel-sur-Mer' },
          { path: '/architecte-interieur-var', label: 'Corniche des Maures · Var' },
          { path: '/architecte-interieur-saint-tropez', label: 'Gulf of Saint-Tropez' },
        ],
      },
      cta: {
        title1: 'A project',
        title2: 'in Bormes-les-Mimosas?',
        text: 'Let’s talk about your village house, villa or apartment. Confidential, no-obligation consultation.',
        button: 'Book a consultation',
      },
    },

    it: {
      meta: {
        title: 'Architetto d’interni a Bormes | SB Design Riviera',
        description:
          'Architetto d’interni a Bormes-les-Mimosas: ville a Cap Bénat, La Favière e Cabasson, case del borgo. Progettazione a distanza, consegna chiavi in mano.',
      },
      hero: {
        label: 'Bormes-les-Mimosas · Var',
        titleLine1: 'Architetto d’interni',
        titleLine2: 'a Bormes-les-Mimosas',
        subtitle:
          'Dal borgo medievale a Cap Bénat, SB Design Riviera progetta e ristruttura le case e le ville di Bormes-les-Mimosas.',
        imageAlt:
          'Ville contemporanee a Bormes-les-Mimosas — volumi sfalsati, terrazze in legno e piscina, realizzazione SB Design Riviera',
      },
      commune: {
        title1: 'Bormes-les-Mimosas,',
        title2: 'dal borgo arroccato a Cap Bénat',
        paragraphs: [
          'Bormes-les-Mimosas occupa una posizione singolare sul litorale del Var: un borgo medievale arroccato sul fianco della collina, dominato dai ruderi del castello e che scende per vicoli stretti verso la piana, e, più in basso, un territorio costiero che va da La Favière a Cap Bénat, passando per Cabasson e il forte di Brégançon. In mezzo, il massiccio dei Maures, con le sue querce da sughero e le pinete.',
          'Il comune attira da tempo proprietari in cerca di quiete e natura, a pochi minuti dalle spiagge di Le Lavandou. Il costruito è contrastato: case di paese dalle facciate colorate e dai volumi vincolati, ville nella pineta dei grandi comprensori di Cap Bénat, residence con vista intorno al porto di La Favière, costruzioni contemporanee nei quartieri di Le Pin e della piana. Ogni situazione impone una propria lettura architettonica.',
          'SB Design Riviera vi ha progettato e consegnato due ville contemporanee gemelle — volumi sfalsati su più livelli, terrazze in legno, piscina e ascensore privato — e interviene regolarmente sulla vicina corniche, a Le Lavandou. Conosciamo gli artigiani, i vincoli di accesso e le regole urbanistiche proprie di ogni quartiere di Bormes.',
        ],
        quartiersTitle: 'I quartieri di Bormes-les-Mimosas',
        quartiers: [
          {
            name: 'Il borgo medievale',
            text: 'Vicoli a gradini, passaggi coperti, facciate ocra e persiane colorate. Le case di paese sono strette, profonde e sovrapposte: ristrutturarle è questione di luce, di collegamenti verticali e di rispetto delle facciate, spesso disciplinate dal regolamento del centro storico.',
          },
          {
            name: 'Le Pin de Bormes',
            text: 'Il quartiere residenziale e commerciale della piana, tra il borgo e il mare. Ville dagli anni Settanta al Duemila su lotti pianeggianti e facilmente accessibili: immobili che si prestano bene a una ristrutturazione completa o a un ampliamento.',
          },
          {
            name: 'La Favière e il suo porto',
            text: 'La spiaggia e il porto turistico di Bormes, costeggiati da residence e ville. Appartamenti con vista sulla rada, case vicine alla spiaggia: qui i progetti mirano ad aprire i volumi e a sfruttare la luce.',
          },
          {
            name: 'Cabasson',
            text: 'Una borgata discreta di fronte al forte di Brégançon, tra vigne e spiaggia. Ville di carattere in un ambiente molto preservato, dove accesso e parcheggio sono regolamentati in stagione.',
          },
          {
            name: 'Cap Bénat',
            text: 'Un capo boscoso e residenziale, in gran parte organizzato in comprensori privati custoditi. Ville nella pineta di fronte alle Îles d’Or, regolamenti di comprensorio da rispettare, logistica di cantiere da prevedere: il settore più esigente del comune.',
          },
        ],
      },
      biens: {
        title1: 'Case di paese,',
        title2: 'ville nella pineta e sul mare',
        paragraphs: [
          'A Bormes-les-Mimosas il tipo di immobile detta il progetto. Una casa del borgo medievale si ristruttura dall’interno, con scale da ridisegnare, stanze da collegare e luce da catturare dal tetto o dalla facciata posteriore. Una villa nella pineta degli anni Settanta a Cap Bénat richiede il più delle volte un rifacimento completo — isolamento, serramenti, impianti — prima di ritrovare volumi contemporanei. Un appartamento in residence a La Favière si trasforma attraverso il disegno di armadi, cucina e bagni.',
          'In ogni caso privilegiamo materiali durevoli e adatti al clima costiero: pietra, legno massello, metallo laccato, intonaci a calce. E disegniamo gli esterni con la stessa cura degli interni, perché a Bormes si vive all’aperto per buona parte dell’anno.',
        ],
        items: [
          'Case di paese nel centro storico, da ristrutturare',
          'Ville nella pineta di Cap Bénat e dei comprensori custoditi',
          'Ville in riva al mare o vicine alle spiagge di La Favière e Cabasson',
          'Ville contemporanee di Le Pin e della piana, da allestire o ampliare',
          'Appartamenti in residence con vista sul porto o sulla rada',
        ],
        prestationsTitle: 'I nostri servizi a Bormes-les-Mimosas',
        prestations: [
          'Ristrutturazione completa di ville e case di paese',
          'Architettura d’interni, decorazione e progetto illuminotecnico',
          'Mobili, cucine e arredi fissi su misura',
          'Nuove costruzioni e ampliamenti, dal progetto alla consegna',
          'Valorizzazione prima della locazione stagionale o della vendita',
        ],
      },
      contraintes: {
        title1: 'Cosa sapere',
        title2: 'prima di ristrutturare a Bormes',
        intro:
          'Comune costiero e forestale, Bormes-les-Mimosas somma diverse tutele: legge Littoral, spazi naturali di pregio, rischio incendi, centro storico. Un progetto ben preparato le integra a monte invece di subirle in corso d’opera.',
        items: [
          {
            title: 'Legge Littoral e fascia dei cento metri',
            text: 'Al di fuori delle aree urbanizzate, ogni nuova costruzione è vietata nella fascia dei 100 metri dalla riva. Le ville esistenti di La Favière, Cabasson o Cap Bénat possono avere possibilità di ampliamento limitate: da verificare lotto per lotto.',
          },
          {
            title: 'PLU e centro storico',
            text: 'Il piano urbanistico distingue il borgo, i quartieri della piana e i settori naturali. Nel centro storico l’aspetto di facciate, serramenti e coperture è disciplinato; in zona naturale le possibilità edificatorie sono molto ridotte.',
          },
          {
            title: 'Cap Bénat e aree protette',
            text: 'Cap Bénat e il litorale di Brégançon comprendono aree naturali protette e terreni del Conservatoire du littoral. A seconda del settore si applicano prescrizioni paesaggistiche o ambientali, talvolta con il parere dell’architetto dei Monumenti.',
          },
          {
            title: 'Decespugliamento obbligatorio',
            text: 'Il massiccio dei Maures è esposto al rischio incendi: gli obblighi legali di decespugliamento si applicano intorno agli edifici, in genere entro 50 metri. Condizionano il progetto del giardino e il calendario dei lavori esterni.',
          },
          {
            title: 'Comprensori custoditi e condomini',
            text: 'A Cap Bénat, come in alcuni residence di La Favière, i regolamenti di comprensorio disciplinano orari di cantiere, accesso delle imprese e aspetto esterno. Li otteniamo prima di pianificare e li rispettiamo.',
          },
          {
            title: 'Stagione estiva',
            text: 'Ordinanze che limitano i lavori rumorosi, traffico intenso tra il borgo e le spiagge, parcheggio regolamentato a Cabasson: i cantieri si conducono in bassa stagione e si consegnano prima dell’estate.',
          },
        ],
        note:
          'Queste informazioni sono indicative: le regole dipendono dal lotto, dalla zonizzazione e dai regolamenti di comprensorio in vigore. Le verifichiamo con l’ufficio urbanistica di Bormes-les-Mimosas prima di ogni progettazione.',
      },
      methode: {
        title1: 'Il nostro metodo',
        title2: 'per i proprietari non residenti',
        intro:
          'Molti proprietari a Bormes-les-Mimosas vivono a Parigi, Lione, in Svizzera o più lontano. Abbiamo costruito un servizio che non presuppone alcuna presenza regolare sul posto.',
        steps: [
          {
            title: 'Rilievo e diagnosi',
            text: 'Visita dell’immobile, rilievo completo, fotografie, lettura dei vincoli tecnici e normativi. Vi consegniamo un resoconto prima di ogni schizzo.',
          },
          {
            title: 'Progettazione a distanza',
            text: 'Piante, atmosfere, materiali e viste 3D vengono presentati in videoconferenza. Approvate ogni fase su documenti precisi, al vostro ritmo.',
          },
          {
            title: 'Imprese locali',
            text: 'Consultiamo artigiani di Bormes, Le Lavandou e della corniche, confrontiamo i preventivi e costruiamo un budget consolidato prima della firma.',
          },
          {
            title: 'Cantiere seguito e documentato',
            text: 'Visite regolari, report fotografici dopo ogni sopralluogo, coordinamento delle imprese e delle consegne, gestione degli accessi nei comprensori.',
          },
          {
            title: 'Consegna chiavi in mano',
            text: 'Arredi posati, decorazione installata, pulizie eseguite: arrivate in una casa finita, pronta per la stagione.',
          },
        ],
      },
      realisations: {
        title1: 'Le nostre realizzazioni',
        title2: 'a Bormes e sulla corniche',
        intro:
          'Due ville contemporanee costruite a Bormes-les-Mimosas e, a pochi minuti, la ristrutturazione completa di una villa sulle alture di Aiguebelle, a Le Lavandou.',
        cards: [
          { slug: 'bormes-les-mimosas', alt: 'Ville contemporanee a Bormes-les-Mimosas — nuova costruzione con terrazze in legno e piscina' },
          { slug: 'villa-aiguebelle', alt: 'Villa Aiguebelle a Le Lavandou — ristrutturazione completa di una villa davanti al mare' },
        ],
      },
      faq: {
        title1: 'Domande frequenti',
        title2: 'su un progetto a Bormes-les-Mimosas',
        items: [
          {
            q: 'Si può modificare la facciata di una casa del borgo medievale?',
            a: 'Facciate, serramenti e coperture del centro storico sono disciplinati dal regolamento urbanistico e, a seconda del settore, dal parere dell’architetto dei Monumenti. Una ristrutturazione interna resta libera; ogni modifica visibile dallo spazio pubblico richiede un’autorizzazione che prepariamo con voi.',
          },
          {
            q: 'Lavorate nei comprensori privati di Cap Bénat?',
            a: 'Sì. Richiediamo il regolamento del comprensorio prima di pianificare, rispettiamo orari e accessi imposti alle imprese e organizziamo le consegne di conseguenza. Questi vincoli fanno parte del progetto fin dall’inizio.',
          },
          {
            q: 'Bisogna decespugliare prima di iniziare i lavori?',
            a: 'Se il terreno è in zona boscosa, gli obblighi legali di decespugliamento si applicano a prescindere dai lavori. Li integriamo nel progetto del giardino e verifichiamo la situazione del lotto prima di aprire il cantiere.',
          },
          {
            q: 'Potete gestire l’intero progetto a distanza?',
            a: 'Sì. Dalla progettazione in videoconferenza alla direzione lavori con report fotografici, fino alla consegna chiavi in mano, non avete bisogno di essere sul posto. Possiamo anche coordinarci con il vostro gestore o il vostro servizio di concierge.',
          },
        ],
      },
      voisins: {
        title: 'Le zone vicine',
        links: [
          { path: '/architecte-interieur-le-lavandou', label: 'Le Lavandou' },
          { path: '/architecte-interieur-rayol-canadel', label: 'Rayol-Canadel-sur-Mer' },
          { path: '/architecte-interieur-var', label: 'Corniche des Maures · Var' },
          { path: '/architecte-interieur-saint-tropez', label: 'Golfo di Saint-Tropez' },
        ],
      },
      cta: {
        title1: 'Un progetto',
        title2: 'a Bormes-les-Mimosas?',
        text: 'Parliamo della vostra casa di paese, della vostra villa o del vostro appartamento. Consulenza riservata e senza impegno.',
        button: 'Prendere appuntamento',
      },
    },
  },
};
