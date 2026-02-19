/**
 * ProjectMarquee — Bento horizontal infini d'images projet
 * Défile lentement en continu, accélère/ralentit selon la vitesse du scroll
 */
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring, useAnimationFrame } from 'framer-motion';

interface Props {
  images: string[];
  title: string;
}

export default function ProjectMarquee({ images, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const baseSpeed = 0.3; // px per frame

  // Scroll velocity detection
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 300 });
  const velocityFactor = useTransform(smoothVelocity, [-3000, 0, 3000], [4, 1, 4]);

  // Position tracking
  const xRaw = useRef(0);
  const [x, setX] = useState(0);

  // Measure single set width
  useEffect(() => {
    if (!containerRef.current) return;
    const track = containerRef.current.querySelector('[data-track]') as HTMLElement;
    if (track) {
      setTrackWidth(track.scrollWidth / 2);
    }
  }, [images]);

  // Animation loop
  useAnimationFrame(() => {
    if (trackWidth === 0) return;
    const factor = velocityFactor.get();
    xRaw.current -= baseSpeed * factor;

    // Reset seamlessly when one full set has scrolled
    if (Math.abs(xRaw.current) >= trackWidth) {
      xRaw.current += trackWidth;
    }

    setX(xRaw.current);
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

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <motion.div
        data-track
        className="flex gap-[3px] items-center"
        style={{ x }}
      >
        {imageSet}
        {imageSet}
      </motion.div>
    </div>
  );
}
