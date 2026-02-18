/**
 * i18n — Configuration des langues supportées
 */

export const defaultLocale = 'fr' as const;

export const locales = ['fr', 'en', 'it'] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  it: 'Italiano',
};

/** Short labels for the language switcher */
export const localeShortLabels: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
  it: 'IT',
};

/** Route mappings per locale (for pages with translated slugs) */
export const routeMap: Record<Locale, Record<string, string>> = {
  fr: {
    projets: 'projets',
    expertise: 'expertise',
    'a-propos': 'a-propos',
    contact: 'contact',
  },
  en: {
    projets: 'projects',
    expertise: 'expertise',
    'a-propos': 'about',
    contact: 'contact',
  },
  it: {
    projets: 'progetti',
    expertise: 'expertise',
    'a-propos': 'chi-siamo',
    contact: 'contatti',
  },
};
