import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const constructionImages = [
  { src: '/images/projets/bormes-les-mimosas-17.jpg', label: 'Construction patio — Bormes-les-Mimosas' },
  { src: '/images/projets/pramousquier-27.jpg', label: 'Construction piscine — Pramousquier' },
  { src: '/images/projets/aiguebelle-22.jpeg', label: 'Piscine en travaux — Aiguebelle' },
  { src: '/images/projets/bormes-les-mimosas-19.jpg', label: 'Gros œuvre RDC — Bormes-les-Mimosas' },
  { src: '/images/projets/pramousquier-25.jpg', label: 'Construction — Pramousquier' },
  { src: '/images/projets/aiguebelle-23.jpeg', label: 'Extérieur en travaux — Aiguebelle' },
  { src: '/images/projets/pramousquier-28.jpg', label: 'Construction terrasse — Pramousquier' },
  { src: '/images/projets/bormes-les-mimosas-18.jpg', label: 'Construction paroi — Bormes-les-Mimosas' },
  { src: '/images/projets/pramousquier-26.jpg', label: 'Construction pierre — Pramousquier' },
];

export default function ConstructionShowcase() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setVisible(params.get('type') === 'construction');
  }, []);

  if (!visible) return null;

  return (
    <section className="py-16 md:py-24 bg-[var(--color-warm)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-12 md:mb-16">
          <div className="w-10 h-px bg-accent-gold/40 mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-primary-dark mb-4">
            Chantiers <span className="font-heading font-light">en cours</span>
          </h2>
          <p className="font-body text-base font-light text-[var(--color-text-light)] max-w-2xl leading-[1.8]">
            Un aperçu du savoir-faire en gros œuvre : fondations, structures, finitions en pierre — les étapes invisibles qui construisent l'exception.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {constructionImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[11px] font-['Inter'] font-medium text-white uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 block">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
