/**
 * Page zone Nice & Villefranche-sur-Mer — méthode, calendrier, FAQ, maillage.
 * Réalisation citée : villa-villefranche-sur-mer (src/data/projects.ts).
 */
import type { ZoneExtras } from './types';

export const niceExtras: ZoneExtras = {
  fr: {
    realisationsIntro:
      'À Villefranche-sur-Mer, nous avons mené l’aménagement intérieur complet d’une villa de 250 m² face à la baie : cuisine sur mesure, murs en stuc nacré, plafonds en staff, carrelage grand format posé sans joint, escalier tournant en crema marfil et terrasse prolongée par une piscine à débordement.',
    methode: {
      title1: 'Notre méthode',
      title2: 'à Nice et sur la Riviera',
      intro:
        'Entre appartements en copropriété au cœur de Nice et villas accrochées aux collines de Villefranche-sur-Mer ou de Beaulieu-sur-Mer, chaque projet suit le même fil : comprendre le bien et ses règles, dessiner, faire valider, puis coordonner le chantier jusqu’à la remise des clés.',
      steps: [
        {
          title: 'Visite et lecture du bien',
          text: 'Relevés, état des réseaux, points de structure, conditions d’accès : nous analysons l’existant et, en copropriété, le règlement, les horaires autorisés et les contraintes de l’immeuble — ascenseur, parties communes, stationnement.',
        },
        {
          title: 'Conception et matériaux',
          text: 'Plans, élévations, planches de matériaux et vues 3D : les choix se font sur pièces, en tenant compte de la lumière de la baie des Anges ou de la rade, et de l’usage réel du logement.',
        },
        {
          title: 'Copropriété et autorisations',
          text: 'Nous préparons les éléments utiles au syndic lorsque les travaux touchent les parties communes ou l’aspect extérieur, et identifions les démarches d’urbanisme selon le zonage — à confirmer auprès du service urbanisme de la commune.',
        },
        {
          title: 'Coordination et réception',
          text: 'Un interlocuteur unique pilote les entreprises, rend compte de l’avancement en images et organise la réception avec vous ou votre représentant, mobilier et décoration en place.',
        },
      ],
    },
    calendrier: {
      title1: 'Un exemple',
      title2: 'de calendrier',
      intro:
        'Sur la Riviera, le rythme d’un projet suit celui des saisons. Voici un phasage type pour un appartement ou une villa à Nice, à adapter à chaque bien et aux autorisations nécessaires.',
      phases: [
        {
          saison: 'Automne',
          title: 'Étude et conception',
          text: 'Visite, relevés, programme, puis esquisse et choix des matériaux. C’est aussi le moment de consulter la copropriété et de préparer les éventuels dossiers d’urbanisme.',
        },
        {
          saison: 'Hiver',
          title: 'Travaux lourds hors saison',
          text: 'Démolitions, réseaux, maçonnerie : les interventions les plus bruyantes se placent quand l’immeuble et le quartier sont plus calmes.',
        },
        {
          saison: 'Printemps',
          title: 'Finitions et sur-mesure',
          text: 'Revêtements, stucs et peintures, menuiseries, cuisine et mobilier sur mesure : les finitions demandent du soin et de la lumière naturelle pour juger les teintes.',
        },
        {
          saison: 'Avant l’été',
          title: 'Livraison',
          text: 'Nettoyage, mise en place du mobilier et de la décoration, réception : le logement est prêt à être habité ou loué pour la saison.',
        },
      ],
      note: 'Calendrier indicatif : la durée réelle dépend de l’ampleur des travaux, des autorisations et du règlement de copropriété.',
    },
    faq: {
      title1: 'Questions',
      title2: 'fréquentes',
      items: [
        {
          q: 'Rénovez-vous des appartements en copropriété à Nice ?',
          a: 'Oui, dans des immeubles anciens comme dans des résidences récentes. Les travaux qui touchent les parties communes, la structure ou l’aspect extérieur — fenêtres, garde-corps, climatisation — relèvent en général d’une autorisation de l’assemblée générale : nous préparons les plans et descriptifs à transmettre au syndic.',
        },
        {
          q: 'Faut-il une autorisation pour modifier une terrasse ou une façade ?',
          a: 'Cela dépend de la nature des travaux et du secteur. Une modification de l’aspect extérieur passe souvent par une déclaration préalable, parfois par un permis, et certains secteurs protégés requièrent l’avis de l’Architecte des Bâtiments de France. Nous identifions ces démarches dès l’esquisse ; les règles applicables sont à vérifier auprès du service urbanisme de la commune.',
        },
        {
          q: 'Intervenez-vous à Villefranche-sur-Mer, Beaulieu-sur-Mer et Saint-Jean-Cap-Ferrat ?',
          a: 'Oui, ainsi qu’à Èze. Notre réalisation de Villefranche-sur-Mer — l’aménagement intérieur complet d’une villa face à la baie — illustre ce que nous conduisons sur ces villas en coteau, où accès, pente et vues orientent chaque décision.',
        },
        {
          q: 'Quels matériaux privilégiez-vous sur la Riviera ?',
          a: 'Des matériaux qui captent la lumière et vieillissent bien : pierres et marbres choisis selon leur usage, stucs, carrelages grand format, menuiseries laquées. À Villefranche-sur-Mer, stuc nacré, crema marfil et inox poli miroir ont été retenus pour dialoguer avec la mer. Les choix se font sur échantillons.',
        },
      ],
    },
    secteurs: {
      title: 'Nos secteurs',
      links: [{ path: '/architecte-interieur-cap-ferrat', label: 'Saint-Jean-Cap-Ferrat' }],
    },
  },
  en: {
    realisationsIntro:
      'In Villefranche-sur-Mer, we carried out the complete interior fit-out of a 250 m² villa facing the bay: bespoke kitchen, pearlescent stucco walls, decorative plaster ceilings, large-format tiles laid without visible joints, a curved staircase in crema marfil and a terrace that flows into an infinity pool.',
    methode: {
      title1: 'Our method',
      title2: 'in Nice and on the Riviera',
      intro:
        'From apartments in Nice’s residential buildings to villas clinging to the hills of Villefranche-sur-Mer and Beaulieu-sur-Mer, every project follows the same thread: understand the property and its rules, design, obtain approvals, then coordinate the works through to handover.',
      steps: [
        {
          title: 'Survey and assessment',
          text: 'Measurements, services, structural points and access: we analyse the existing property and, in a co-owned building, its rules, permitted working hours and constraints — lift, common areas, parking.',
        },
        {
          title: 'Design and materials',
          text: 'Plans, elevations, material boards and 3D views: decisions are made on tangible documents, taking into account the light of the Baie des Anges or the bay of Villefranche, and how the home will actually be used.',
        },
        {
          title: 'Co-ownership and permits',
          text: 'We prepare what the building manager needs when works affect common parts or the exterior, and identify the planning steps required by the zoning — to be confirmed with the town’s planning department.',
        },
        {
          title: 'Coordination and handover',
          text: 'A single point of contact manages the contractors, reports progress with photos and organises the handover with you or your representative, with furniture and decoration in place.',
        },
      ],
    },
    calendrier: {
      title1: 'A sample',
      title2: 'schedule',
      intro:
        'On the Riviera, a project follows the rhythm of the seasons. Here is a typical phasing for an apartment or a villa in Nice, to be adapted to each property and to the permits required.',
      phases: [
        {
          saison: 'Autumn',
          title: 'Study and design',
          text: 'Site visit, survey, brief, then sketch design and choice of materials. It is also the time to consult the co-ownership and prepare any planning applications.',
        },
        {
          saison: 'Winter',
          title: 'Heavy works off season',
          text: 'Demolition, services, masonry: the noisiest works are scheduled when the building and the neighbourhood are quieter.',
        },
        {
          saison: 'Spring',
          title: 'Finishes and bespoke work',
          text: 'Floor and wall finishes, stucco and paintwork, joinery, kitchen and bespoke furniture: finishes call for care and natural light to judge the colours.',
        },
        {
          saison: 'Before summer',
          title: 'Handover',
          text: 'Cleaning, furniture and decoration in place, final inspection: the home is ready to live in or to let for the season.',
        },
      ],
      note: 'Indicative schedule: the actual duration depends on the scope of works, the permits and the co-ownership rules.',
    },
    faq: {
      title1: 'Frequently asked',
      title2: 'questions',
      items: [
        {
          q: 'Do you renovate apartments in co-owned buildings in Nice?',
          a: 'Yes, in period buildings as well as recent residences. Works affecting common parts, the structure or the exterior appearance — windows, railings, air conditioning — generally require approval from the general meeting of co-owners: we prepare the plans and specifications to send to the building manager.',
        },
        {
          q: 'Is a permit needed to alter a terrace or a façade?',
          a: 'It depends on the nature of the works and the area. A change to the exterior appearance often requires a prior declaration, sometimes a building permit, and some protected areas call for the opinion of the Architecte des Bâtiments de France. We identify these steps from the sketch stage; the applicable rules should be checked with the town’s planning department.',
        },
        {
          q: 'Do you work in Villefranche-sur-Mer, Beaulieu-sur-Mer and Saint-Jean-Cap-Ferrat?',
          a: 'Yes, and in Èze too. Our Villefranche-sur-Mer project — the complete interior fit-out of a villa facing the bay — shows the kind of work we lead on these hillside villas, where access, slope and views shape every decision.',
        },
        {
          q: 'Which materials do you favour on the Riviera?',
          a: 'Materials that catch the light and age well: stones and marbles chosen for their use, stucco, large-format tiles, lacquered joinery. In Villefranche-sur-Mer, pearlescent stucco, crema marfil and mirror-polished stainless steel were chosen to echo the sea. Every choice is made on samples.',
        },
      ],
    },
    secteurs: {
      title: 'Our areas',
      links: [{ path: '/architecte-interieur-cap-ferrat', label: 'Saint-Jean-Cap-Ferrat' }],
    },
  },
  it: {
    realisationsIntro:
      'A Villefranche-sur-Mer abbiamo realizzato l’allestimento interno completo di una villa di 250 m² affacciata sulla baia: cucina su misura, pareti in stucco perlato, soffitti in gesso decorativo, piastrelle di grande formato posate senza fughe, scala curva in crema marfil e una terrazza che prosegue in una piscina a sfioro.',
    methode: {
      title1: 'Il nostro metodo',
      title2: 'a Nizza e sulla Riviera',
      intro:
        'Dagli appartamenti in condominio nel cuore di Nizza alle ville aggrappate alle colline di Villefranche-sur-Mer e Beaulieu-sur-Mer, ogni progetto segue lo stesso filo: comprendere l’immobile e le sue regole, progettare, ottenere le approvazioni e coordinare il cantiere fino alla consegna delle chiavi.',
      steps: [
        {
          title: 'Sopralluogo e analisi',
          text: 'Rilievi, impianti, elementi strutturali, accessi: analizziamo l’esistente e, in condominio, il regolamento, gli orari consentiti e i vincoli dell’edificio — ascensore, parti comuni, parcheggio.',
        },
        {
          title: 'Progetto e materiali',
          text: 'Piante, prospetti, tavole dei materiali e viste 3D: le scelte si fanno su documenti concreti, tenendo conto della luce della Baia degli Angeli o della rada e dell’uso reale della casa.',
        },
        {
          title: 'Condominio e autorizzazioni',
          text: 'Prepariamo gli elementi utili all’amministratore quando i lavori riguardano parti comuni o l’aspetto esterno, e individuiamo le pratiche urbanistiche secondo la zonizzazione — da verificare con l’ufficio urbanistico del comune.',
        },
        {
          title: 'Coordinamento e consegna',
          text: 'Un unico interlocutore dirige le imprese, documenta l’avanzamento con foto e organizza la consegna con voi o con un vostro rappresentante, arredi e decorazione già in posa.',
        },
      ],
    },
    calendrier: {
      title1: 'Un esempio',
      title2: 'di calendario',
      intro:
        'Sulla Riviera il ritmo di un progetto segue quello delle stagioni. Ecco una scansione tipo per un appartamento o una villa a Nizza, da adattare a ogni immobile e alle autorizzazioni necessarie.',
      phases: [
        {
          saison: 'Autunno',
          title: 'Studio e progettazione',
          text: 'Sopralluogo, rilievi, programma, poi progetto di massima e scelta dei materiali. È anche il momento di consultare il condominio e preparare le eventuali pratiche urbanistiche.',
        },
        {
          saison: 'Inverno',
          title: 'Lavori pesanti in bassa stagione',
          text: 'Demolizioni, impianti, opere murarie: gli interventi più rumorosi si collocano quando l’edificio e il quartiere sono più tranquilli.',
        },
        {
          saison: 'Primavera',
          title: 'Finiture e su misura',
          text: 'Rivestimenti, stucchi e pitture, serramenti, cucina e arredi su misura: le finiture richiedono cura e luce naturale per valutare le tinte.',
        },
        {
          saison: 'Prima dell’estate',
          title: 'Consegna',
          text: 'Pulizia, posa di arredi e decorazione, collaudo finale: la casa è pronta per essere abitata o affittata per la stagione.',
        },
      ],
      note: 'Calendario indicativo: la durata effettiva dipende dall’entità dei lavori, dalle autorizzazioni e dal regolamento condominiale.',
    },
    faq: {
      title1: 'Domande',
      title2: 'frequenti',
      items: [
        {
          q: 'Ristrutturate appartamenti in condominio a Nizza?',
          a: 'Sì, in edifici d’epoca come in residenze recenti. I lavori che toccano parti comuni, struttura o aspetto esterno — finestre, parapetti, climatizzazione — richiedono in genere l’approvazione dell’assemblea dei condomini: prepariamo disegni e capitolati da trasmettere all’amministratore.',
        },
        {
          q: 'Serve un’autorizzazione per modificare una terrazza o una facciata?',
          a: 'Dipende dalla natura dei lavori e dalla zona. Una modifica dell’aspetto esterno passa spesso da una dichiarazione preventiva (déclaration préalable), talvolta da un permesso di costruire, e alcune zone tutelate richiedono il parere dell’Architecte des Bâtiments de France. Individuiamo queste pratiche fin dal progetto di massima; le regole applicabili vanno verificate con l’ufficio urbanistico del comune.',
        },
        {
          q: 'Intervenite a Villefranche-sur-Mer, Beaulieu-sur-Mer e Saint-Jean-Cap-Ferrat?',
          a: 'Sì, e anche a Èze. La nostra realizzazione di Villefranche-sur-Mer — l’allestimento interno completo di una villa affacciata sulla baia — mostra il tipo di lavoro che conduciamo in queste ville in collina, dove accessi, pendenza e viste orientano ogni scelta.',
        },
        {
          q: 'Quali materiali privilegiate sulla Riviera?',
          a: 'Materiali che catturano la luce e invecchiano bene: pietre e marmi scelti in base all’uso, stucchi, piastrelle di grande formato, serramenti laccati. A Villefranche-sur-Mer sono stati scelti stucco perlato, crema marfil e acciaio inox lucidato a specchio per dialogare con il mare. Ogni scelta si fa su campioni.',
        },
      ],
    },
    secteurs: {
      title: 'Le nostre zone',
      links: [{ path: '/architecte-interieur-cap-ferrat', label: 'Saint-Jean-Cap-Ferrat' }],
    },
  },
};
