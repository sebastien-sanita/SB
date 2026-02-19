/**
 * ProjectMarquee — Bento horizontal infini d'images projet
 * Défile lentement en continu, accélère/ralentit selon la vitesse du scroll
 * Rubans textuels en haut/bas défilant en sens inverse
 */
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring, useAnimationFrame } from 'framer-motion';

interface Props {
  images: string[];
  title: string;
  keywords?: string[];
}

export default function ProjectMarquee({ images, title, keywords = [] }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [ribbonWidth, setRibbonWidth] = useState(0);
  const baseSpeed = 0.3; // px per frame
  const ribbonSpeed = 0.15; // rubans plus lents

  // Scroll velocity detection
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 300 });
  const velocityFactor = useTransform(smoothVelocity, [-3000, 0, 3000], [4, 1, 4]);

  // Position tracking — images (left)
  const xRaw = useRef(0);
  const [x, setX] = useState(0);

  // Position tracking — ribbons (right, opposite direction)
  const ribbonRaw = useRef(0);
  const [ribbonX, setRibbonX] = useState(0);

  // Measure widths
  useEffect(() => {
    if (!containerRef.current) return;
    const track = containerRef.current.querySelector('[data-track]') as HTMLElement;
    if (track) {
      setTrackWidth(track.scrollWidth / 2);
    }
    const ribbon = containerRef.current.querySelector('[data-ribbon]') as HTMLElement;
    if (ribbon) {
      setRibbonWidth(ribbon.scrollWidth / 2);
    }
  }, [images, keywords]);

  // Animation loop
  useAnimationFrame(() => {
    const factor = velocityFactor.get();

    // Images — scroll left
    if (trackWidth > 0) {
      xRaw.current -= baseSpeed * factor;
      if (Math.abs(xRaw.current) >= trackWidth) {
        xRaw.current += trackWidth;
      }
      setX(xRaw.current);
    }

    // Ribbons — scroll right (opposite)
    if (ribbonWidth > 0) {
      ribbonRaw.current += ribbonSpeed * factor;
      if (ribbonRaw.current >= ribbonWidth) {
        ribbonRaw.current -= ribbonWidth;
      }
      setRibbonX(ribbonRaw.current);
    }
  });

  const imageSet = images.map((img, i) => (
    <div
      key={i}
      className="shrink-0 w-[520px] h-[340px] lg:w-[620px] lg:h-[400px] overflow-hidden"
    >
      <img
        src={img}
        alt={`${title} — ${i + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  ));

  // Ribbon text — keywords joined with diamond separators
  const ribbonText = keywords.length > 0
    ? keywords.join('  ◆  ')
    : title;
  const ribbonContent = `${ribbonText}  ◆  `;

  const ribbonSet = (
    <>
      <span>{ribbonContent}</span>
      <span>{ribbonContent}</span>
      <span>{ribbonContent}</span>
      <span>{ribbonContent}</span>
    </>
  );

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      {/* Ruban supérieur */}
      <div className="overflow-hidden py-3">
        <motion.div
          data-ribbon
          className="flex whitespace-nowrap font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-dark/20"
          style={{ x: ribbonX }}
        >
          {ribbonSet}
        </motion.div>
      </div>

      {/* Images */}
      <motion.div
        data-track
        className="flex gap-[3px] items-center"
        style={{ x }}
      >
        {imageSet}
        {imageSet}
      </motion.div>

      {/* Ruban inférieur */}
      <div className="overflow-hidden py-3">
        <motion.div
          className="flex whitespace-nowrap font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-dark/20"
          style={{ x: -ribbonX }}
        >
          {ribbonSet}
        </motion.div>
      </div>
    </div>
  );
}
