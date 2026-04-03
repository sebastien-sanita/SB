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
    type: 'renovation',
    style: 'contemporain',
    surface: 450,
    year: 2024,
    location: 'Rayol-Canadel-sur-Mer',
    description:
      "Renovation integrale d'une villa d'exception sur les hauteurs du Rayol-Canadel. Volumes genereux ouverts sur la Mediterranee, terrasse panoramique amenagee, piscine a debordement. Materiaux nobles — pierre naturelle, marbre, bois massif — subliment chaque espace de vie. Hammam sur-mesure, cuisine en marbre avec ilot central, escalier en pierre retroeclaire.",
    philosophy:
      "Faire dialoguer architecture et paysage. Chaque ouverture a ete pensee comme un cadrage sur la Mediterranee, chaque materiau choisi pour sa capacite a vieillir avec noblesse. L'ambition : creer un lieu ou le temps suspend son cours, ou la lumiere naturelle dessine les espaces et ou chaque detail temoigne d'un savoir-faire artisanal d'excellence.",
    materials: [
      'Pierre naturelle',
      'Marbre veine',
      'Noyer massif',
      'Verre securit extra-clair',
      'Laiton brosse',
      'Beton cire mineral',
    ],
    highlights: [
      'Piscine a debordement face a la Mediterranee',
      'Hammam en pierre avec chromotherapie',
      'Cuisine sur-mesure en marbre avec ilot central',
      'Escalier en pierre naturelle retroeclaire',
      'Terrasse panoramique avec cuisine exterieure',
    ],
    coverImage: '/images/projets/villa-azur-11.jpeg',
    images: Array.from({ length: 52 }, (_, i) => `/images/projets/villa-azur-${i + 1}.jpeg`),
    featured: true,
  },
  {
    id: '2',
    slug: 'bormes-les-mimosas',
    title: 'Villa Bormes-les-Mimosas',
    category: 'maison',
    type: 'construction',
    style: 'moderne',
    surface: 160,
    year: 2013,
    location: 'Bormes-les-Mimosas',
    description:
      "Construction d'une villa moderne de 160 m² a Bormes-les-Mimosas. Architecture contemporaine en volumes decales sur plusieurs niveaux, ouverte sur la vegetation environnante. Piscine, terrasses en bois amenagees, larges baies vitrees et garde-corps metalliques soulignent une ligne architecturale epuree et lumineuse.",
    philosophy:
      "Inscrire une architecture resolument moderne dans un ecrin de nature mediterraneenne. Les volumes decales epousent la pente naturelle du terrain, multipliant les terrasses et les points de vue. Chaque niveau vit en dialogue avec l'exterieur, prolongeant les espaces de vie vers le paysage.",
    materials: [
      'Enduit blanc',
      'Metal laque noir',
      'Terrasse bois composite',
      'Carport',
      'Toiture construction',
    ],
    highlights: [
      'Architecture en volumes decales sur plusieurs niveaux',
      'Piscine integree au jardin mediterraneen',
      'Terrasses panoramiques en bois',
      'Larges baies vitrees ouvrant sur la vegetation',
      'Vue degagee sur les collines',
    ],
    coverImage: '/images/projets/bormes-les-mimosas-3.jpeg',
    images: Array.from({ length: 7 }, (_, i) => `/images/projets/bormes-les-mimosas-${i + 1}.jpeg`),
    featured: false,
  },
  {
    id: '3',
    slug: 'villa-aiguebelle',
    title: 'Villa Aiguebelle',
    category: 'maison',
    type: 'renovation',
    style: 'moderne',
    surface: 220,
    year: 2024,
    location: 'Aiguebelle, Lavandou',
    description:
      "Renovation complete d'une villa de 220 m² perchee sur les hauteurs d'Aiguebelle, face a la Mediterranee. Les volumes ont ete entierement repenses pour magnifier la vue mer panoramique. Piliers en pierre naturelle, galeries eclairees, piscine a debordement et terrasses en cascade creent une architecture contemporaine ancree dans le paysage. Interieurs epures — salon ouvert sur la baie, salles de bains en pierre — prolongent l'experience du dehors au dedans.",
    philosophy:
      "Reveler le dialogue entre la pierre et la lumiere. Chaque element architectural — piliers, escaliers, garde-corps — a ete dessine pour cadrer le paysage mediterraneen comme une oeuvre vivante. La pierre locale, posee a la main, ancre la villa dans son terroir tandis que les lignes contemporaines projettent l'ensemble vers la modernite. Le soir, un eclairage scenographique transforme la villa en tableau lumineux suspendu entre ciel et mer.",
    materials: [
      'Pierre naturelle locale',
      'Enduit mineral teinte',
      'Metal laque noir',
      'Carrelage grand format',
      'Verre securit',
      'Bois composite',
    ],
    highlights: [
      'Vue mer panoramique sur la baie du Lavandou',
      'Piscine a debordement eclairee',
      'Galerie de piliers en pierre naturelle',
      'Eclairage scenographique nocturne',
      'Terrasses en cascade sur plusieurs niveaux',
    ],
    coverImage: '/images/projets/aiguebelle-3.jpeg',
    images: Array.from({ length: 21 }, (_, i) => `/images/projets/aiguebelle-${i + 1}.jpeg`),
    featured: true,
  },
];
