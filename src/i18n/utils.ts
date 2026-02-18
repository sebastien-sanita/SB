/**
 * i18n — Utility functions
 */
import { defaultLocale, locales, type Locale } from './languages';
import strings from './strings';

/**
 * Extract the locale from a URL pathname.
 * /en/projets → 'en'
 * /projets    → 'fr' (default)
 */
export function getLangFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if (locales.includes(segment as Locale)) {
    return segment as Locale;
  }
  return defaultLocale;
}

/**
 * Extract locale from a pathname string (without URL object).
 * Useful in components that only have the pathname.
 */
export function getLangFromPathname(pathname: string): Locale {
  const [, segment] = pathname.split('/');
  if (locales.includes(segment as Locale)) {
    return segment as Locale;
  }
  return defaultLocale;
}

/**
 * Get a translated string from the dictionary.
 * Usage: t('nav', 'projets', 'en') → 'Projects'
 */
export function t<
  S extends keyof typeof strings,
  K extends keyof (typeof strings)[S],
>(section: S, key: K, lang: Locale): string {
  const entry = strings[section][key] as Record<Locale, string>;
  return entry[lang] ?? entry[defaultLocale];
}

/**
 * Get a translated array (for TextMorph words, marquee items, etc.)
 * Usage: tArray('approche', 'morphWords', 'en') → ['Approach', 'Method', 'Expertise']
 */
export function tArray<
  S extends keyof typeof strings,
  K extends keyof (typeof strings)[S],
>(section: S, key: K, lang: Locale): string[] {
  const entry = strings[section][key] as Record<Locale, string[]>;
  return entry[lang] ?? entry[defaultLocale];
}

/**
 * Build a localized path.
 * getLocalizedPath('/projets', 'en') → '/en/projets'
 * getLocalizedPath('/projets', 'fr') → '/projets'
 */
export function getLocalizedPath(path: string, lang: Locale): string {
  if (lang === defaultLocale) return path;
  // Avoid double prefix
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath}`;
}

/**
 * Remove locale prefix from pathname to get the base path.
 * '/en/projets' → '/projets'
 * '/projets'    → '/projets'
 */
export function getBasePathname(pathname: string): string {
  const [, segment, ...rest] = pathname.split('/');
  if (locales.includes(segment as Locale)) {
    return '/' + rest.join('/');
  }
  return pathname;
}

/**
 * Build hreflang alternate URLs for SEO.
 * Returns an array of { lang, href } for all locales.
 */
export function getHreflangAlternates(
  pathname: string,
  siteUrl: string,
): Array<{ lang: Locale; href: string }> {
  const basePath = getBasePathname(pathname);
  return locales.map((lang) => ({
    lang,
    href: `${siteUrl}${getLocalizedPath(basePath, lang)}`,
  }));
}
