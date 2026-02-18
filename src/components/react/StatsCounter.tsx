/**
 * StatsCounter — Section 05 (Métriques animées)
 * 4 compteurs animés au scroll, grid décalé artistique,
 * typographie Playfair Display pour les chiffres, couleur or champagne
 */
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import strings from '@i18n/strings';
import type { Locale } from '@i18n/languages';

interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel?: string;
}

interface Props {
  lang?: Locale;
}

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix?: string; suffix: string }) {
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
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsCounter({ lang = 'fr' }: Props) {
  const s = strings.stats;

  const stats: Stat[] = [
    { value: 15, suffix: '+', label: s.stat1Label[lang] },
    { value: 200, suffix: '+', label: s.stat2Label[lang] },
    { value: 98, suffix: '%', label: s.stat3Label[lang] },
    { value: 35, prefix: '+', suffix: '%', label: s.stat4Label[lang], sublabel: s.stat4Sublabel[lang] },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`text-center ${i % 2 === 1 ? 'md:mt-12' : ''}`}
        >
          <div
            className="font-display font-light text-accent-gold mb-4 tracking-tight leading-none"
            style={{ fontSize: 'clamp(48px, 8vw, 100px)' }}
          >
            <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </div>
          <div className="w-8 h-px bg-accent-gold/40 mx-auto mb-4" />
          <p className="text-sm md:text-base font-light text-[#6B6B6B] font-body">{stat.label}</p>
          {stat.sublabel && (
            <p className="text-xs font-light text-[#6B6B6B]/60 font-body mt-1 italic">{stat.sublabel}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
