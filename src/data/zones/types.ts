/**
 * Pages zones (Nice, golfe de Saint-Tropez, Var) — compléments de contenu
 * rendus par src/components/sections/ZoneExtras.astro : méthode, calendrier
 * saisonnier, FAQ (→ schema FAQPage) et maillage vers les pages communes.
 * L’intro « Réalisations » est rendue directement par chaque page zone.
 */
import type { Locale } from '@i18n/languages';

export interface ZoneExtrasContent {
  /** Paragraphe d’introduction de la section « Réalisations » (faits issus de src/data/projects.ts). */
  realisationsIntro: string;
  methode: { title1: string; title2: string; intro: string; steps: { title: string; text: string }[] };
  /** Phasage saisonnier, sans durée chiffrée. */
  calendrier: {
    title1: string;
    title2: string;
    intro: string;
    phases: { saison: string; title: string; text: string }[];
    note: string;
  };
  faq: { title1: string; title2: string; items: { q: string; a: string }[] };
  /** Maillage interne : chemins FR (localisés au rendu par getLocalizedPath). */
  secteurs?: { title: string; links: { path: string; label: string }[] };
}

export type ZoneExtras = Record<Locale, ZoneExtrasContent>;
