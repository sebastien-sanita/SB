/**
 * PortfolioFilters — Pills de filtrage (Ayocin × Aker)
 * Pills rounded-full, accent-gold active, transitions 500ms
 */
import { useState } from 'react';

interface Filters {
  category: string;
  style: string;
}

interface Props {
  onFilterChange: (filters: Filters) => void;
  resultCount: number;
}

const categories = [
  { value: 'all', label: 'Tous' },
  { value: 'appartement', label: 'Appartement' },
  { value: 'residence', label: 'Résidence' },
  { value: 'maison', label: 'Maison' },
];

const styles = [
  { value: 'all', label: 'Tous' },
  { value: 'moderne', label: 'Moderne' },
  { value: 'classique', label: 'Classique' },
  { value: 'contemporain', label: 'Contemporain' },
];

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 text-sm font-heading font-medium transition-all duration-500 border ${
        active
          ? 'bg-[#C9A87C] text-white border-[#C9A87C]'
          : 'bg-white text-[#1A1A1A] border-[#E8E8E6] hover:border-[#C9A87C]'
      }`}
    >
      {children}
    </button>
  );
}

export default function PortfolioFilters({ onFilterChange, resultCount }: Props) {
  const [filters, setFilters] = useState<Filters>({ category: 'all', style: 'all' });

  function update(key: keyof Filters, value: string) {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onFilterChange(next);
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-heading font-semibold text-[#8B7355] uppercase tracking-[0.15em] mb-4">
          Type de projet
        </p>
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <Pill key={c.value} active={filters.category === c.value} onClick={() => update('category', c.value)}>
              {c.label}
            </Pill>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-heading font-semibold text-[#8B7355] uppercase tracking-[0.15em] mb-4">
          Style
        </p>
        <div className="flex flex-wrap gap-3">
          {styles.map((s) => (
            <Pill key={s.value} active={filters.style === s.value} onClick={() => update('style', s.value)}>
              {s.label}
            </Pill>
          ))}
        </div>
      </div>

      <p className="text-sm font-body font-light text-[#6B6B6B] pt-2">
        {resultCount} projet{resultCount > 1 ? 's' : ''} trouvé{resultCount > 1 ? 's' : ''}
      </p>
    </div>
  );
}
