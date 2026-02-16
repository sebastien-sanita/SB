/**
 * TestimonialsSlider — Section 06 (Ayocin × Aker)
 * Cards épurées, guillemets décoratifs, étoiles dorées,
 * transitions lentes (500ms),  */
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Un travail d'exception. Notre appartement est devenu un véritable écrin de luxe. L'attention portée aux détails est remarquable.",
    name: 'Marie D.',
    location: 'Paris 16e',
  },
  {
    quote:
      "Professionnalisme exemplaire et résultat au-delà de nos espérances. Une équipe d'une rare élégance dans l'exécution.",
    name: 'Laurent M.',
    location: 'Neuilly-sur-Seine',
  },
  {
    quote:
      "Chaque détail a été pensé avec soin. L'équipe a su traduire notre vision en un espace qui nous ressemble profondément.",
    name: 'Sophie L.',
    location: 'Boulogne-Billancourt',
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#C9A87C]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white rounded-2xl p-8 lg:p-10 border border-[#E8E8E6] hover:shadow-lg transition-shadow duration-500"
    >
      {/* Guillemet décoratif */}
      <span className="block font-display text-5xl text-[#C9A87C]/30 leading-none mb-4">
        "
      </span>
      <Stars />
      <blockquote className="font-body text-base font-light text-[#1A1A1A] leading-[1.75] mb-8">
        {t.quote}
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#F5EFE7] flex items-center justify-center">
          <span className="font-heading text-sm font-semibold text-[#8B7355]">
            {t.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-heading text-sm font-medium text-[#1A1A1A]">{t.name}</p>
          <p className="font-body text-xs text-[#6B6B6B]">{t.location}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div>
      {/* Desktop: 3 cards */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} t={t} index={i} />
        ))}
      </div>

      {/* Mobile: slider */}
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white rounded-2xl p-8 border border-[#E8E8E6]"
          >
            <span className="block font-display text-5xl text-[#C9A87C]/30 leading-none mb-4">
              "
            </span>
            <Stars />
            <blockquote className="font-body text-base font-light text-[#1A1A1A] leading-[1.75] mb-8">
              {testimonials[current].quote}
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F5EFE7] flex items-center justify-center">
                <span className="font-heading text-sm font-semibold text-[#8B7355]">
                  {testimonials[current].name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-heading text-sm font-medium text-[#1A1A1A]">
                  {testimonials[current].name}
                </p>
                <p className="font-body text-xs text-[#6B6B6B]">
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-3 justify-center mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 transition-all duration-500 ${
                i === current
                  ? 'bg-[#C9A87C] w-8'
                  : 'bg-[#E8E8E6] w-2 hover:bg-[#C9A87C]/50'
              }`}
              aria-label={`Témoignage ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
