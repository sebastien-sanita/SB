/**
 * ProjectGrid — Grille bento editorial (Editorial Luxe)
 * Grille à base de row-span pour un emboîtement parfait,
 * hover overlay RS.D-style (nom + catégorie centrés)
 * Animation puzzle clip-path déclenchée au scroll via useInView
 * Filtrage par URL param ?type=renovation|construction
 */
import { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Project } from '../../data/projects';

interface Props {
  projects: Project[];
  basePath?: string;
}

const categoryLabels: Record<string, string> = {
  appartement: 'Appartement',
  residence: 'Résidence',
  maison: 'Maison',
  'salle-de-bains': 'Salle de bains',
};

// Alternating clip-path directions for mosaic/puzzle slide-in
const clipDirections = [
  'inset(0 100% 0 0)',   // from left
  'inset(0 0 0 100%)',   // from right
  'inset(100% 0 0 0)',   // from bottom
  'inset(0 0 0 100%)',   // from right
  'inset(0 100% 0 0)',   // from left
  'inset(0 0 100% 0)',   // from top
  'inset(100% 0 0 0)',   // from bottom
  'inset(0 0 0 100%)',   // from right
];

/*
 * Pattern bento cyclique — 8 items = exactement 3 rangées × 4 colonnes = 12 cellules.
 * grid-flow-dense comble les trous → emboîtement puzzle parfait.
 */
const sizePattern = [
  { col: 'lg:col-span-2 lg:row-span-2' },   // 0: Hero (4 cellules)
  { col: '' },                                // 1: Standard
  { col: '' },                                // 2: Standard
  { col: '' },                                // 3: Standard
  { col: '' },                                // 4: Standard
  { col: 'lg:col-span-2' },                  // 5: Wide paysage
  { col: '' },                                // 6: Standard
  { col: '' },                                // 7: Standard
];

export default function ProjectGrid({ projects, basePath = '/projets' }: Props) {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.05 });

  // Filter projects by URL param ?type=renovation|construction
  const filteredProjects = useMemo(() => {
    if (typeof window === 'undefined') return projects;
    const params = new URLSearchParams(window.location.search);
    const typeFilter = params.get('type');
    if (typeFilter && (typeFilter === 'renovation' || typeFilter === 'construction')) {
      return projects.filter((p) => p.type === typeFilter);
    }
    return projects;
  }, [projects]);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] grid-flow-row-dense gap-3"
    >
      {filteredProjects.map((project, i) => {
        const size = sizePattern[i % sizePattern.length];
        return (
          <motion.a
            key={project.id}
            href={`${basePath}/${project.slug}`}
            initial={{ opacity: 0, clipPath: clipDirections[i % clipDirections.length] }}
            animate={isInView
              ? { opacity: 1, clipPath: 'inset(0 0 0 0)' }
              : { opacity: 0, clipPath: clipDirections[i % clipDirections.length] }
            }
            transition={{ duration: 1.2, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
            className={`group relative overflow-hidden cursor-pointer block ${size.col}`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
                loading="lazy"
              />

              {/* Gradient subtil permanent → overlay au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/40 transition-all duration-700" />

              {/* Hover overlay : nom + catégorie centrés */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6">
                <span className="text-[11px] font-['Inter'] font-medium uppercase tracking-[0.2em] text-[#C9A87C] mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {categoryLabels[project.category]}
                </span>
                <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-normal text-white mb-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
                <p className="text-sm font-light text-white/55">
                  {project.surface} m² · {project.location}
                </p>
              </div>

              {/* Label catégorie visible par défaut (disparaît au hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-xs font-['Inter'] font-medium text-white/80 uppercase tracking-[0.12em]">
                  {categoryLabels[project.category]}
                </span>
              </div>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
