/**
 * Page Transition — Logo-based entry/exit animation
 * Entry: logo visible → bar fills → curtain slides up → page revealed
 * Exit: curtain slides down → logo appears → navigate
 * Creates visual continuity between pages via the sbdesign/riviera logo
 */
import { gsap } from 'gsap';

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initPageLoader() {
  const loader = document.getElementById('page-loader');
  const loaderLogo = document.getElementById('page-loader-logo');
  const loaderBar = document.getElementById('page-loader-bar');

  if (!loader || !loaderLogo || !loaderBar) return;

  if (REDUCED_MOTION) {
    loader.style.display = 'none';
    document.body.classList.remove('is-loading');
    window.dispatchEvent(new CustomEvent('loaderComplete'));
    initPageExitTransition(loader, loaderLogo, loaderBar);
    return;
  }

  // Reset state for entry
  gsap.set(loader, { yPercent: 0, display: 'flex' });
  gsap.set(loaderLogo, { opacity: 1, y: 0 });
  gsap.set(loaderBar, { scaleX: 0, opacity: 1 });

  const tl = gsap.timeline({
    onComplete: () => {
      loader.style.display = 'none';
      document.body.classList.remove('is-loading');
      window.dispatchEvent(new CustomEvent('loaderComplete'));
    },
  });

  tl
    // Bar fills left to right
    .to(loaderBar, {
      scaleX: 1,
      duration: 0.7,
      ease: 'power2.inOut',
    })
    // Logo + bar fade
    .to([loaderLogo, loaderBar], {
      opacity: 0,
      y: -15,
      duration: 0.35,
      ease: 'power2.in',
    }, '-=0.15')
    // Curtain slides up
    .to(loader, {
      yPercent: -100,
      duration: 0.7,
      ease: 'power3.inOut',
    }, '-=0.1');

  // Setup exit transitions after entry completes
  tl.eventCallback('onComplete', () => {
    loader.style.display = 'none';
    document.body.classList.remove('is-loading');
    window.dispatchEvent(new CustomEvent('loaderComplete'));
    initPageExitTransition(loader, loaderLogo, loaderBar);
  });
}

function initPageExitTransition(
  loader: HTMLElement,
  loaderLogo: HTMLElement,
  loaderBar: HTMLElement,
) {
  document.addEventListener('click', (e) => {
    const anchor = (e.target as HTMLElement).closest('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href) return;

    // Skip external links, anchors, new tabs, special protocols
    if (
      href.startsWith('#') ||
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      anchor.target === '_blank' ||
      anchor.hasAttribute('download') ||
      e.ctrlKey || e.metaKey || e.shiftKey
    ) return;

    e.preventDefault();

    if (REDUCED_MOTION) {
      window.location.href = href;
      return;
    }

    // Exit animation: curtain down → logo appears → navigate
    gsap.set(loader, { yPercent: 100, display: 'flex' });
    gsap.set(loaderLogo, { opacity: 0, y: 15 });
    gsap.set(loaderBar, { scaleX: 0, opacity: 1 });

    const exitTl = gsap.timeline({
      onComplete: () => {
        window.location.href = href;
      },
    });

    exitTl
      // Curtain slides up from bottom
      .to(loader, {
        yPercent: 0,
        duration: 0.6,
        ease: 'power3.inOut',
      })
      // Logo fades in
      .to(loaderLogo, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: 'power2.out',
      }, '-=0.2')
      // Bar starts filling (continues on next page)
      .to(loaderBar, {
        scaleX: 0.4,
        duration: 0.3,
        ease: 'power1.inOut',
      }, '-=0.1');
  });
}

// Run immediately
initPageLoader();

export {};
