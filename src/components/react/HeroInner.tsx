/**
 * HeroInner — Dynamic Ken Burns hero for inner pages
 * Shorter than homepage hero (60vh), text at bottom,
 * crossfade slideshow with slow zoom like HeroMinimal.
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextMorph, { TextMorphGhost } from './TextMorph';
import Picture from '@components/react/Picture';

interface Props {
  images: string[];
  label: string;
  title: string;
  subtitle: string;
  titlePrefix?: string;
  titleMorphWords?: string[];
  /** Alt de l'image de fond. Repli : titre en texte brut + « — SB Design Riviera » (jamais vide). */
  imageAlt?: string;
}

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

export default function HeroInner({ images, label, title, subtitle, titlePrefix, titleMorphWords, imageAlt }: Props) {
  const [current, setCurrent] = useState(0);

  // Alt descriptif : fourni par la page, sinon dérivé du titre (balises retirées).
  const plainTitle = title
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const fallbackTitle = plainTitle || [titlePrefix, titleMorphWords?.[0]].filter(Boolean).join(' ');
  const alt = imageAlt?.trim() || (fallbackTitle ? `${fallbackTitle} — SB Design Riviera` : 'SB Design Riviera');

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full min-h-[max(50vh,400px)] lg:min-h-[max(60vh,400px)] overflow-hidden flex">
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
          <Picture
            src={images[current]}
            alt={alt}
            className="w-full h-full object-cover"
            sizes="100vw"
            loading="eager"
            decoding="async"
            fetchPriority={current === 0 ? 'high' : 'auto'}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Content at bottom — sous la bande du header (pt) ; le hero s'étire si le contenu déborde */}
      <div className="relative z-10 w-full flex items-end pt-[calc(var(--header-h)+24px)] pb-16 md:pb-24">
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
              <motion.div
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 0.15, ease: easeOutQuart }}
                className="grid font-display text-[clamp(56px,10vw,130px)] uppercase text-white leading-[1.05] tracking-[-0.04em] mb-6"
              >
                {/* Fantômes empilés dans la même cellule, HORS du h1 : le conteneur (donc le hero, dimensionné par
                    son contenu) garde la hauteur du mot qui prend le plus de lignes — la page
                    ne saute pas à chaque morph, à toutes les largeurs. */}
                {titleMorphWords.map((w) => (
                  <span key={w} aria-hidden="true" className="col-start-1 row-start-1 invisible">
                    <span className="font-['Playfair_Display'] font-light">{titlePrefix}</span>{' '}
                    <TextMorphGhost word={w} className="font-['Playfair_Display'] font-bold" />
                  </span>
                ))}
                {/* Le <h1> ne contient que la formule affichée. Il reprend les classes typographiques du
                    conteneur : la règle globale h1 (couleur, interlignage, approche) écraserait l'héritage. */}
                <h1 className="col-start-1 row-start-1 font-display text-[clamp(56px,10vw,130px)] uppercase text-white leading-[1.05] tracking-[-0.04em]">
                  <span className="font-['Playfair_Display'] font-light text-white/40">{titlePrefix}</span>{' '}
                  <TextMorph
                    words={titleMorphWords}
                    interval={4500}
                    className="font-['Playfair_Display'] font-bold"
                  />
                </h1>
              </motion.div>
            ) : (
              <motion.h1
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 0.15, ease: easeOutQuart }}
                className="font-display text-[clamp(56px,10vw,130px)] font-bold uppercase text-white leading-[1.05] tracking-[-0.04em] mb-6"
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
