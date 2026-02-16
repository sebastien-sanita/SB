export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'appartement' | 'residence' | 'maison';
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
    slug: 'canopee',
    title: 'Canopee',
    category: 'appartement',
    style: 'classique',
    surface: 180,
    year: 2024,
    location: 'Lyon 6e',
    description:
      "Renovation complete d'un appartement haussmannien au coeur du 6e arrondissement. Moulures restaurees, parquet massif, materiaux nobles.",
    coverImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=90',
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=90',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=90',
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'amani',
    title: 'Amani',
    category: 'appartement',
    style: 'contemporain',
    surface: 160,
    year: 2024,
    location: 'Lyon 6e',
    description:
      "Agencement sur-mesure d'un appartement haussmannien. Alliance du cachet ancien et du design contemporain, cuisine ouverte, salle de bains en marbre.",
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=90',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=90',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=90',
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'lumiere',
    title: 'Lumiere',
    category: 'appartement',
    style: 'moderne',
    surface: 140,
    year: 2023,
    location: 'Lyon 8e',
    description:
      "Renovation d'un appartement des annees 1930 dans le 8e. Ouverture des espaces, jeux de lumiere naturelle, materiaux chaleureux.",
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=90',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=90'],
    featured: true,
  },
  {
    id: '4',
    slug: 'villa-paradise',
    title: 'Villa Paradise',
    category: 'maison',
    style: 'contemporain',
    surface: 320,
    year: 2024,
    location: 'Lyon Ouest',
    description:
      "Renovation interieure et exterieure d'une villa d'exception. Espaces de vie ouverts sur le jardin, terrasse amenagee, piscine.",
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=90',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=90'],
    featured: true,
  },
  {
    id: '5',
    slug: 'tete-dor',
    title: "Tete d'Or",
    category: 'appartement',
    style: 'classique',
    surface: 200,
    year: 2023,
    location: 'Lyon 6e',
    description:
      "Appartement de prestige face au Parc de la Tete d'Or. Restauration des elements d'epoque, dressing sur-mesure, domotique integree.",
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=90',
    images: ['https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=90'],
    featured: false,
  },
  {
    id: '6',
    slug: 'garconniere-edgar',
    title: 'Garconniere Edgar',
    category: 'appartement',
    style: 'moderne',
    surface: 65,
    year: 2024,
    location: 'Lyon 6e',
    description:
      "Optimisation d'un espace compact en garconniere elegante. Solutions sur-mesure, rangements integres, design fonctionnel et raffine.",
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=90',
    images: ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=90'],
    featured: true,
  },
  {
    id: '7',
    slug: 'residence-bellecour',
    title: 'Residence Bellecour',
    category: 'residence',
    style: 'classique',
    surface: 280,
    year: 2023,
    location: 'Lyon 2e',
    description:
      "Renovation d'une residence bourgeoise pres de la Place Bellecour. Parquets restaures, cheminees en marbre, cuisine de chef.",
    coverImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=90',
    images: ['https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=90'],
    featured: false,
  },
  {
    id: '8',
    slug: 'villa-caluire',
    title: 'Villa Caluire',
    category: 'maison',
    style: 'contemporain',
    surface: 240,
    year: 2023,
    location: 'Caluire-et-Cuire',
    description:
      "Extension et renovation contemporaine d'une maison familiale. Verriere, cuisine ouverte, suite parentale avec terrasse.",
    coverImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=90',
    images: ['https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=90'],
    featured: false,
  },
  {
    id: '9',
    slug: 'appartement-confluence',
    title: 'Appartement Confluence',
    category: 'appartement',
    style: 'moderne',
    surface: 110,
    year: 2024,
    location: 'Lyon 2e',
    description:
      "Design contemporain pour un appartement neuf au quartier Confluence. Lignes epurees, beton cire, mobilier sur-mesure.",
    coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=90',
    images: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=90'],
    featured: false,
  },
  {
    id: '10',
    slug: 'duplex-croix-rousse',
    title: 'Duplex Croix-Rousse',
    category: 'appartement',
    style: 'moderne',
    surface: 150,
    year: 2023,
    location: 'Lyon 4e',
    description:
      "Transformation d'un atelier canut en duplex lumineux. Volumes genereux, mezzanine, esprit loft avec cachet lyonnais.",
    coverImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1600&q=90',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1600&q=90'],
    featured: false,
  },
  {
    id: '11',
    slug: 'residence-monts-dor',
    title: 'Residence Monts d\'Or',
    category: 'residence',
    style: 'classique',
    surface: 450,
    year: 2024,
    location: 'Monts d\'Or',
    description:
      "Residence familiale d'exception avec home cinema, cave a vin et salle de sport. Materiaux nobles, domotique integree.",
    coverImage: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1600&q=90',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1600&q=90'],
    featured: false,
  },
  {
    id: '12',
    slug: 'maison-ecully',
    title: 'Maison Ecully',
    category: 'maison',
    style: 'contemporain',
    surface: 295,
    year: 2023,
    location: 'Ecully',
    description:
      "Renovation integrale avec extension jardin. Escalier sur-mesure, cuisine de chef, suite parentale avec dressing.",
    coverImage: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1600&q=90',
    images: ['https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1600&q=90'],
    featured: false,
  },
];
