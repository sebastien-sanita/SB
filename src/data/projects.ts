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
    coverImage: '/images/projets/domaine-cap-1.jpg',
    images: [
      '/images/projets/domaine-cap-1.jpg',
      '/images/projets/domaine-cap-2.jpg',
      '/images/projets/domaine-cap-3.jpg',
    ],
    featured: true,
  },
];
