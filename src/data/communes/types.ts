/**
 * Pages communes « architecte d'intérieur + commune » — modèle de contenu.
 * Le gabarit est src/components/sections/CommunePage.astro ; chaque commune a
 * son fichier de contenu FR/EN/IT dans ce dossier.
 */
import type { Locale } from '@i18n/languages';

export interface CommuneContent {
  meta: { title: string; description: string };
  hero: { label: string; titleLine1: string; titleLine2: string; subtitle: string; imageAlt: string };
  /** 01 — La commune et ses quartiers */
  commune: {
    title1: string;
    title2: string;
    paragraphs: string[];
    quartiersTitle: string;
    quartiers: { name: string; text: string }[];
  };
  /** 02 — Types de biens rencontrés + prestations */
  biens: {
    title1: string;
    title2: string;
    paragraphs: string[];
    items: string[];
    prestationsTitle: string;
    prestations: string[];
  };
  /** 03 — Contraintes locales (formulations prudentes) */
  contraintes: {
    title1: string;
    title2: string;
    intro: string;
    items: { title: string; text: string }[];
    note: string;
  };
  /** 04 — Méthode pour les propriétaires non résidents */
  methode: { title1: string; title2: string; intro: string; steps: { title: string; text: string }[] };
  /** 05 — Réalisations proches (slugs de src/data/projects.ts) */
  realisations: { title1: string; title2: string; intro: string; cards: { slug: string; alt: string }[] };
  /** 06 — FAQ locale (→ schema FAQPage) */
  faq: { title1: string; title2: string; items: { q: string; a: string }[] };
  /** Secteurs voisins (maillage interne) */
  voisins: { title: string; links: { path: string; label: string }[] };
  /** 07 — CTA */
  cta: { title1: string; title2: string; text: string; button: string };
}

export interface Commune {
  /** Slug de l'URL : /architecte-interieur-{slug}/ (identique dans les 3 langues) */
  slug: string;
  heroImages: string[];
  ogImage: string;
  content: Record<Locale, CommuneContent>;
}
