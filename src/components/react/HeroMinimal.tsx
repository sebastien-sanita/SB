/**
 * HeroMinimal — Hero cinématique 100vh
 * Full-screen image with Ken Burns, overlay minimal
 * Style DN Architectes : logo en haut, definition en bas
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import strings from '@i18n/strings';
import type { Locale } from '@i18n/languages';

const heroImages = [
  '/images/hero/luxury-villa-riviera.jpg',
  '/images/hero/luxury-villa-pool.jpg',
  '/images/hero/luxury-villa-sunset.jpg',
];

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

interface Props {
  lang?: Locale;
}

export default function HeroMinimal({ lang = 'fr' }: Props) {
  const [current, setCurrent] = useState(0);
  const h = strings.hero;
  const gt = <K extends keyof typeof h>(key: K) => h[key][lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Ken Burns slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 2, ease: easeOutQuart },
            scale: { duration: 20, ease: 'linear' },
          }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[current]}
            alt="Architecture haut de gamme Côte d'Azur"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

      {/* Logo / nom — en haut (style DN Architectes) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: easeOutQuart }}
        className="absolute top-0 left-0 right-0 z-10 pt-28 md:pt-32 text-center"
      >
        <h1
          className="font-display font-normal text-white leading-[1] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
        >
          SB Design Riviera
        </h1>
      </motion.div>

      {/* Baseline / définition — en bas (style DN Architectes) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.0, ease: easeOutQuart }}
        className="absolute bottom-16 md:bottom-20 left-0 right-0 z-10 text-center"
      >
        <p className="font-heading text-[11px] md:text-[12px] font-medium text-white/60 uppercase tracking-[0.3em]">
          {gt('subtitle1')}
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <svg className="w-4 h-4 text-white/25" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>
    </section>
  );
}
