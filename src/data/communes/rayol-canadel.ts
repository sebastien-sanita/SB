/**
 * Contenu — Architecte d'intérieur au Rayol-Canadel-sur-Mer (FR/EN/IT).
 * Réalisations citées : villa-azur et villa-pramousquier (src/data/projects.ts).
 */
import type { Commune } from './types';

export const commune: Commune = {
  slug: 'rayol-canadel',
  heroImages: [
    '/images/projets/villa-azur-11.jpeg',
    '/images/projets/villa-azur-1.jpeg',
    '/images/projets/pramousquier-2.jpg',
  ],
  ogImage: '/images/projets/villa-azur-11.jpeg',
  content: {
    fr: {
      meta: {
        title: 'Architecte d’intérieur Rayol-Canadel | SB Design Riviera',
        description:
          'Architecte d’intérieur au Rayol-Canadel : villas en terrasses de la corniche des Maures, rénovation complète, conception à distance, livraison avant l’été.',
      },
      hero: {
        label: 'Rayol-Canadel-sur-Mer · Corniche des Maures',
        titleLine1: 'Architecte d’intérieur',
        titleLine2: 'au Rayol-Canadel-sur-Mer',
        subtitle:
          'Sur la corniche des Maures, SB Design Riviera rénove et aménage les villas en terrasses du Rayol et du Canadel, face aux îles d’Hyères.',
        imageAlt:
          'Villa Azur au Rayol-Canadel-sur-Mer — piscine à débordement et terrasse panoramique face à la Méditerranée, réalisation SB Design Riviera',
      },
      commune: {
        title1: 'Le Rayol-Canadel,',
        title2: 'un balcon sur les îles d’Hyères',
        paragraphs: [
          'Le Rayol-Canadel-sur-Mer est l’une des plus petites communes du littoral varois, et l’une des plus spectaculaires. Accrochée à la corniche des Maures entre Le Lavandou et Cavalaire-sur-Mer, elle descend en terrasses abruptes du massif jusqu’à la mer, face aux îles d’Hyères. Pas de centre-ville à proprement parler : deux hameaux, Le Rayol et Le Canadel, reliés par la route de la corniche, et des villas disséminées dans une végétation méditerranéenne exceptionnelle.',
          'Le site s’est développé comme lieu de villégiature dans l’entre-deux-guerres, lorsque le Rayol fut loti autour de son escalier monumental descendant vers la plage. Il en reste un patrimoine de villas des années 1920 et 1930, auquel se sont ajoutées des constructions des décennies suivantes et quelques réalisations contemporaines. Le Domaine du Rayol, propriété du Conservatoire du littoral, et son Jardin des Méditerranées témoignent de la richesse paysagère du lieu.',
          'SB Design Riviera y a rénové intégralement la Villa Azur — volumes ouverts sur la mer, piscine à débordement, hammam en pierre, cuisine en marbre — et a construit la Villa Pramousquier dans le hameau voisin, au Lavandou. Deux chantiers qui ont confirmé ce que tout projet au Rayol-Canadel exige : une lecture fine du relief, une logistique millimétrée et des artisans habitués à la corniche.',
        ],
        quartiersTitle: 'Les secteurs du Rayol-Canadel',
        quartiers: [
          {
            name: 'Le Rayol',
            text: 'Le hameau historique, organisé autour de son escalier monumental et de ses allées descendant vers la plage. Villas de villégiature des années 1920-1930, souvent en pierre et en terrasses, à restaurer avec respect ; propriétés plus récentes sur les hauteurs, aux vues imprenables sur la baie.',
          },
          {
            name: 'Le Canadel',
            text: 'À l’ouest, au pied du col du Canadel qui monte vers le massif des Maures. Une plage, quelques commerces saisonniers et des villas étagées dans la pinède, dont beaucoup datent des années 1960-1980 et appellent une rénovation complète.',
          },
          {
            name: 'Domaine du Rayol',
            text: 'Le grand jardin du Conservatoire du littoral, ouvert au public, qui met en scène les paysages méditerranéens du monde. Les propriétés riveraines partagent cette végétation et ce rapport à la mer, dans un cadre où toute intervention extérieure se fait avec mesure.',
          },
          {
            name: 'Corniche des Maures',
            text: 'La route en balcon qui relie Le Lavandou à Cavalaire dessert des villas accrochées à la pente, parfois en contrebas de la chaussée, accessibles par des escaliers ou des rampes privées. Vue garantie, accès de chantier à organiser avec soin.',
          },
        ],
      },
      biens: {
        title1: 'Villas en terrasses',
        title2: 'et maisons de villégiature',
        paragraphs: [
          'Au Rayol-Canadel, presque tout est en pente. Les villas se développent sur plusieurs niveaux décalés, avec des terrasses à chaque étage et une relation permanente avec la mer. Les biens les plus recherchés sont les villas de pinède avec piscine et vue sur les îles, les propriétés pieds dans l’eau au Rayol et au Canadel, et quelques appartements dans de petites résidences de bord de mer.',
          'Le parc est majoritairement ancien : maisons de villégiature de l’entre-deux-guerres, villas des années 1960 à 1980, plus rarement des constructions récentes. La rénovation y est le cœur de notre activité — isolation, menuiseries, réseaux, redistribution des volumes — avec une attention particulière aux terrasses, aux accès et à la tenue des matériaux face aux embruns.',
        ],
        items: [
          'Villas en terrasses de la corniche, à rénover intégralement',
          'Maisons de villégiature des années 1920-1930 du Rayol, à restaurer',
          'Propriétés pieds dans l’eau au Rayol et au Canadel',
          'Villas contemporaines à aménager ou à repenser',
          'Appartements de petites résidences face à la mer',
        ],
        prestationsTitle: 'Nos prestations au Rayol-Canadel',
        prestations: [
          'Rénovation complète de villas en terrasses',
          'Architecture d’intérieur et décoration sur mesure',
          'Mobilier, cuisines, salles de bains et hammam sur mesure',
          'Extérieurs : piscine, terrasses, cuisine d’été, éclairage',
          'Valorisation avant mise en location saisonnière ou vente',
        ],
      },
      contraintes: {
        title1: 'Ce qu’il faut savoir',
        title2: 'avant de rénover au Rayol-Canadel',
        intro:
          'Petite commune, grandes protections : littoral, paysage, forêt et relief encadrent tout projet au Rayol-Canadel. Les connaître dès le départ évite les mauvaises surprises et permet de dessiner juste.',
        items: [
          {
            title: 'Loi Littoral et bande des cent mètres',
            text: 'Une grande partie des villas du Rayol et du Canadel se trouve à proximité immédiate du rivage. Hors espaces urbanisés, aucune construction nouvelle n’est possible dans la bande des 100 mètres ; les extensions et piscines de villas existantes se vérifient au cas par cas.',
          },
          {
            title: 'Protections paysagères de la corniche',
            text: 'Des secteurs du territoire communal relèvent de protections paysagères — site classé ou inscrit selon les parcelles. Les travaux modifiant l’aspect extérieur peuvent y être soumis à l’avis de l’architecte des Bâtiments de France ou à une autorisation spéciale.',
          },
          {
            title: 'PLU et relief',
            text: 'Le plan local d’urbanisme encadre hauteurs, emprise et aspect des constructions. Sur des terrains aussi pentus, les règles de terrassement, de soutènement et d’intégration paysagère pèsent autant que le programme intérieur.',
          },
          {
            title: 'Natura 2000 et espaces naturels',
            text: 'La corniche varoise et ses fonds marins sont couverts par des périmètres Natura 2000 ; le Domaine du Rayol et plusieurs parcelles appartiennent au Conservatoire du littoral. Les projets riverains doivent composer avec ces protections.',
          },
          {
            title: 'Débroussaillement obligatoire',
            text: 'Commune boisée de bout en bout, Le Rayol-Canadel est soumis aux obligations légales de débroussaillement autour des constructions, en général sur 50 mètres. Le jardin méditerranéen se dessine avec cette contrainte.',
          },
          {
            title: 'Accès, saison et logistique',
            text: 'Route de corniche étroite, villas en contrebas accessibles par escaliers, stationnement rare, travaux bruyants pouvant être limités en été : chaque chantier se planifie hors saison, avec des moyens de levage et des livraisons organisés à l’avance.',
          },
        ],
        note:
          'Ces informations sont données à titre indicatif : les règles exactes dépendent de la parcelle et de son zonage. Nous les vérifions auprès du service urbanisme de la commune avant toute esquisse.',
      },
      methode: {
        title1: 'Notre méthode',
        title2: 'pour les propriétaires éloignés',
        intro:
          'Les propriétaires du Rayol-Canadel sont, pour la plupart, des résidents secondaires venus de toute la France et de l’étranger. Nous conduisons leur projet à distance, de la première esquisse à la remise des clés.',
        steps: [
          {
            title: 'Relevé, accès et diagnostic',
            text: 'Sur place, nous relevons le bâti, photographions l’existant et étudions les accès, les niveaux et les possibilités de levage. Le compte rendu intègre déjà la logistique propre à la corniche.',
          },
          {
            title: 'Conception en 3D',
            text: 'Plans par niveau, coupes sur la pente, matériaux et vues 3D vous sont présentés en visioconférence. Chaque terrasse, chaque vue est travaillée en image avant d’être validée.',
          },
          {
            title: 'Artisans de la corniche',
            text: 'Nous consultons des entreprises habituées aux terrains pentus du Lavandou, du Rayol et de Cavalaire, comparons les devis et vous remettons un budget consolidé.',
          },
          {
            title: 'Suivi et reporting photo',
            text: 'Visites régulières, comptes rendus illustrés, points en visio aux étapes clés. Vous suivez l’avancement sans vous déplacer.',
          },
          {
            title: 'Livraison clé en main',
            text: 'Mobilier, décoration, nettoyage et réception avant la saison, avec vous ou avec votre gestionnaire. La villa vous attend, terminée.',
          },
        ],
      },
      realisations: {
        title1: 'Nos réalisations',
        title2: 'au Rayol-Canadel et à Pramousquier',
        intro:
          'La rénovation intégrale de la Villa Azur sur les hauteurs du Rayol-Canadel et la construction de la Villa Pramousquier, dans le hameau voisin, au Lavandou.',
        cards: [
          { slug: 'villa-azur', alt: 'Villa Azur au Rayol-Canadel-sur-Mer — rénovation intégrale avec piscine à débordement face à la Méditerranée' },
          { slug: 'villa-pramousquier', alt: 'Villa Pramousquier au Lavandou — construction neuve contemporaine dans le hameau voisin du Rayol' },
        ],
      },
      faq: {
        title1: 'Questions fréquentes',
        title2: 'sur un projet au Rayol-Canadel',
        items: [
          {
            q: 'Comment organise-t-on un chantier sur un terrain en forte pente au Rayol-Canadel ?',
            a: 'Nous étudions dès le relevé les accès, les possibilités de levage et de stockage, et les protections à mettre en place sur les terrasses existantes. Les livraisons sont groupées et programmées hors saison. Cette logistique est chiffrée dans le budget, pas découverte en cours de route.',
          },
          {
            q: 'Peut-on rénover une villa des années 1930 du Rayol sans dénaturer son caractère ?',
            a: 'Oui. Nous conservons ce qui fait la valeur de ces maisons — pierre, proportions, terrasses, rapport à la mer — et modernisons l’invisible : isolation, réseaux, menuiseries, salles de bains et cuisine. Les modifications d’aspect extérieur sont étudiées avec le service urbanisme et, si nécessaire, l’architecte des Bâtiments de France.',
          },
          {
            q: 'Peut-on créer une piscine à débordement au Rayol-Canadel ?',
            a: 'Cela dépend de la parcelle : zonage du PLU, bande littorale, protections paysagères et contraintes de terrassement. Nous vérifions la faisabilité avant de dessiner. La Villa Azur, sur les hauteurs de la commune, en est un exemple réalisé.',
          },
          {
            q: 'Suivez-vous le projet si je vis à l’étranger ?',
            a: 'Oui. Conception en visioconférence, vues 3D, comptes rendus photo à chaque visite de chantier et livraison clé en main : vous pouvez ne venir qu’à la réception, ou pas du tout si votre gestionnaire nous représente.',
          },
        ],
      },
      voisins: {
        title: 'Nos secteurs voisins',
        links: [
          { path: '/architecte-interieur-le-lavandou', label: 'Le Lavandou' },
          { path: '/architecte-interieur-bormes-les-mimosas', label: 'Bormes-les-Mimosas' },
          { path: '/architecte-interieur-var', label: 'Corniche des Maures · Var' },
          { path: '/architecte-interieur-saint-tropez', label: 'Golfe de Saint-Tropez' },
        ],
      },
      cta: {
        title1: 'Un projet',
        title2: 'au Rayol-Canadel ?',
        text: 'Parlons de votre villa sur la corniche. Consultation confidentielle et sans engagement, sur place ou en visioconférence.',
        button: 'Prendre rendez-vous',
      },
    },

    en: {
      meta: {
        title: 'Interior Architect Rayol-Canadel | SB Design Riviera',
        description:
          'Interior architect in Le Rayol-Canadel: terraced villas on the Corniche des Maures, complete renovation, remote design process, delivery before summer.',
      },
      hero: {
        label: 'Rayol-Canadel-sur-Mer · Corniche des Maures',
        titleLine1: 'Interior architect',
        titleLine2: 'in Le Rayol-Canadel-sur-Mer',
        subtitle:
          'On the Corniche des Maures, SB Design Riviera renovates and fits out the terraced villas of Le Rayol and Le Canadel, facing the Hyères islands.',
        imageAlt:
          'Villa Azur in Le Rayol-Canadel-sur-Mer — infinity pool and panoramic terrace facing the Mediterranean, a project by SB Design Riviera',
      },
      commune: {
        title1: 'Le Rayol-Canadel,',
        title2: 'a balcony over the Hyères islands',
        paragraphs: [
          'Le Rayol-Canadel-sur-Mer is one of the smallest towns on the Var coast, and one of the most spectacular. Clinging to the Corniche des Maures between Le Lavandou and Cavalaire-sur-Mer, it drops in steep terraces from the massif to the sea, facing the Hyères islands. There is no town centre as such: two hamlets, Le Rayol and Le Canadel, linked by the corniche road, and villas scattered through exceptional Mediterranean vegetation.',
          'The site developed as a holiday resort between the wars, when Le Rayol was laid out around its monumental staircase descending to the beach. It has left a heritage of villas from the 1920s and 1930s, joined by buildings from later decades and a few contemporary projects. The Domaine du Rayol, owned by the Conservatoire du littoral, and its Jardin des Méditerranées bear witness to the richness of the landscape.',
          'SB Design Riviera fully renovated Villa Azur here — volumes opened onto the sea, an infinity pool, a stone hammam, a marble kitchen — and built Villa Pramousquier in the neighbouring hamlet, in Le Lavandou. Two projects that confirmed what any work in Le Rayol-Canadel demands: a precise reading of the terrain, meticulous logistics and trades used to working on the corniche.',
        ],
        quartiersTitle: 'The sectors of Le Rayol-Canadel',
        quartiers: [
          {
            name: 'Le Rayol',
            text: 'The historic hamlet, laid out around its monumental staircase and its paths leading down to the beach. Holiday villas from the 1920s and 1930s, often in stone and on terraces, to be restored with respect; more recent properties on the heights, with uninterrupted views over the bay.',
          },
          {
            name: 'Le Canadel',
            text: 'To the west, at the foot of the Col du Canadel that climbs into the Maures massif. A beach, a few seasonal shops and villas tiered in the pines, many dating from the 1960s to the 1980s and in need of complete renovation.',
          },
          {
            name: 'Domaine du Rayol',
            text: 'The great garden of the Conservatoire du littoral, open to the public, which stages the Mediterranean landscapes of the world. Neighbouring properties share this vegetation and this relationship with the sea, in a setting where any outdoor intervention is made with restraint.',
          },
          {
            name: 'Corniche des Maures',
            text: 'The balcony road linking Le Lavandou to Cavalaire serves villas clinging to the slope, sometimes below the carriageway, reached by private stairs or ramps. Views guaranteed, site access to be organised with care.',
          },
        ],
      },
      biens: {
        title1: 'Terraced villas',
        title2: 'and holiday houses',
        paragraphs: [
          'In Le Rayol-Canadel, almost everything is on a slope. Villas unfold over several staggered levels, with terraces on each floor and a permanent relationship with the sea. The most sought-after properties are pine-wood villas with a pool and views of the islands, waterfront properties in Le Rayol and Le Canadel, and a few apartments in small seafront residences.',
          'The housing stock is mostly older: holiday houses from between the wars, villas from the 1960s to the 1980s, more rarely recent builds. Renovation is the heart of our work here — insulation, windows, services, redistribution of volumes — with particular attention to terraces, access and the durability of materials exposed to sea spray.',
        ],
        items: [
          'Terraced villas on the corniche, to be fully renovated',
          'Holiday houses from the 1920s and 1930s in Le Rayol, to be restored',
          'Waterfront properties in Le Rayol and Le Canadel',
          'Contemporary villas to fit out or rethink',
          'Apartments in small residences facing the sea',
        ],
        prestationsTitle: 'Our services in Le Rayol-Canadel',
        prestations: [
          'Complete renovation of terraced villas',
          'Bespoke interior architecture and decoration',
          'Bespoke furniture, kitchens, bathrooms and hammam',
          'Outdoor spaces: pool, terraces, summer kitchen, lighting',
          'Enhancement before seasonal letting or sale',
        ],
      },
      contraintes: {
        title1: 'What to know',
        title2: 'before renovating in Le Rayol-Canadel',
        intro:
          'A small town with extensive protections: coastline, landscape, forest and terrain frame every project in Le Rayol-Canadel. Knowing them from the outset avoids unpleasant surprises and allows us to design accurately.',
        items: [
          {
            title: 'Coastal Law and the 100-metre strip',
            text: 'A large share of the villas in Le Rayol and Le Canadel stand right by the shore. Outside built-up areas, no new construction is possible within the 100-metre strip; extensions and pools for existing villas are checked case by case.',
          },
          {
            title: 'Landscape protections of the corniche',
            text: 'Parts of the town’s territory fall under landscape protections — a listed or registered site depending on the plot. Works altering the external appearance may be subject to the opinion of the heritage architect or to a special authorisation.',
          },
          {
            title: 'Local plan and terrain',
            text: 'The local plan regulates heights, footprint and appearance of buildings. On such steep plots, the rules on earthworks, retaining structures and landscape integration weigh as much as the interior brief.',
          },
          {
            title: 'Natura 2000 and natural areas',
            text: 'The Var corniche and its seabed are covered by Natura 2000 perimeters; the Domaine du Rayol and several plots belong to the Conservatoire du littoral. Neighbouring projects must work with these protections.',
          },
          {
            title: 'Mandatory brush clearing',
            text: 'Wooded from end to end, Le Rayol-Canadel is subject to legal brush-clearing obligations around buildings, generally within 50 metres. The Mediterranean garden is designed with this constraint in mind.',
          },
          {
            title: 'Access, season and logistics',
            text: 'A narrow corniche road, villas below road level reached by stairs, scarce parking, noisy works that may be restricted in summer: every site is planned off season, with lifting equipment and deliveries organised in advance.',
          },
        ],
        note:
          'This information is given for guidance only: the exact rules depend on the plot and its zoning. We check them with the town planning department before any sketch.',
      },
      methode: {
        title1: 'Our method',
        title2: 'for owners living far away',
        intro:
          'Most owners in Le Rayol-Canadel are second-home owners from all over France and abroad. We run their project remotely, from the first sketch to the handing over of the keys.',
        steps: [
          {
            title: 'Survey, access and diagnosis',
            text: 'On site, we survey the building, photograph the existing state and study access, levels and lifting possibilities. The report already includes the logistics specific to the corniche.',
          },
          {
            title: '3D design',
            text: 'Floor plans by level, sections through the slope, materials and 3D views are presented by video call. Every terrace and every view is worked out in images before being approved.',
          },
          {
            title: 'Corniche trades',
            text: 'We consult contractors used to the steep plots of Le Lavandou, Le Rayol and Cavalaire, compare quotes and hand you a consolidated budget.',
          },
          {
            title: 'Supervision and photo reporting',
            text: 'Regular visits, illustrated reports, video calls at key stages. You follow progress without travelling.',
          },
          {
            title: 'Turnkey delivery',
            text: 'Furniture, decoration, cleaning and handover before the season, with you or with your property manager. The villa awaits you, finished.',
          },
        ],
      },
      realisations: {
        title1: 'Our projects',
        title2: 'in Le Rayol-Canadel and Pramousquier',
        intro:
          'The complete renovation of Villa Azur on the heights of Le Rayol-Canadel and the construction of Villa Pramousquier in the neighbouring hamlet, in Le Lavandou.',
        cards: [
          { slug: 'villa-azur', alt: 'Villa Azur in Le Rayol-Canadel-sur-Mer — complete renovation with an infinity pool facing the Mediterranean' },
          { slug: 'villa-pramousquier', alt: 'Villa Pramousquier in Le Lavandou — contemporary new build in the hamlet next to Le Rayol' },
        ],
      },
      faq: {
        title1: 'Frequently asked questions',
        title2: 'about a project in Le Rayol-Canadel',
        items: [
          {
            q: 'How is a site organised on a steeply sloping plot in Le Rayol-Canadel?',
            a: 'From the survey onwards we study access, lifting and storage possibilities, and the protections to be installed on existing terraces. Deliveries are grouped and scheduled off season. This logistics is priced into the budget, not discovered along the way.',
          },
          {
            q: 'Can a 1930s villa in Le Rayol be renovated without losing its character?',
            a: 'Yes. We keep what gives these houses their value — stone, proportions, terraces, relationship with the sea — and modernise the invisible: insulation, services, windows, bathrooms and kitchen. Changes to the external appearance are studied with the planning department and, where necessary, the heritage architect.',
          },
          {
            q: 'Can an infinity pool be built in Le Rayol-Canadel?',
            a: 'It depends on the plot: local plan zoning, coastal strip, landscape protections and earthwork constraints. We check feasibility before drawing. Villa Azur, on the heights of the town, is a completed example.',
          },
          {
            q: 'Do you follow the project if I live abroad?',
            a: 'Yes. Design by video call, 3D views, photo reports after each site visit and turnkey delivery: you can come only for the handover, or not at all if your property manager represents you.',
          },
        ],
      },
      voisins: {
        title: 'Neighbouring areas',
        links: [
          { path: '/architecte-interieur-le-lavandou', label: 'Le Lavandou' },
          { path: '/architecte-interieur-bormes-les-mimosas', label: 'Bormes-les-Mimosas' },
          { path: '/architecte-interieur-var', label: 'Corniche des Maures · Var' },
          { path: '/architecte-interieur-saint-tropez', label: 'Gulf of Saint-Tropez' },
        ],
      },
      cta: {
        title1: 'A project',
        title2: 'in Le Rayol-Canadel?',
        text: 'Let’s talk about your villa on the corniche. Confidential, no-obligation consultation, on site or by video call.',
        button: 'Book a consultation',
      },
    },

    it: {
      meta: {
        title: 'Architetto d’interni Rayol-Canadel | SB Design Riviera',
        description:
          'Architetto d’interni a Le Rayol-Canadel: ville a terrazze sulla Corniche des Maures, ristrutturazione completa e progetto a distanza.',
      },
      hero: {
        label: 'Rayol-Canadel-sur-Mer · Corniche des Maures',
        titleLine1: 'Architetto d’interni',
        titleLine2: 'a Le Rayol-Canadel-sur-Mer',
        subtitle:
          'Sulla Corniche des Maures, SB Design Riviera ristruttura e allestisce le ville a terrazze di Le Rayol e Le Canadel, di fronte alle isole di Hyères.',
        imageAlt:
          'Villa Azur a Le Rayol-Canadel-sur-Mer — piscina a sfioro e terrazza panoramica davanti al Mediterraneo, realizzazione SB Design Riviera',
      },
      commune: {
        title1: 'Le Rayol-Canadel,',
        title2: 'un balcone sulle isole di Hyères',
        paragraphs: [
          'Le Rayol-Canadel-sur-Mer è uno dei comuni più piccoli del litorale del Var, e uno dei più spettacolari. Aggrappato alla Corniche des Maures tra Le Lavandou e Cavalaire-sur-Mer, scende a terrazze ripide dal massiccio fino al mare, di fronte alle isole di Hyères. Nessun vero centro: due borgate, Le Rayol e Le Canadel, collegate dalla strada della corniche, e ville disseminate in una vegetazione mediterranea eccezionale.',
          'Il sito si è sviluppato come luogo di villeggiatura tra le due guerre, quando Le Rayol fu lottizzato intorno alla sua scalinata monumentale che scende verso la spiaggia. Ne resta un patrimonio di ville degli anni Venti e Trenta, a cui si sono aggiunte costruzioni dei decenni successivi e alcune realizzazioni contemporanee. Il Domaine du Rayol, proprietà del Conservatoire du littoral, e il suo Jardin des Méditerranées testimoniano la ricchezza paesaggistica del luogo.',
          'SB Design Riviera vi ha ristrutturato integralmente Villa Azur — volumi aperti sul mare, piscina a sfioro, hammam in pietra, cucina in marmo — e ha costruito Villa Pramousquier nella borgata vicina, a Le Lavandou. Due cantieri che hanno confermato ciò che ogni progetto a Le Rayol-Canadel esige: una lettura attenta del rilievo, una logistica millimetrica e artigiani abituati alla corniche.',
        ],
        quartiersTitle: 'I settori di Le Rayol-Canadel',
        quartiers: [
          {
            name: 'Le Rayol',
            text: 'La borgata storica, organizzata intorno alla scalinata monumentale e ai viali che scendono verso la spiaggia. Ville di villeggiatura degli anni Venti-Trenta, spesso in pietra e a terrazze, da restaurare con rispetto; proprietà più recenti sulle alture, con viste imprendibili sulla baia.',
          },
          {
            name: 'Le Canadel',
            text: 'A ovest, ai piedi del Col du Canadel che sale verso il massiccio dei Maures. Una spiaggia, alcuni negozi stagionali e ville disposte a gradoni nella pineta, molte delle quali risalgono agli anni Sessanta-Ottanta e richiedono una ristrutturazione completa.',
          },
          {
            name: 'Domaine du Rayol',
            text: 'Il grande giardino del Conservatoire du littoral, aperto al pubblico, che mette in scena i paesaggi mediterranei del mondo. Le proprietà confinanti condividono questa vegetazione e questo rapporto con il mare, in un contesto in cui ogni intervento esterno si fa con misura.',
          },
          {
            name: 'Corniche des Maures',
            text: 'La strada a balcone che collega Le Lavandou a Cavalaire serve ville aggrappate al pendio, talvolta sotto il livello della carreggiata, raggiungibili con scale o rampe private. Vista garantita, accesso al cantiere da organizzare con cura.',
          },
        ],
      },
      biens: {
        title1: 'Ville a terrazze',
        title2: 'e case di villeggiatura',
        paragraphs: [
          'A Le Rayol-Canadel quasi tutto è in pendenza. Le ville si sviluppano su più livelli sfalsati, con terrazze a ogni piano e un rapporto costante con il mare. Gli immobili più ricercati sono le ville nella pineta con piscina e vista sulle isole, le proprietà in riva al mare a Le Rayol e Le Canadel, e alcuni appartamenti in piccoli residence sul lungomare.',
          'Il patrimonio è in gran parte datato: case di villeggiatura tra le due guerre, ville degli anni Sessanta-Ottanta, più raramente costruzioni recenti. La ristrutturazione è qui il cuore della nostra attività — isolamento, serramenti, impianti, ridistribuzione dei volumi — con un’attenzione particolare a terrazze, accessi e tenuta dei materiali esposti alla salsedine.',
        ],
        items: [
          'Ville a terrazze sulla corniche, da ristrutturare integralmente',
          'Case di villeggiatura degli anni Venti-Trenta a Le Rayol, da restaurare',
          'Proprietà in riva al mare a Le Rayol e Le Canadel',
          'Ville contemporanee da allestire o ripensare',
          'Appartamenti in piccoli residence di fronte al mare',
        ],
        prestationsTitle: 'I nostri servizi a Le Rayol-Canadel',
        prestations: [
          'Ristrutturazione completa di ville a terrazze',
          'Architettura d’interni e decorazione su misura',
          'Mobili, cucine, bagni e hammam su misura',
          'Esterni: piscina, terrazze, cucina estiva, illuminazione',
          'Valorizzazione prima della locazione stagionale o della vendita',
        ],
      },
      contraintes: {
        title1: 'Cosa sapere',
        title2: 'prima di ristrutturare a Le Rayol-Canadel',
        intro:
          'Comune piccolo, grandi tutele: litorale, paesaggio, bosco e rilievo inquadrano ogni progetto a Le Rayol-Canadel. Conoscerle fin dall’inizio evita brutte sorprese e permette di progettare con precisione.',
        items: [
          {
            title: 'Legge Littoral e fascia dei cento metri',
            text: 'Gran parte delle ville di Le Rayol e Le Canadel si trova a ridosso della riva. Al di fuori delle aree urbanizzate, nessuna nuova costruzione è possibile nella fascia dei 100 metri; ampliamenti e piscine di ville esistenti si verificano caso per caso.',
          },
          {
            title: 'Tutele paesaggistiche della corniche',
            text: 'Alcuni settori del territorio comunale rientrano in tutele paesaggistiche — sito classificato o iscritto a seconda dei lotti. I lavori che modificano l’aspetto esterno possono essere soggetti al parere dell’architetto dei Monumenti o a un’autorizzazione speciale.',
          },
          {
            title: 'PLU e rilievo',
            text: 'Il piano urbanistico disciplina altezze, superficie coperta e aspetto delle costruzioni. Su terreni così ripidi, le regole su sbancamenti, opere di sostegno e inserimento paesaggistico pesano quanto il programma degli interni.',
          },
          {
            title: 'Natura 2000 e aree naturali',
            text: 'La corniche del Var e i suoi fondali sono coperti da perimetri Natura 2000; il Domaine du Rayol e diversi lotti appartengono al Conservatoire du littoral. I progetti confinanti devono fare i conti con queste tutele.',
          },
          {
            title: 'Decespugliamento obbligatorio',
            text: 'Comune boscoso da un capo all’altro, Le Rayol-Canadel è soggetto agli obblighi legali di decespugliamento intorno agli edifici, in genere entro 50 metri. Il giardino mediterraneo si disegna con questo vincolo.',
          },
          {
            title: 'Accessi, stagione e logistica',
            text: 'Strada di corniche stretta, ville sotto il livello stradale raggiungibili con scale, parcheggi rari, lavori rumorosi che possono essere limitati d’estate: ogni cantiere si pianifica in bassa stagione, con mezzi di sollevamento e consegne organizzati in anticipo.',
          },
        ],
        note:
          'Queste informazioni sono fornite a titolo orientativo: le regole esatte dipendono dal lotto e dalla sua zonizzazione. Le verifichiamo con l’ufficio urbanistica del comune prima di ogni schizzo.',
      },
      methode: {
        title1: 'Il nostro metodo',
        title2: 'per i proprietari lontani',
        intro:
          'I proprietari di Le Rayol-Canadel sono per lo più residenti secondari provenienti da tutta la Francia e dall’estero. Conduciamo il loro progetto a distanza, dal primo schizzo alla consegna delle chiavi.',
        steps: [
          {
            title: 'Rilievo, accessi e diagnosi',
            text: 'Sul posto rileviamo l’edificio, fotografiamo l’esistente e studiamo accessi, livelli e possibilità di sollevamento. Il resoconto integra già la logistica propria della corniche.',
          },
          {
            title: 'Progettazione in 3D',
            text: 'Piante per livello, sezioni sul pendio, materiali e viste 3D vi vengono presentati in videoconferenza. Ogni terrazza, ogni vista è lavorata in immagine prima di essere approvata.',
          },
          {
            title: 'Artigiani della corniche',
            text: 'Consultiamo imprese abituate ai terreni ripidi di Le Lavandou, Le Rayol e Cavalaire, confrontiamo i preventivi e vi consegniamo un budget consolidato.',
          },
          {
            title: 'Direzione lavori e report fotografici',
            text: 'Visite regolari, resoconti illustrati, videochiamate alle tappe chiave. Seguite l’avanzamento senza spostarvi.',
          },
          {
            title: 'Consegna chiavi in mano',
            text: 'Arredi, decorazione, pulizie e consegna prima della stagione, con voi o con il vostro gestore. La villa vi aspetta, finita.',
          },
        ],
      },
      realisations: {
        title1: 'Le nostre realizzazioni',
        title2: 'a Le Rayol-Canadel e Pramousquier',
        intro:
          'La ristrutturazione integrale di Villa Azur sulle alture di Le Rayol-Canadel e la costruzione di Villa Pramousquier nella borgata vicina, a Le Lavandou.',
        cards: [
          { slug: 'villa-azur', alt: 'Villa Azur a Le Rayol-Canadel-sur-Mer — ristrutturazione integrale con piscina a sfioro davanti al Mediterraneo' },
          { slug: 'villa-pramousquier', alt: 'Villa Pramousquier a Le Lavandou — nuova costruzione contemporanea nella borgata accanto a Le Rayol' },
        ],
      },
      faq: {
        title1: 'Domande frequenti',
        title2: 'su un progetto a Le Rayol-Canadel',
        items: [
          {
            q: 'Come si organizza un cantiere su un terreno in forte pendenza a Le Rayol-Canadel?',
            a: 'Fin dal rilievo studiamo accessi, possibilità di sollevamento e stoccaggio, e le protezioni da predisporre sulle terrazze esistenti. Le consegne sono raggruppate e programmate in bassa stagione. Questa logistica è quantificata nel budget, non scoperta strada facendo.',
          },
          {
            q: 'Si può ristrutturare una villa degli anni Trenta a Le Rayol senza snaturarne il carattere?',
            a: 'Sì. Conserviamo ciò che fa il valore di queste case — pietra, proporzioni, terrazze, rapporto con il mare — e modernizziamo l’invisibile: isolamento, impianti, serramenti, bagni e cucina. Le modifiche all’aspetto esterno sono studiate con l’ufficio urbanistica e, se necessario, con l’architetto dei Monumenti.',
          },
          {
            q: 'Si può realizzare una piscina a sfioro a Le Rayol-Canadel?',
            a: 'Dipende dal lotto: zonizzazione del PLU, fascia costiera, tutele paesaggistiche e vincoli di sbancamento. Verifichiamo la fattibilità prima di disegnare. Villa Azur, sulle alture del comune, ne è un esempio realizzato.',
          },
          {
            q: 'Seguite il progetto se vivo all’estero?',
            a: 'Sì. Progettazione in videoconferenza, viste 3D, report fotografici a ogni visita di cantiere e consegna chiavi in mano: potete venire solo alla consegna, o non venire affatto se il vostro gestore ci rappresenta.',
          },
        ],
      },
      voisins: {
        title: 'Le zone vicine',
        links: [
          { path: '/architecte-interieur-le-lavandou', label: 'Le Lavandou' },
          { path: '/architecte-interieur-bormes-les-mimosas', label: 'Bormes-les-Mimosas' },
          { path: '/architecte-interieur-var', label: 'Corniche des Maures · Var' },
          { path: '/architecte-interieur-saint-tropez', label: 'Golfo di Saint-Tropez' },
        ],
      },
      cta: {
        title1: 'Un progetto',
        title2: 'a Le Rayol-Canadel?',
        text: 'Parliamo della vostra villa sulla corniche. Consulenza riservata e senza impegno, sul posto o in videoconferenza.',
        button: 'Prendere appuntamento',
      },
    },
  },
};
