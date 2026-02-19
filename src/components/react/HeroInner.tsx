/**
 * HeroInner — Dynamic Ken Burns hero for inner pages
 * Shorter than homepage hero (60vh), text at bottom,
 * crossfade slideshow with slow zoom like HeroMinimal.
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextMorph from './TextMorph';

interface Props {
  images: string[];
  label: string;
  title: string;
  subtitle: string;
  titlePrefix?: string;
  titleMorphWords?: string[];
}

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

export default function HeroInner({ images, label, title, subtitle, titlePrefix, titleMorphWords }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[50vh] min-h-[400px] lg:h-[60vh] overflow-hidden">
      {/* Ken Burns slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5, ease: easeOutQuart },
            scale: { duration: 15, ease: 'linear' },
          }}
          className="absolute inset-0"
        >
          <img
            src={images[current]}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Content at bottom */}
      <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="relative max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOutQuart }}
              className="block font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-6"
            >
              {label}
            </motion.span>
            {titlePrefix && titleMorphWords ? (
              <motion.h1
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 0.15, ease: easeOutQuart }}
                className="font-display text-[clamp(52px,8vw,104px)] font-bold uppercase text-white leading-[1.1] tracking-[-0.01em] mb-6"
              >
                <span className="font-['Playfair_Display']">{titlePrefix}</span>{' '}
                <TextMorph
                  words={titleMorphWords}
                  interval={4500}
                  className="font-['Playfair_Display'] font-bold"
                />
              </motion.h1>
            ) : (
              <motion.h1
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 0.15, ease: easeOutQuart }}
                className="font-display text-[clamp(52px,8vw,104px)] font-bold uppercase text-white leading-[1.1] tracking-[-0.01em] mb-6"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.0, delay: 0.45, ease: easeOutQuart }}
              className="font-body text-lg font-light text-white/70 max-w-xl leading-[1.75]"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
