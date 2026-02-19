export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'appartement' | 'residence' | 'maison' | 'salle-de-bains';
  type: 'renovation' | 'construction';
  style: 'moderne' | 'classique' | 'contemporain';
  surface: number;
  year: number;
  location: string;
  description: string;
  philosophy: string;
  materials: string[];
  highlights: string[];
  coverImage: string;
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'villa-azur',
    title: 'Villa Azur',
    category: 'maison',
    type: 'construction',
    style: 'contemporain',
    surface: 450,
    year: 2024,
    location: 'Saint-Jean-Cap-Ferrat',
    description:
      "Renovation integrale d'une villa d'exception sur les hauteurs de Saint-Jean-Cap-Ferrat. Volumes genereux ouverts sur la Mediterranee, terrasse panoramique amenagee, piscine a debordement. Materiaux nobles — pierre naturelle, bois massif, verre securit — subliment chaque espace de vie.",
    philosophy:
      "Faire dialoguer architecture et paysage. Chaque ouverture a ete pensee comme un cadrage sur la Mediterranee, chaque materiau choisi pour sa capacite a vieillir avec noblesse. L'ambition : creer un lieu ou le temps suspend son cours, ou la lumiere naturelle dessine les espaces et ou chaque detail temoigne d'un savoir-faire artisanal d'excellence.",
    materials: [
      'Pierre de Bourgogne',
      'Chene massif vieilli',
      'Verre securit extra-clair',
      'Laiton brosse',
      'Beton cire mineral',
      'Marbre Statuario',
    ],
    highlights: [
      'Piscine a debordement face a la Mediterranee',
      'Baies vitrees toute hauteur de 4 metres',
      'Terrasse panoramique de 120 m² en teck',
      'Domotique Lutron integree',
      'Eclairage scenographique iGuzzini',
    ],
    coverImage: '/images/projets/villa-azur-1.jpg',
    images: [
      '/images/projets/villa-azur-1.jpg',
      '/images/projets/villa-azur-2.jpg',
      '/images/projets/villa-azur-3.jpg',
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'penthouse-croisette',
    title: 'Penthouse Croisette',
    category: 'appartement',
    type: 'renovation',
    style: 'moderne',
    surface: 280,
    year: 2024,
    location: 'Cannes',
    description:
      "Transformation d'un penthouse duplex face a la Croisette en residence de prestige. Cuisine italienne sur-mesure, salon double hauteur, suite parentale avec dressing et terrasse privative. Domotique integree, eclairage scenographique et materiaux d'exception.",
    philosophy:
      "Sublimer l'existant sans le trahir. Le duplex possedait une geometrie exceptionnelle que nous avons amplifiee par un jeu de double hauteur et de perspectives traversantes. Le design epure, d'inspiration milanaise, laisse la priorite a la lumiere et aux vues — la Croisette devient partie integrante du decor.",
    materials: [
      'Marbre Calacatta',
      'Noyer americain',
      'Acier noir mat',
      'Cuir pleine fleur',
      'Verre fume',
      'Pierre bleue du Hainaut',
    ],
    highlights: [
      'Salon double hauteur de 5,5 metres',
      'Cuisine Boffi sur-mesure',
      'Suite parentale avec dressing de 25 m²',
      'Home cinema Dolby Atmos',
      'Terrasse privative de 80 m²',
    ],
    coverImage: '/images/projets/penthouse-croisette-1.jpg',
    images: [
      '/images/projets/penthouse-croisette-1.jpg',
      '/images/projets/penthouse-croisette-2.jpg',
      '/images/projets/penthouse-croisette-3.jpg',
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'suite-riviera',
    title: 'Suite Riviera',
    category: 'appartement',
    type: 'renovation',
    style: 'classique',
    surface: 160,
    year: 2024,
    location: 'Nice',
    description:
      "Renovation d'un appartement haussmannien sur la Promenade des Anglais. Restauration des moulures et parquets d'epoque, alliance du cachet historique et du confort contemporain. Salle de bains en marbre, cuisine ouverte avec ilot central, vue mer panoramique.",
    philosophy:
      "Honorer l'heritage architectural tout en y insufflant une elegance contemporaine. Les moulures restaurees a la main cohabitent avec un mobilier aux lignes epurees. Le parti pris : ne rien ajouter qui ne soit necessaire, laisser respirer les volumes haussmanniens et magnifier la lumiere de la Riviera qui inonde chaque piece.",
    materials: [
      'Parquet Versailles en chene',
      'Marbre Carrara',
      'Laiton poli',
      'Stuc traditionnel',
      'Lin naturel',
      'Ceramique artisanale',
    ],
    highlights: [
      'Moulures et rosaces restaurees a l\'identique',
      'Parquet Versailles d\'epoque rehabilite',
      'Salle de bains en marbre massif',
      'Cuisine ouverte avec ilot en Carrara',
      'Vue panoramique Promenade des Anglais',
    ],
    coverImage: '/images/projets/suite-riviera-1.jpg',
    images: [
      '/images/projets/suite-riviera-1.jpg',
      '/images/projets/suite-riviera-2.jpg',
      '/images/projets/suite-riviera-3.jpg',
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'bastide-provencale',
    title: 'Bastide Provencale',
    category: 'maison',
    type: 'renovation',
    style: 'classique',
    surface: 380,
    year: 2023,
    location: 'Mougins',
    description:
      "Restauration d'un mas provencal du XVIIIe siecle dans les collines de Mougins. Jardin mediterraneen avec piscine naturelle, cuisine de chef, cinq suites avec salles de bains en pierre. Respect du patrimoine architectural allie a un confort moderne d'exception.",
    philosophy:
      "Reveler l'ame d'une bastide trois fois centenaire. Chaque intervention a ete guidee par le respect des proportions d'origine et des materiaux du terroir. Les enduits a la chaux, les terres cuites patinees et les boiseries en olivier racontent l'histoire du lieu, tandis que le confort contemporain se fait invisible — present mais jamais ostentatoire.",
    materials: [
      'Pierre de Cassis',
      'Terre cuite ancienne',
      'Enduits a la chaux',
      'Boiserie en olivier',
      'Fer forge artisanal',
      'Tomettes provencales',
    ],
    highlights: [
      'Restauration fidelee au XVIIIe siecle',
      'Piscine naturelle integree au jardin',
      'Cuisine de chef avec fourneaux Lacanche',
      'Cinq suites avec salles de bains en pierre',
      'Jardin mediterraneen paysager de 2 000 m²',
    ],
    coverImage: '/images/projets/bastide-provencale-1.jpg',
    images: [
      '/images/projets/bastide-provencale-1.jpg',
      '/images/projets/bastide-provencale-2.jpg',
      '/images/projets/bastide-provencale-3.jpg',
    ],
    featured: true,
  },
  {
    id: '5',
    slug: 'villa-horizon',
    title: 'Villa Horizon',
    category: 'maison',
    type: 'construction',
    style: 'contemporain',
    surface: 520,
    year: 2024,
    location: 'Ramatuelle',
    description:
      "Villa d'architecte contemporaine surplombant la baie de Pampelonne. Lignes epurees, baies vitrees toute hauteur, piscine a debordement avec pool house. Espaces de vie fluidifes entre interieur et exterieur, terrasses en teck et jardins paysagers.",
    philosophy:
      "Effacer la frontiere entre interieur et exterieur. L'architecture se deploie en strates horizontales qui epousent la topographie, comme si la villa avait toujours fait partie du paysage. Le minimalisme des lignes sert de toile de fond a la nature environnante — la pinede, la mer, la lumiere rasante du couchant deviennent les veritables elements de decor.",
    materials: [
      'Beton architectonique',
      'Teck de Birmanie',
      'Aluminium thermolaque',
      'Pierre de Vals',
      'Verre extra-clair',
      'Acier Corten',
    ],
    highlights: [
      'Piscine a debordement de 18 metres',
      'Pool house avec cuisine exterieure',
      'Baies coulissantes 6 metres toute hauteur',
      'Terrasses etagees de 200 m² en teck',
      'Integration paysagere pinede existante',
    ],
    coverImage: '/images/projets/villa-horizon-1.jpg',
    images: [
      '/images/projets/villa-horizon-1.jpg',
      '/images/projets/villa-horizon-2.jpg',
      '/images/projets/villa-horizon-3.jpg',
    ],
    featured: true,
  },
  {
    id: '6',
    slug: 'ecrin-monaco',
    title: "L'Ecrin",
    category: 'appartement',
    type: 'renovation',
    style: 'moderne',
    surface: 200,
    year: 2023,
    location: 'Monaco',
    description:
      "Amenagement d'un duplex contemporain avec vue sur le port de Monaco. Design sur-mesure, mobilier italien, materiaux precieux — onyx retroeclaire, marbre Calacatta, laiton brosse. Domotique complete, home cinema et cave a vin climatisee.",
    philosophy:
      "Concentrer l'excellence dans chaque centimetre carre. A Monaco, l'espace est le luxe ultime — chaque volume a donc ete optimise avec une precision d'orfevre. Les materiaux precieux ne sont pas decoratifs mais structurels : l'onyx retroeclaire devient source lumineuse, le marbre sculpte les circulations, le laiton dessine les lignes de fuite.",
    materials: [
      'Onyx retroeclaire',
      'Marbre Calacatta Oro',
      'Laiton brosse satin',
      'Ebene de Macassar',
      'Cuir Poltrona Frau',
      'Cristal Lalique',
    ],
    highlights: [
      'Mur en onyx retroeclaire de 3 metres',
      'Cave a vin climatisee de 200 bouteilles',
      'Home cinema Dolby Atmos sur-mesure',
      'Mobilier Minotti et Poltrona Frau',
      'Domotique Crestron integrale',
    ],
    coverImage: '/images/projets/ecrin-monaco-1.jpg',
    images: [
      '/images/projets/ecrin-monaco-1.jpg',
      '/images/projets/ecrin-monaco-2.jpg',
      '/images/projets/ecrin-monaco-3.jpg',
    ],
    featured: true,
  },
  {
    id: '7',
    slug: 'residence-marine',
    title: 'Residence Marine',
    category: 'residence',
    type: 'renovation',
    style: 'contemporain',
    surface: 220,
    year: 2023,
    location: 'Antibes',
    description:
      "Renovation d'une residence de prestige au Cap d'Antibes. Espaces repenses pour maximiser la luminosite naturelle et les vues sur la mer. Terrasse amenagee, cuisine gastronomique, suite parentale avec balneo et dressing sur-mesure.",
    philosophy:
      "Capturer la lumiere et la mer dans chaque espace. La renovation a repense l'ensemble des circulations pour creer des perspectives inedites vers la Mediterranee. Le choix de materiaux clairs et de textures naturelles amplifie la sensation d'espace et de serenite — un havre de paix ou l'architecture se met au service du bien-etre.",
    materials: [
      'Travertin ivoire',
      'Chene blanchi',
      'Inox brosse',
      'Pierre naturelle',
      'Verre depoli',
      'Gres cerame grand format',
    ],
    highlights: [
      'Circulations repensees pour vues mer a 180°',
      'Terrasse amenagee de 60 m² face a la mer',
      'Suite parentale avec balneo et hammam',
      'Cuisine Gaggenau gastronomique',
      'Dressing sur-mesure en chene et cuir',
    ],
    coverImage: '/images/projets/residence-marine-1.jpg',
    images: [
      '/images/projets/residence-marine-1.jpg',
      '/images/projets/residence-marine-2.jpg',
      '/images/projets/residence-marine-3.jpg',
    ],
    featured: false,
  },
  {
    id: '8',
    slug: 'domaine-du-cap',
    title: 'Domaine du Cap',
    category: 'residence',
    type: 'construction',
    style: 'contemporain',
    surface: 600,
    year: 2024,
    location: 'Cap-Ferrat',
    description:
      "Domaine d'exception pieds dans l'eau au Cap-Ferrat. Six suites, spa privatif avec hammam et sauna, piscine miroir, jardins mediterraneens. Architecture contemporaine integree au paysage, materiaux locaux — pierre de Cassis, enduits a la chaux, boiseries en olivier.",
    philosophy:
      "Inscrire l'architecture dans la continuite du rivage. Le domaine se deploie en terrasses successives qui descendent naturellement vers la mer, comme une extension minerale du littoral. Chaque espace — du spa au jardin, de la piscine miroir aux suites — entretient un dialogue intime avec l'element marin, dans un equilibre entre puissance et delicatesse.",
    materials: [
      'Pierre de Cassis',
      'Enduits a la chaux',
      'Boiseries en olivier',
      'Basalte noir',
      'Teck recycle',
      'Bronze patine',
    ],
    highlights: [
      'Acces privatif a la mer',
      'Spa avec hammam, sauna et bassin froid',
      'Piscine miroir de 22 metres',
      'Six suites avec terrasses privatives',
      'Jardins mediterraneens de 3 000 m²',
    ],
    coverImage: '/images/projets/domaine-cap-1.jpg',
    images: [
      '/images/projets/domaine-cap-1.jpg',
      '/images/projets/domaine-cap-2.jpg',
      '/images/projets/domaine-cap-3.jpg',
    ],
    featured: true,
  },
];
