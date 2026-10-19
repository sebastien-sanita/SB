/**
 * TextMorph — Morphing text with character-by-character blur animation
 * Each character blurs out individually, then the new word blurs in
 * letter by letter for an elegant, fluid transition.
 * Le retour à la ligne est possible ENTRE les mots (jamais à l'intérieur d'un mot).
 * SEO / accessibilité : le premier mot est rendu comme UN seul nœud texte, HTML
 * serveur compris ; le découpage lettre à lettre n'intervient qu'au premier
 * changement de mot. Un mot découpé en une balise par lettre était lu
 * « H i s t o i r e » par les outils qui extraient le texte en séparant les
 * balises : le H1 perdait son mot principal. Les lettres animées sont des
 * <span> inline, sans translation verticale.
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
  // false tant que le premier mot n'a pas changé : il est alors rendu en texte brut.
  const [cycled, setCycled] = useState(false);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(() => {
      setCycled(true);
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  const word = words[index];
  // Découpe par mot, avec un index de lettre continu sur l'ensemble du libellé
  // (délai i * 0.035 identique à l'animation d'origine).
  const parts = word.split(' ').reduce<{ text: string; offset: number }[]>((acc, text) => {
    const prev = acc[acc.length - 1];
    acc.push({ text, offset: prev ? prev.offset + prev.text.length + 1 : 0 });
    return acc;
  }, []);

  return (
    <span className={className || ''}>
      <AnimatePresence mode="wait">
        {!cycled ? (
          // Premier mot : texte brut, visible sans JS et lu d'un seul tenant.
          <motion.span
            key={`static-${word}`}
            className="inline"
            exit={{
              opacity: 0,
              filter: 'blur(12px)',
              transition: { duration: 0.3, ease: [0.55, 0, 1, 0.45] },
            }}
          >
            {word}
          </motion.span>
        ) : (
          <motion.span key={word} className="inline">
            {parts.map((part, wi) => (
              <Fragment key={`${word}-w${wi}`}>
                {/* Espace = nœud texte entre deux mots insécables : seule opportunité de césure */}
                {wi > 0 ? ' ' : null}
                <span className="inline-block whitespace-nowrap">
                  {part.text.split('').map((char, ci) => {
                    const i = part.offset + ci;
                    return (
                      <motion.span
                        key={`${word}-${i}`}
                        className="inline"
                        initial={{ opacity: 0, filter: 'blur(12px)' }}
                        animate={{
                          opacity: 1,
                          filter: 'blur(0px)',
                          transition: { duration: 0.35, delay: i * 0.035, ease: [0.25, 0.46, 0.45, 0.94] },
                        }}
                        exit={{
                          opacity: 0,
                          filter: 'blur(12px)',
                          transition: { duration: 0.25, delay: i * 0.02, ease: [0.55, 0, 1, 0.45] },
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
        )}
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
