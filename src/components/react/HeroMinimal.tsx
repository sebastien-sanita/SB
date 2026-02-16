/**
 * HeroMinimal — KS ART-style 100vh hero
 * Full-screen image with Ken Burns (slow zoom), dark overlay,
 * centered text with large letter-spacing, uppercase.
 * Multiple images cycling with slow crossfade + zoom.
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90',
];

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

export default function HeroMinimal() {
  const [current, setCurrent] = useState(0);

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
            alt="Interieur luxueux"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/65" />

      {/* Centered content — KS ART style */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Small label */}
          <motion.span
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.5, ease: easeOutQuart }}
            className="block font-heading text-xs font-medium text-white/60 uppercase tracking-[0.3em] mb-8"
          >
            Studio Bisciglia Design
          </motion.span>

          {/* Main title — uppercase, massive letter-spacing */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(16px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, delay: 0.2, ease: easeOutQuart }}
            className="font-display text-[clamp(36px,7vw,80px)] font-normal text-white uppercase tracking-[0.15em] md:tracking-[0.3em] leading-[1.4] mb-8"
          >
            Creer des espaces
            <br />
            qui inspirent
          </motion.h1>

          {/* Thin gold line separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: easeOutQuart }}
            className="w-16 h-px bg-[#C9A87C] mx-auto mb-8 origin-center"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.6, ease: easeOutQuart }}
            className="font-body text-base md:text-lg font-light text-white/70 max-w-lg mx-auto mb-12 leading-[1.8] tracking-wide"
          >
            Renovation d'exception et architecture d'interieur a Lyon depuis plus de 35 ans.
          </motion.p>

          {/* CTAs — square, minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: easeOutQuart }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/projets"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#C9A87C] text-white font-heading text-sm font-medium uppercase tracking-[0.15em] hover:bg-[#B8976B] transition-colors duration-500"
            >
              Decouvrir
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white font-heading text-sm font-medium uppercase tracking-[0.15em] hover:bg-white/10 transition-all duration-500"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — minimal line */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-px h-12 bg-white/30" />
      </motion.div>
    </section>
  );
}
