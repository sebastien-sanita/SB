/**
 * HeroVideo — Hero cinématique plein écran (Ayocin × Aker)
 * Image background avec zoom lent (simule vidéo), overlay gradient,
 * titre Playfair animé, 2 CTAs pill, scroll indicator bounce
 */
import { motion } from 'framer-motion';

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image avec zoom lent cinématique */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: 'linear' }}
        className="absolute inset-0"
      >
        <img
          src="/images/expertise/villa-riviera-aerial.jpg"
          alt="Intérieur luxueux avec lumière naturelle"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Overlay gradient — Ayocin subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Titre — Playfair Display, taille hero */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-[clamp(48px,10vw,120px)] font-normal uppercase leading-[1.05] tracking-[-0.02em] text-white mb-6"
          >
            Créer des espaces
            <br />
            qui inspirent
          </motion.h1>

          {/* Sous-titre — Inter light */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="font-body text-lg md:text-xl font-light text-white/85 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Rénovation d'exception pour résidences de prestige.
            <br className="hidden md:block" />
            Chaque détail est pensé pour sublimer votre art de vivre.
          </motion.p>

          {/* CTAs — Aker pill shape */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/projets"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#C9A87C] text-white font-heading text-[15px] font-medium hover:bg-[#B8976B] transition-colors duration-500"
            >
              Découvrir nos projets
            </a>
            <a
              href="/expertise"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/40 text-white font-heading text-[15px] font-medium hover:bg-white/10 transition-all duration-500"
            >
              Notre expertise
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — bounce infini */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs font-heading uppercase tracking-[0.15em]">
          Scroll
        </span>
        <svg
          className="w-5 h-5 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
