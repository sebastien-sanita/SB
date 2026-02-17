/**
 * Page Loader — Aker-style entry animation
 * Gold bar fills → logo fades → curtain slides up
 */
import { gsap } from 'gsap';

function initPageLoader() {
  const loader = document.getElementById('page-loader');
  const loaderLogo = document.getElementById('page-loader-logo');
  const loaderBar = document.getElementById('page-loader-bar');

  if (!loader || !loaderLogo || !loaderBar) return;

  // Skip animation if reduced motion preferred
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    loader.style.display = 'none';
    document.body.classList.remove('is-loading');
    window.dispatchEvent(new CustomEvent('loaderComplete'));
    return;
  }

  const tl = gsap.timeline({
    onComplete: () => {
      loader.style.display = 'none';
      document.body.classList.remove('is-loading');
      window.dispatchEvent(new CustomEvent('loaderComplete'));
    },
  });

  tl
    // Gold bar fills left to right
    .to(loaderBar, {
      scaleX: 1,
      duration: 0.8,
      ease: 'power2.inOut',
    })
    // Logo fades up and out
    .to(loaderLogo, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: 'power2.in',
    }, '-=0.2')
    // Bar fades
    .to(loaderBar, {
      opacity: 0,
      duration: 0.3,
    }, '-=0.2')
    // Curtain slides up
    .to(loader, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power3.inOut',
    }, '-=0.1');
}

// Run immediately
initPageLoader();

export {};
