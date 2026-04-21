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
      "Rénovation intégrale d'une villa d'exception sur les hauteurs du Rayol-Canadel. Volumes généreux ouverts sur la Méditerranée, terrasse panoramique aménagée, piscine à débordement. Matériaux nobles — pierre naturelle, marbre, bois massif — subliment chaque espace de vie. Hammam sur-mesure, cuisine en marbre avec îlot central, escalier en pierre rétroéclairé.",
    philosophy:
      "Faire dialoguer architecture et paysage. Chaque ouverture a été pensée comme un cadrage sur la Méditerranée, chaque matériau choisi pour sa capacité à vieillir avec noblesse. L'ambition : créer un lieu où le temps suspend son cours, où la lumière naturelle dessine les espaces et où chaque détail témoigne d'un savoir-faire artisanal d'excellence.",
    materials: [
      'Pierre naturelle',
      'Marbre veiné',
      'Noyer massif',
      'Verre securit extra-clair',
      'Laiton brossé',
      'Béton ciré minéral',
    ],
    highlights: [
      'Piscine à débordement face à la Méditerranée',
      'Hammam en pierre avec chromothérapie',
      'Cuisine sur-mesure en marbre avec îlot central',
      'Escalier en pierre naturelle rétroéclairé',
      'Terrasse panoramique avec cuisine extérieure',
    ],
    coverImage: '/images/projets/villa-azur-11.jpeg',
    images: Array.from({ length: 68 }, (_, i) => `/images/projets/villa-azur-${i + 1}.jpeg`),
    featured: true,
  },
  {
    id: '2',
    slug: 'bormes-les-mimosas',
    title: 'Villas Bormes-les-Mimosas',
    category: 'maison',
    type: 'construction',
    style: 'moderne',
    surface: 320,
    year: 2013,
    location: 'Bormes-les-Mimosas',
    description:
      "Construction neuve de deux villas contemporaines à Bormes-les-Mimosas. Architecture en volumes décalés sur plusieurs niveaux, ouverte sur la végétation environnante. Piscine, terrasses en bois aménagées, larges baies vitrées et garde-corps métalliques soulignent une ligne architecturale épurée et lumineuse. Cuisine et salle de bains sur-mesure, ascenseur privatif, patio intérieur.",
    philosophy:
      "Inscrire deux architectures jumelles résolument modernes dans un écrin de nature méditerranéenne. Les volumes décalés épousent la pente naturelle du terrain, multipliant les terrasses et les points de vue. Chaque niveau vit en dialogue avec l'extérieur, prolongeant les espaces de vie vers le paysage.",
    materials: [
      'Enduit blanc',
      'Métal laqué noir',
      'Terrasse bois composite',
      'Béton apparent',
      'Verre securit',
    ],
    highlights: [
      'Construction neuve de deux villas jumelles',
      'Architecture en volumes décalés sur plusieurs niveaux',
      'Piscine intégrée au jardin méditerranéen',
      'Terrasses panoramiques en bois',
      'Larges baies vitrées ouvrant sur la végétation',
    ],
    coverImage: '/images/projets/bormes-les-mimosas-3.jpg',
    images: [
      '/images/projets/bormes-les-mimosas-1.jpg',
      '/images/projets/bormes-les-mimosas-2.jpg',
      '/images/projets/bormes-les-mimosas-3.jpg',
      '/images/projets/bormes-les-mimosas-4.png',
      '/images/projets/bormes-les-mimosas-5.jpg',
      '/images/projets/bormes-les-mimosas-6.jpg',
      '/images/projets/bormes-les-mimosas-7.jpg',
      '/images/projets/bormes-les-mimosas-8.png',
      '/images/projets/bormes-les-mimosas-9.png',
      '/images/projets/bormes-les-mimosas-10.png',
      '/images/projets/bormes-les-mimosas-11.png',
      '/images/projets/bormes-les-mimosas-12.png',
      '/images/projets/bormes-les-mimosas-13.png',
      '/images/projets/bormes-les-mimosas-14.png',
      '/images/projets/bormes-les-mimosas-15.jpg',
      '/images/projets/bormes-les-mimosas-16.jpg',
      '/images/projets/bormes-les-mimosas-17.jpg',
      '/images/projets/bormes-les-mimosas-18.jpg',
      '/images/projets/bormes-les-mimosas-19.jpg',
      '/images/projets/bormes-les-mimosas-20.jpg',
    ],
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
      "Rénovation complète d'une villa de 220 m² perchée sur les hauteurs d'Aiguebelle, face à la Méditerranée. Les volumes ont été entièrement repensés pour magnifier la vue mer panoramique. Piliers en pierre naturelle, galeries éclairées, piscine à débordement et terrasses en cascade créent une architecture contemporaine ancrée dans le paysage. Intérieurs épurés — salon ouvert sur la baie, salles de bains en pierre — prolongent l'expérience du dehors au dedans.",
    philosophy:
      "Révéler le dialogue entre la pierre et la lumière. Chaque élément architectural — piliers, escaliers, garde-corps — a été dessiné pour cadrer le paysage méditerranéen comme une œuvre vivante. La pierre locale, posée à la main, ancre la villa dans son terroir tandis que les lignes contemporaines projettent l'ensemble vers la modernité. Le soir, un éclairage scénographique transforme la villa en tableau lumineux suspendu entre ciel et mer.",
    materials: [
      'Pierre naturelle locale',
      'Enduit minéral teinté',
      'Métal laqué noir',
      'Carrelage grand format',
      'Verre securit',
      'Bois composite',
    ],
    highlights: [
      'Vue mer panoramique sur la baie du Lavandou',
      'Piscine à débordement éclairée',
      'Galerie de piliers en pierre naturelle',
      'Éclairage scénographique nocturne',
      'Terrasses en cascade sur plusieurs niveaux',
    ],
    coverImage: '/images/projets/aiguebelle-3.jpeg',
    images: Array.from({ length: 28 }, (_, i) => `/images/projets/aiguebelle-${i + 1}.jpeg`),
    featured: true,
  },
  {
    id: '4',
    slug: 'villa-pramousquier',
    title: 'Villa Pramousquier',
    category: 'maison',
    type: 'construction',
    style: 'contemporain',
    surface: 280,
    year: 2024,
    location: 'Pramousquier, Lavandou',
    description:
      "Construction neuve d'une villa contemporaine haut de gamme à Pramousquier, dans la baie du Lavandou. Projet global comprenant la construction, la piscine extérieure et l'aménagement intérieur complet. Programme d'exception avec hammam chromothérapie, cave à vin dédiée, cuisine équipée sur-mesure et pergola bioclimatique. Les matériaux nobles — pierre naturelle apparente, métal laqué, bois massif — composent une écriture architecturale sobre et maîtrisée. Terrasses sur plots, piscine privative et entrée en pierre ponctuent l'ensemble d'un caractère méditerranéen assumé.",
    philosophy:
      "Composer un lieu de vie total, où chaque pièce devient une expérience sensorielle. La pergola bioclimatique module la lumière au fil des heures, le hammam offre une parenthèse de bien-être, la cave à vin célèbre l'art de la table. L'architecture privilégie la continuité entre dedans et dehors, avec des terrasses généreuses et un traitement soigné de la pierre locale qui ancre la villa dans son terroir.",
    materials: [
      'Pierre naturelle apparente',
      'Métal laqué noir',
      'Bois massif',
      'Carrelage grand format',
      'Pergola bioclimatique',
      'Éclairage LED intégré',
    ],
    highlights: [
      'Construction neuve avec piscine extérieure',
      'Pergola bioclimatique sur terrasse principale',
      'Hammam avec chromothérapie',
      'Cave à vin sur-mesure',
      'Cuisine équipée avec kitchenette extérieure',
      'Escalier à éclairage LED intégré',
    ],
    coverImage: '/images/projets/pramousquier-3.jpg',
    images: Array.from({ length: 28 }, (_, i) => `/images/projets/pramousquier-${i + 1}.jpg`),
    featured: false,
  },
  {
    id: '5',
    slug: 'villa-villefranche-sur-mer',
    title: 'Villa Villefranche-sur-Mer',
    category: 'maison',
    type: 'renovation',
    style: 'contemporain',
    surface: 300,
    year: 2024,
    location: 'Villefranche-sur-Mer',
    description:
      "Projet d'aménagement intérieur complet avec terrasse extérieure face à la baie de Villefranche-sur-Mer. Cuisine sur-mesure, murs en stuc nacré, plafonds en staff, pose de carrelage grand format sans joint. Escalier tournant en crema marfil, métallerie en inox poli miroir, portes laquées sur-mesure. Terrasse sur plots et piscine à débordement prolongent l'expérience intérieure vers l'horizon méditerranéen, dans un écrin contemporain d'une rare élégance sur la Côte d'Azur.",
    philosophy:
      "Élever l'exigence du détail au rang d'architecture. Chaque matériau — stuc nacré, crema marfil, inox poli — a été choisi pour sa capacité à capter la lumière méditerranéenne et à transformer l'espace au fil des heures. L'escalier tournant devient sculpture, le carrelage grand format efface les limites, la piscine se confond avec l'horizon.",
    materials: [
      'Stuc nacré',
      'Crema marfil',
      'Carrelage grand format',
      'Staff plâtrerie décorative',
      'Inox poli miroir',
      'Portes laquées sur-mesure',
    ],
    highlights: [
      'Cuisine sur-mesure',
      'Murs en stuc nacré et plafonds en staff',
      'Pose de carrelage grand format sans joint',
      'Escalier tournant en crema marfil',
      'Terrasse sur plots et piscine à débordement',
      'Métallerie en inox poli miroir',
    ],
    coverImage: '/images/projets/villefranche-sur-mer-1.jpg',
    images: Array.from({ length: 28 }, (_, i) => `/images/projets/villefranche-sur-mer-${i + 1}.jpg`),
    featured: false,
  },
  {
    id: '6',
    slug: 'villa-la-croix-valmer',
    title: 'Villa La Croix-Valmer',
    category: 'maison',
    type: 'construction',
    style: 'contemporain',
    surface: 240,
    year: 2025,
    location: 'La Croix-Valmer',
    description:
      "Projet mixte de construction neuve et de rénovation d'une piscine existante à La Croix-Valmer, avec aménagement intérieur et extérieur complet. Architecture résolument contemporaine : piscine à débordement retravaillée, carport intégré, terrasses généreuses et larges baies vitrées ouvertes sur le paysage varois. Les volumes épurés et la ligne basse s'ancrent dans le terrain. Projet dessiné en rendus 3D pour visualiser l'insertion paysagère et l'harmonie des volumes avant réalisation.",
    philosophy:
      "Imaginer une villa en dialogue avec son site : lignes horizontales, terrasses prolongées, piscine à débordement comme seuil vers le paysage. Le projet privilégie la fluidité entre intérieur et extérieur, avec un carport intégré à l'architecture et des volumes taillés pour cadrer le panorama. La phase de conception 3D permet d'ajuster chaque détail avant la mise en œuvre.",
    materials: [
      'Enduit minéral clair',
      'Métal laqué',
      'Verre securit grand format',
      'Bois composite',
      'Béton apparent',
    ],
    highlights: [
      'Construction neuve avec rénovation piscine existante',
      'Aménagement intérieur et extérieur complet',
      'Conception et rendus 3D en amont',
      'Carport architectural intégré',
      'Terrasses en cascade et larges baies vitrées',
    ],
    coverImage: '/images/projets/la-croix-valmer-1.jpg',
    images: Array.from({ length: 12 }, (_, i) => `/images/projets/la-croix-valmer-${i + 1}.jpg`),
    featured: false,
  },
];
