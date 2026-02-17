/**
 * Animations GSAP — Minimalist architectural scroll-triggered animations
 * Signature: blur reveal (opacity + translateY + filter blur)
 * Targets Astro-rendered static HTML via data- attributes
 * Does NOT touch React islands (framer-motion handles those)
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ─────────────────────────────────────────────
// 1. SECTION REVEAL — fade-in + slide-up + blur
// ─────────────────────────────────────────────
function initSectionReveals() {
  // Individual reveal elements
  const revealElements = document.querySelectorAll('[data-reveal]');

  revealElements.forEach((el) => {
    const delay = parseFloat((el as HTMLElement).dataset.revealDelay || '0');

    gsap.fromTo(el,
      { opacity: 0, y: 30, filter: 'blur(4px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.4,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Staggered groups
  const staggerGroups = document.querySelectorAll('[data-reveal-stagger]');

  staggerGroups.forEach((group) => {
    const children = group.querySelectorAll('[data-reveal-child]');
    const staggerAmount = parseFloat((group as HTMLElement).dataset.revealStagger || '0.15');

    gsap.fromTo(children,
      { opacity: 0, y: 25, filter: 'blur(3px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        stagger: staggerAmount,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

// ─────────────────────────────────────────────
// 2. IMAGE PARALLAX — subtle translateY offset
// ─────────────────────────────────────────────
function initParallax() {
  // Skip parallax on mobile
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const parallaxImages = document.querySelectorAll('[data-parallax]');

  parallaxImages.forEach((img) => {
    const speed = parseFloat((img as HTMLElement).dataset.parallax || '0.15');

    gsap.to(img, {
      yPercent: -15 * (speed / 0.15),
      ease: 'none',
      scrollTrigger: {
        trigger: (img as HTMLElement).closest('section') || (img as HTMLElement).parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

// ─────────────────────────────────────────────
// 3. TEXT SPLIT — Word-by-word reveal with blur
// ─────────────────────────────────────────────
function splitTextIntoWords(element: HTMLElement): HTMLSpanElement[] {
  const wordSpans: HTMLSpanElement[] = [];

  // Walk child nodes to extract text and <br> elements
  const textParts: string[] = [];

  const childNodes = Array.from(element.childNodes);
  childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      textParts.push(node.textContent || '');
    } else if (node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).tagName === 'BR') {
      textParts.push('\n');
    }
  });

  const fullText = textParts.join('');
  const lines = fullText.split('\n');

  element.innerHTML = '';

  lines.forEach((line, lineIndex) => {
    const words = line.trim().split(/\s+/).filter(Boolean);

    words.forEach((word, i) => {
      const wrapper = document.createElement('span');
      wrapper.style.display = 'inline-block';
      wrapper.style.overflow = 'hidden';
      wrapper.style.verticalAlign = 'top';

      const inner = document.createElement('span');
      inner.textContent = word;
      inner.style.display = 'inline-block';

      wrapper.appendChild(inner);
      element.appendChild(wrapper);

      if (i < words.length - 1) {
        element.appendChild(document.createTextNode('\u00A0'));
      }

      wordSpans.push(inner);
    });

    // Re-add <br> between lines
    if (lineIndex < lines.length - 1) {
      element.appendChild(document.createElement('br'));
    }
  });

  return wordSpans;
}

function initTextSplit() {
  const splitElements = document.querySelectorAll('[data-split-words]');

  splitElements.forEach((el) => {
    const words = splitTextIntoWords(el as HTMLElement);

    gsap.fromTo(words,
      { y: '80%', opacity: 0, filter: 'blur(3px)' },
      {
        y: '0%',
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.8,
        stagger: 0.04,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

// ─────────────────────────────────────────────
// 4. HORIZONTAL LINE DRAW — Decorative lines animate in
// ─────────────────────────────────────────────
function initLineDraws() {
  const lines = document.querySelectorAll('[data-line-draw]');

  lines.forEach((line) => {
    gsap.fromTo(line,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: line,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

// ─────────────────────────────────────────────
// 5. CLIP-PATH IMAGE REVEALS — wipe-in animation
// ─────────────────────────────────────────────
function initClipReveals() {
  const clipElements = document.querySelectorAll('[data-clip-reveal]');

  clipElements.forEach((el) => {
    const direction = (el as HTMLElement).dataset.clipReveal || 'left';

    const clipFrom: Record<string, string> = {
      left: 'inset(0 100% 0 0)',
      right: 'inset(0 0 0 100%)',
      bottom: 'inset(100% 0 0 0)',
      top: 'inset(0 0 100% 0)',
    };

    gsap.fromTo(el,
      { clipPath: clipFrom[direction] || clipFrom.left },
      {
        clipPath: 'inset(0 0 0 0)',
        duration: 1.4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

// ─────────────────────────────────────────────
// 6. MOSAIC IMAGE REVEALS — puzzle slide-in from alternating directions
// ─────────────────────────────────────────────
function initMosaicReveals() {
  const clipFrom: Record<string, string> = {
    left: 'inset(0 100% 0 0)',
    right: 'inset(0 0 0 100%)',
    bottom: 'inset(100% 0 0 0)',
    top: 'inset(0 0 100% 0)',
  };

  // Alternating directions for the puzzle/mosaic feel
  const directions = ['left', 'right', 'bottom', 'right', 'left', 'top'];

  // Mosaic groups — children slide in from alternating directions with stagger
  const mosaicGroups = document.querySelectorAll('[data-mosaic]');

  mosaicGroups.forEach((group) => {
    const items = group.querySelectorAll('[data-mosaic-item]');

    items.forEach((item, i) => {
      const dir = directions[i % directions.length];

      gsap.fromTo(item,
        { clipPath: clipFrom[dir], opacity: 0.3 },
        {
          clipPath: 'inset(0 0 0 0)',
          opacity: 1,
          duration: 1.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: group,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.12,
        }
      );
    });
  });

  // Standalone slide-in images (full-bleed bands, individual images)
  const slideImages = document.querySelectorAll('[data-slide-in]');

  slideImages.forEach((el) => {
    const direction = (el as HTMLElement).dataset.slideIn || 'bottom';

    gsap.fromTo(el,
      { clipPath: clipFrom[direction] || clipFrom.bottom, opacity: 0.3 },
      {
        clipPath: 'inset(0 0 0 0)',
        opacity: 1,
        duration: 1.4,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

// ─────────────────────────────────────────────
// 7. MAGNETIC BUTTONS — subtle attraction on hover
// ─────────────────────────────────────────────
function initMagneticButtons() {
  // Skip on touch devices
  if ('ontouchstart' in window) return;

  const buttons = document.querySelectorAll('[data-magnetic]');

  buttons.forEach((btn) => {
    const el = btn as HTMLElement;

    el.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

// ─────────────────────────────────────────────
// 7. SECTION TITLE LINES — animated ::before width
// ─────────────────────────────────────────────
function initSectionTitleLines() {
  const titles = document.querySelectorAll('.section-title-line');

  titles.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => el.classList.add('is-visible'),
    });
  });
}

// ─────────────────────────────────────────────
// 8. VERTICAL SEPARATORS — animated scaleY
// ─────────────────────────────────────────────
function initVerticalSeparators() {
  const separators = document.querySelectorAll('.vertical-separator');

  separators.forEach((line) => {
    ScrollTrigger.create({
      trigger: line,
      start: 'top 85%',
      onEnter: () => line.classList.add('is-visible'),
    });
  });
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
function init() {
  if (prefersReducedMotion) {
    // Make everything visible immediately
    document.querySelectorAll('[data-reveal], [data-reveal-child]').forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'none';
      (el as HTMLElement).style.filter = 'none';
    });
    // Also reveal clip-path elements
    document.querySelectorAll('[data-clip-reveal]').forEach((el) => {
      (el as HTMLElement).style.clipPath = 'none';
    });
    // Also reveal mosaic/slide-in elements
    document.querySelectorAll('[data-mosaic-item], [data-slide-in]').forEach((el) => {
      (el as HTMLElement).style.clipPath = 'none';
      (el as HTMLElement).style.opacity = '1';
    });
    return;
  }

  initSectionReveals();
  initParallax();
  initTextSplit();
  initLineDraws();
  initClipReveals();
  initMosaicReveals();
  initMagneticButtons();
  initSectionTitleLines();
  initVerticalSeparators();

  // Refresh after setup to recalculate trigger positions
  ScrollTrigger.refresh();
}

function start() {
  // If page loader is still visible, wait for it to finish
  if (document.body.classList.contains('is-loading')) {
    window.addEventListener('loaderComplete', () => init(), { once: true });
  } else {
    init();
  }
}

if (document.readyState === 'complete') {
  start();
} else {
  window.addEventListener('load', start);
}

export {};
