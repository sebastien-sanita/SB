/**
 * SectionDivider — Trait vertical fin avec point animé
 * Le point accélère en début de course et ralentit progressivement
 * Boucle infinie pour créer une liaison visuelle entre sections
 */
import { motion } from 'framer-motion';

interface Props {
  height?: number;
  color?: string;
}

export default function SectionDivider({ height = 120, color = 'var(--color-accent-gold)' }: Props) {
  return (
    <div
      className="relative flex items-center justify-center mx-auto"
      style={{ width: '1px', height }}
    >
      {/* Ligne statique */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: color, opacity: 0.2 }}
      />

      {/* Point animé */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: 5,
          height: 5,
          backgroundColor: color,
          opacity: 0.6,
        }}
        animate={{
          top: [0, height - 5],
          opacity: [0, 0.8, 0.8, 0],
        }}
        transition={{
          duration: 3,
          ease: [0.4, 0, 0.2, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
          times: [0, 1, 1, 1],
          top: {
            duration: 3,
            ease: [0.4, 0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          },
          opacity: {
            duration: 3,
            times: [0, 0.1, 0.85, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          },
        }}
      />
    </div>
  );
}
