/**
 * TextMorph — Morphing text with character-by-character blur animation
 * Each character blurs out individually, then the new word blurs in
 * letter by letter for an elegant, fluid transition.
 */
import { useState, useEffect } from 'react';
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

  return (
    <span className={`inline-block ${className || ''}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="inline-flex"
        >
          {words[index].split('').map((char, i) => (
            <motion.span
              key={`${words[index]}-${i}`}
              className="inline-block"
              style={char === ' ' ? { width: '0.3em' } : undefined}
              initial={{ opacity: 0, filter: 'blur(12px)', y: 8 }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                transition: {
                  duration: 0.35,
                  delay: i * 0.035,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              }}
              exit={{
                opacity: 0,
                filter: 'blur(12px)',
                y: -8,
                transition: {
                  duration: 0.25,
                  delay: i * 0.02,
                  ease: [0.55, 0, 1, 0.45],
                },
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
