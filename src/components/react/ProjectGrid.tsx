/**
 * ProjectGrid — Grille portfolio editorial (Editorial Luxe)
 * Tailles variees (hero, portrait, standard, ultra-wide),
 * hover overlay RS.D-style (nom + categorie centres)
 */
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../data/projects';
import PortfolioFilters from './PortfolioFilters';

interface Props {
  projects: Project[];
}

const categoryLabels: Record<string, string> = {
  appartement: 'Appartement',
  residence: 'Residence',
  maison: 'Maison',
};

const styleLabels: Record<string, string> = {
  moderne: 'Moderne',
  classique: 'Classique',
  contemporain: 'Contemporain',
};

/* Pattern cyclique de tailles pour varier la grille — formats mixtes */
const sizePattern = [
  { colSpan: 'md:col-span-2', aspect: 'aspect-[16/10]' },   // Wide hero
  { colSpan: '', aspect: 'aspect-[2/3]' },                    // Tall portrait
  { colSpan: '', aspect: 'aspect-[4/3]' },                    // Standard landscape
  { colSpan: 'md:col-span-2', aspect: 'aspect-[21/9]' },     // Ultra-wide panoramic
  { colSpan: '', aspect: 'aspect-[3/4]' },                    // Portrait
  { colSpan: '', aspect: 'aspect-[1/1]' },                    // Square
  { colSpan: 'md:col-span-2', aspect: 'aspect-[16/10]' },    // Wide landscape
  { colSpan: '', aspect: 'aspect-[2/3]' },                    // Tall portrait
];

export default function ProjectGrid({ projects }: Props) {
  const [filters, setFilters] = useState({ category: 'all', style: 'all' });

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const catMatch = filters.category === 'all' || p.category === filters.category;
      const styleMatch = filters.style === 'all' || p.style === filters.style;
      return catMatch && styleMatch;
    });
  }, [projects, filters]);

  return (
    <div>
      <div className="mb-16">
        <PortfolioFilters onFilterChange={setFilters} resultCount={filtered.length} />
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const size = sizePattern[i % sizePattern.length];
            return (
              <motion.a
                key={project.id}
                href={`/projets/${project.slug}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`group relative overflow-hidden cursor-pointer block ${size.colSpan}`}
              >
                <div className={`${size.aspect} relative overflow-hidden`}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.08]"
                    loading="lazy"
                  />

                  {/* Gradient subtil permanent → overlay au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/40 transition-all duration-700" />

                  {/* Hover overlay RS.D-style : nom + categorie centres */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6">
                    <span className="text-[11px] font-['Inter'] font-medium uppercase tracking-[0.2em] text-[#C9A87C] mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      {categoryLabels[project.category]} · {styleLabels[project.style]}
                    </span>
                    <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-normal text-white mb-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {project.title}
                    </h3>
                    <p className="text-sm font-light text-white/55">
                      {project.surface} m² · {project.location}
                    </p>
                  </div>

                  {/* Label categorie visible par defaut (disparait au hover) */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="text-xs font-['Inter'] font-medium text-white/80 uppercase tracking-[0.12em]">
                      {categoryLabels[project.category]}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="text-lg font-light text-[#6B6B6B]">
            Aucun projet ne correspond a ces criteres.
          </p>
          <button
            onClick={() => setFilters({ category: 'all', style: 'all' })}
            className="mt-4 text-[#C9A87C] font-medium hover:text-[#8B7355] transition-colors duration-300"
          >
            Reinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
}
