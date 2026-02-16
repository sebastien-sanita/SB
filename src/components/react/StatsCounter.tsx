/**
 * StatsCounter — Section 05 (Ayocin × Aker)
 * Compteurs animés au scroll, couleurs accent-gold,
 * typographie Playfair Display pour les chiffres
 */
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 15, suffix: '+', label: "Années d'expérience" },
  { value: 200, suffix: '+', label: 'Projets réalisés' },
  { value: 98, suffix: '%', label: 'Clients satisfaits' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));

      if (step >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <div className="text-5xl md:text-7xl font-normal text-accent-gold font-display mb-4 tracking-tight">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="w-8 h-px bg-accent-gold/40 mx-auto mb-4" />
          <p className="text-base font-light text-[#6B6B6B] font-body">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
