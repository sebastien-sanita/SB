/**
 * TextMorph — Morphing text with character-by-character blur animation
 * Each character blurs out individually, then the new word blurs in
 * letter by letter for an elegant, fluid transition.
 * Le retour à la ligne est possible ENTRE les mots (jamais à l'intérieur d'un mot).
 * SEO / accessibilité : chaque lettre est un <span> *inline* (pas inline-block)
 * et n'est pas translatée en y. Des boîtes inline-block par lettre étaient lues
 * « H i s t o i r e » par les extracteurs de texte (Google, lecteurs d'écran) :
 * le H1 des pages perdait son mot principal. L'effet visuel (fondu + flou lettre
 * à lettre) est conservé ; seul le léger décalage vertical disparaît.
 */
import { useState, useEffect, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  words: string[];
  interval?: number;
  className?: string;
}

export default function TextMorph({ words, interval = 4000, className }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  const word = words[index];
  const parts = word.split(' ');
  // Index de départ de chaque mot : i reste continu sur l'ensemble des lettres
  const starts = parts.map((_, wi) => parts.slice(0, wi).reduce((n, p) => n + p.length + 1, 0));

  return (
    <span className={className || ''}>
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          className="inline"
        >
          {parts.map((part, wi) => (
            <Fragment key={`${word}-w${wi}`}>
              {/* Espace = nœud texte entre deux inline-block : opportunité de césure */}
              {wi > 0 ? ' ' : null}
              <span className="inline-block whitespace-nowrap">
                {part.split('').map((char, ci) => {
                  const i = starts[wi] + ci;
                  return (
                    <motion.span
                      key={`${word}-${i}`}
                      className="inline"
                      initial={{ opacity: 0, filter: 'blur(12px)' }}
                      animate={{
                        opacity: 1,
                        filter: 'blur(0px)',
                        transition: {
                          duration: 0.35,
                          delay: i * 0.035,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        },
                      }}
                      exit={{
                        opacity: 0,
                        filter: 'blur(12px)',
                        transition: {
                          duration: 0.25,
                          delay: i * 0.02,
                          ease: [0.55, 0, 1, 0.45],
                        },
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            </Fragment>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/**
 * TextMorphGhost — copie statique d'un mot avec exactement la même structure de
 * boîtes que TextMorph (mots inline-block insécables, lettres inline-block, donc
 * même largeur : le crénage est cassé de la même façon). Sert à réserver la place
 * du rendu le plus haut pour que le conteneur ne change pas de hauteur au fil des
 * morphs (cf. HeroInner). À rendre invisible (visibility) et aria-hidden par l'appelant.
 */
export function TextMorphGhost({ word, className }: { word: string; className?: string }) {
  return (
    <span className={className || ''}>
      <span className="inline">
        {word.split(' ').map((part, wi) => (
          <Fragment key={wi}>
            {wi > 0 ? ' ' : null}
            <span className="inline-block whitespace-nowrap">
              {part.split('').map((char, ci) => (
                <span key={ci} className="inline">{char}</span>
              ))}
            </span>
          </Fragment>
        ))}
      </span>
    </span>
  );
}
