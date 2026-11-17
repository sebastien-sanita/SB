/**
 * Traductions EN / IT des textes des pages projets (17/11/2026).
 * Le français reste la source dans projects.ts ; ici seulement description, démarche,
 * matériaux et points forts. Utiliser localizeProject(project, lang) dans les pages.
 */
import type { Project } from './projects';

type ProjectTexts = Pick<Project, 'description' | 'philosophy' | 'materials' | 'highlights'>;

const en: Record<string, ProjectTexts> = {
  'villa-azur': {
    description:
      'Complete renovation of an exceptional villa on the heights of Rayol-Canadel. Generous volumes opening onto the Mediterranean, a landscaped panoramic terrace and an infinity pool. Noble materials — natural stone, marble, solid wood — enhance every living space. Bespoke hammam, marble kitchen with a central island and a backlit stone staircase.',
    philosophy:
      'Letting architecture and landscape speak to each other. Every opening frames the Mediterranean, every material was chosen for its ability to age gracefully. The ambition: a place where time slows down, where natural light shapes the rooms and where every detail reflects outstanding craftsmanship.',
    materials: ['Natural stone', 'Veined marble', 'Solid walnut', 'Extra-clear safety glass', 'Brushed brass', 'Mineral polished concrete'],
    highlights: [
      'Infinity pool facing the Mediterranean',
      'Stone hammam with chromotherapy',
      'Bespoke marble kitchen with central island',
      'Backlit natural stone staircase',
      'Panoramic terrace with outdoor kitchen',
    ],
  },
  'bormes-les-mimosas': {
    description:
      'New build of two contemporary villas in Bormes-les-Mimosas. Staggered volumes over several levels, open to the surrounding greenery. A pool, landscaped timber terraces, wide glazed openings and metal balustrades underline a clean, light-filled architecture. Bespoke kitchen and bathrooms, private lift and an inner patio.',
    philosophy:
      'Setting two resolutely modern twin houses in a Mediterranean natural setting. The staggered volumes follow the natural slope of the land, multiplying terraces and viewpoints. Each level lives in dialogue with the outdoors, extending the living spaces into the landscape.',
    materials: ['White render', 'Black lacquered metal', 'Composite timber decking', 'Exposed concrete', 'Safety glass'],
    highlights: [
      'New build of two twin villas',
      'Staggered volumes over several levels',
      'Pool set in a Mediterranean garden',
      'Panoramic timber terraces',
      'Wide glazed openings onto the greenery',
    ],
  },
  'villa-aiguebelle': {
    description:
      'Complete renovation of a 220 m² villa perched above Aiguebelle, facing the Mediterranean. The volumes were entirely redesigned to make the most of the panoramic sea view. Natural stone pillars, lit galleries, an infinity pool and cascading terraces create a contemporary architecture rooted in the landscape. Pared-back interiors — a living room open to the bay, stone bathrooms — carry the outdoor experience inside.',
    philosophy:
      'Revealing the dialogue between stone and light. Every architectural element — pillars, stairs, balustrades — was designed to frame the Mediterranean landscape like a living work of art. Local stone, laid by hand, roots the villa in its surroundings while contemporary lines give it a modern edge. At night, scenic lighting turns the villa into a glowing picture suspended between sky and sea.',
    materials: ['Local natural stone', 'Tinted mineral render', 'Black lacquered metal', 'Large-format tiles', 'Safety glass', 'Composite timber'],
    highlights: [
      'Panoramic sea view over the bay of Le Lavandou',
      'Lit infinity pool',
      'Gallery of natural stone pillars',
      'Scenic night lighting',
      'Cascading terraces over several levels',
    ],
  },
  'villa-pramousquier': {
    description:
      'New build of a high-end contemporary villa in Pramousquier, in the bay of Le Lavandou. A complete project covering construction, the outdoor pool and the full interior fit-out. An exceptional programme with a chromotherapy hammam, a dedicated wine cellar, a bespoke fitted kitchen and a bioclimatic pergola. Noble materials — exposed natural stone, lacquered metal, solid wood — make for a sober, controlled architecture. Raised terraces, a private pool and a stone entrance give the whole a distinctly Mediterranean character.',
    philosophy:
      'Composing a complete living space where every room becomes a sensory experience. The bioclimatic pergola modulates the light through the day, the hammam offers a moment of well-being, the wine cellar celebrates the art of the table. The architecture favours continuity between inside and outside, with generous terraces and careful use of local stone that roots the villa in its surroundings.',
    materials: ['Exposed natural stone', 'Black lacquered metal', 'Solid wood', 'Large-format tiles', 'Bioclimatic pergola', 'Integrated LED lighting'],
    highlights: [
      'New build with outdoor pool',
      'Bioclimatic pergola on the main terrace',
      'Hammam with chromotherapy',
      'Bespoke wine cellar',
      'Fitted kitchen with outdoor kitchenette',
      'Staircase with integrated LED lighting',
    ],
  },
  'villa-villefranche-sur-mer': {
    description:
      'Complete interior design project with an outdoor terrace facing the bay of Villefranche-sur-Mer. Bespoke kitchen, pearlescent stucco walls, plasterwork ceilings and seamless large-format tiling. A spiral staircase in crema marfil, mirror-polished stainless steel metalwork and bespoke lacquered doors. A raised terrace and an infinity pool extend the interior towards the Mediterranean horizon, in a contemporary setting of rare elegance on the French Riviera.',
    philosophy:
      'Raising attention to detail to the level of architecture. Every material — pearlescent stucco, crema marfil, polished stainless steel — was chosen for its ability to catch the Mediterranean light and change the space as the day goes by. The spiral staircase becomes a sculpture, the large-format tiles erase boundaries, the pool merges with the horizon.',
    materials: ['Pearlescent stucco', 'Crema marfil', 'Large-format tiles', 'Decorative plasterwork', 'Mirror-polished stainless steel', 'Bespoke lacquered doors'],
    highlights: [
      'Bespoke kitchen',
      'Pearlescent stucco walls and plasterwork ceilings',
      'Seamless large-format tiling',
      'Spiral staircase in crema marfil',
      'Raised terrace and infinity pool',
      'Mirror-polished stainless steel metalwork',
    ],
  },
  'villa-la-croix-valmer': {
    description:
      'A combined project: new build and renovation of an existing pool in La Croix-Valmer, with complete interior and exterior design. Resolutely contemporary architecture: a reworked infinity pool, an integrated carport, generous terraces and wide glazed openings onto the Var landscape. Clean volumes and a low profile anchor the house in its site. The project was designed with 3D renderings to visualise how it sits in the landscape before construction.',
    philosophy:
      'Imagining a villa in dialogue with its site: horizontal lines, extended terraces and an infinity pool as a threshold to the landscape. The project favours a seamless flow between inside and outside, with a carport built into the architecture and volumes shaped to frame the view. The 3D design phase allows every detail to be adjusted before work begins.',
    materials: ['Light mineral render', 'Lacquered metal', 'Large-format safety glass', 'Composite timber', 'Exposed concrete'],
    highlights: [
      'New build with renovation of the existing pool',
      'Complete interior and exterior design',
      '3D design and renderings upfront',
      'Integrated architectural carport',
      'Cascading terraces and wide glazed openings',
    ],
  },
};

const it: Record<string, ProjectTexts> = {
  'villa-azur': {
    description:
      "Ristrutturazione integrale di una villa d'eccezione sulle alture di Rayol-Canadel. Volumi generosi aperti sul Mediterraneo, terrazza panoramica attrezzata e piscina a sfioro. Materiali nobili — pietra naturale, marmo, legno massello — valorizzano ogni ambiente. Hammam su misura, cucina in marmo con isola centrale e scala in pietra retroilluminata.",
    philosophy:
      "Far dialogare architettura e paesaggio. Ogni apertura è pensata come un'inquadratura sul Mediterraneo, ogni materiale scelto per la sua capacità di invecchiare con nobiltà. L'ambizione: creare un luogo dove il tempo rallenta, dove la luce naturale disegna gli spazi e dove ogni dettaglio racconta un savoir-faire artigianale d'eccellenza.",
    materials: ['Pietra naturale', 'Marmo venato', 'Noce massello', 'Vetro di sicurezza extrachiaro', 'Ottone spazzolato', 'Cemento spatolato minerale'],
    highlights: [
      'Piscina a sfioro di fronte al Mediterraneo',
      'Hammam in pietra con cromoterapia',
      'Cucina su misura in marmo con isola centrale',
      'Scala in pietra naturale retroilluminata',
      'Terrazza panoramica con cucina esterna',
    ],
  },
  'bormes-les-mimosas': {
    description:
      'Nuova costruzione di due ville contemporanee a Bormes-les-Mimosas. Volumi sfalsati su più livelli, aperti sul verde circostante. Piscina, terrazze in legno attrezzate, ampie vetrate e parapetti in metallo sottolineano un’architettura essenziale e luminosa. Cucina e bagni su misura, ascensore privato e patio interno.',
    philosophy:
      'Inserire due architetture gemelle decisamente moderne in una cornice naturale mediterranea. I volumi sfalsati seguono la pendenza naturale del terreno, moltiplicando terrazze e punti di vista. Ogni livello vive in dialogo con l’esterno, prolungando gli spazi abitativi verso il paesaggio.',
    materials: ['Intonaco bianco', 'Metallo laccato nero', 'Decking in legno composito', 'Cemento a vista', 'Vetro di sicurezza'],
    highlights: [
      'Nuova costruzione di due ville gemelle',
      'Volumi sfalsati su più livelli',
      'Piscina inserita nel giardino mediterraneo',
      'Terrazze panoramiche in legno',
      'Ampie vetrate aperte sul verde',
    ],
  },
  'villa-aiguebelle': {
    description:
      'Ristrutturazione completa di una villa di 220 m² arroccata sulle alture di Aiguebelle, di fronte al Mediterraneo. I volumi sono stati interamente ripensati per esaltare la vista panoramica sul mare. Pilastri in pietra naturale, gallerie illuminate, piscina a sfioro e terrazze a cascata creano un’architettura contemporanea ancorata al paesaggio. Interni essenziali — soggiorno aperto sulla baia, bagni in pietra — portano l’esperienza dell’esterno all’interno.',
    philosophy:
      'Rivelare il dialogo tra la pietra e la luce. Ogni elemento architettonico — pilastri, scale, parapetti — è disegnato per inquadrare il paesaggio mediterraneo come un’opera viva. La pietra locale, posata a mano, radica la villa nel suo territorio, mentre le linee contemporanee la proiettano nella modernità. La sera, un’illuminazione scenografica trasforma la villa in un quadro luminoso sospeso tra cielo e mare.',
    materials: ['Pietra naturale locale', 'Intonaco minerale colorato', 'Metallo laccato nero', 'Piastrelle di grande formato', 'Vetro di sicurezza', 'Legno composito'],
    highlights: [
      'Vista panoramica sulla baia di Le Lavandou',
      'Piscina a sfioro illuminata',
      'Galleria di pilastri in pietra naturale',
      'Illuminazione scenografica notturna',
      'Terrazze a cascata su più livelli',
    ],
  },
  'villa-pramousquier': {
    description:
      'Nuova costruzione di una villa contemporanea di alta gamma a Pramousquier, nella baia di Le Lavandou. Un progetto globale che comprende la costruzione, la piscina esterna e l’allestimento interno completo. Un programma d’eccezione con hammam con cromoterapia, cantina dedicata, cucina attrezzata su misura e pergola bioclimatica. Materiali nobili — pietra naturale a vista, metallo laccato, legno massello — compongono un’architettura sobria e controllata. Terrazze su piedini, piscina privata e ingresso in pietra danno all’insieme un carattere decisamente mediterraneo.',
    philosophy:
      'Comporre un luogo di vita completo, dove ogni stanza diventa un’esperienza sensoriale. La pergola bioclimatica modula la luce nel corso della giornata, l’hammam offre una pausa di benessere, la cantina celebra l’arte della tavola. L’architettura privilegia la continuità tra interno ed esterno, con terrazze generose e un uso attento della pietra locale che radica la villa nel suo territorio.',
    materials: ['Pietra naturale a vista', 'Metallo laccato nero', 'Legno massello', 'Piastrelle di grande formato', 'Pergola bioclimatica', 'Illuminazione LED integrata'],
    highlights: [
      'Nuova costruzione con piscina esterna',
      'Pergola bioclimatica sulla terrazza principale',
      'Hammam con cromoterapia',
      'Cantina su misura',
      'Cucina attrezzata con angolo cottura esterno',
      'Scala con illuminazione LED integrata',
    ],
  },
  'villa-villefranche-sur-mer': {
    description:
      'Progetto di allestimento interno completo con terrazza esterna affacciata sulla baia di Villefranche-sur-Mer. Cucina su misura, pareti in stucco perlato, soffitti in gesso decorativo e posa di piastrelle di grande formato senza fughe. Scala elicoidale in crema marfil, carpenteria metallica in acciaio inox lucidato a specchio e porte laccate su misura. Terrazza su piedini e piscina a sfioro prolungano l’interno verso l’orizzonte mediterraneo, in una cornice contemporanea di rara eleganza in Costa Azzurra.',
    philosophy:
      'Elevare la cura del dettaglio al rango di architettura. Ogni materiale — stucco perlato, crema marfil, inox lucidato — è stato scelto per la sua capacità di catturare la luce mediterranea e trasformare lo spazio nel corso delle ore. La scala elicoidale diventa scultura, le piastrelle di grande formato cancellano i confini, la piscina si confonde con l’orizzonte.',
    materials: ['Stucco perlato', 'Crema marfil', 'Piastrelle di grande formato', 'Gesso decorativo', 'Inox lucidato a specchio', 'Porte laccate su misura'],
    highlights: [
      'Cucina su misura',
      'Pareti in stucco perlato e soffitti in gesso decorativo',
      'Piastrelle di grande formato posate senza fughe',
      'Scala elicoidale in crema marfil',
      'Terrazza su piedini e piscina a sfioro',
      'Carpenteria metallica in inox lucidato a specchio',
    ],
  },
  'villa-la-croix-valmer': {
    description:
      'Progetto misto di nuova costruzione e ristrutturazione di una piscina esistente a La Croix-Valmer, con allestimento interno ed esterno completo. Architettura decisamente contemporanea: piscina a sfioro rinnovata, posto auto coperto integrato, terrazze generose e ampie vetrate aperte sul paesaggio del Var. Volumi essenziali e linea bassa ancorano la casa al terreno. Progetto sviluppato con rendering 3D per visualizzare l’inserimento nel paesaggio prima della realizzazione.',
    philosophy:
      'Immaginare una villa in dialogo con il suo sito: linee orizzontali, terrazze prolungate e una piscina a sfioro come soglia verso il paesaggio. Il progetto privilegia la fluidità tra interno ed esterno, con un posto auto coperto integrato nell’architettura e volumi pensati per inquadrare il panorama. La fase di progettazione 3D permette di affinare ogni dettaglio prima dei lavori.',
    materials: ['Intonaco minerale chiaro', 'Metallo laccato', 'Vetro di sicurezza di grande formato', 'Legno composito', 'Cemento a vista'],
    highlights: [
      'Nuova costruzione con ristrutturazione della piscina esistente',
      'Allestimento interno ed esterno completo',
      'Progettazione e rendering 3D a monte',
      'Posto auto coperto architettonico integrato',
      'Terrazze a cascata e ampie vetrate',
    ],
  },
};

const texts: Record<'en' | 'it', Record<string, ProjectTexts>> = { en, it };

/** Renvoie le projet avec ses textes dans la langue demandée (français par défaut). */
export function localizeProject(project: Project, lang: string): Project {
  const tr = lang === 'en' || lang === 'it' ? texts[lang][project.slug] : undefined;
  return tr ? { ...project, ...tr } : project;
}
