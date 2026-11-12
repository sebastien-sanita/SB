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
 * Build a localized path, toujours terminé par un slash : c'est la forme
 * canonique des pages (sans slash, Netlify répond par une redirection 301).
 * getLocalizedPath('/projets', 'en') → '/en/projets/'
 * getLocalizedPath('/projets', 'fr') → '/projets/'
 * getLocalizedPath('/expertise#design', 'fr') → '/expertise/#design'
 */
export function getLocalizedPath(path: string, lang: Locale): string {
  // Avoid double prefix
  const cleanPath = withTrailingSlash(path.startsWith('/') ? path : `/${path}`);
  if (lang === defaultLocale) return cleanPath;
  return `/${lang}${cleanPath}`;
}

/** Ajoute le slash final (avant ? ou #), sauf pour un fichier (.pdf, .jpg…). */
function withTrailingSlash(path: string): string {
  const cut = path.search(/[?#]/);
  const pathname = cut === -1 ? path : path.slice(0, cut);
  const rest = cut === -1 ? '' : path.slice(cut);
  const lastSegment = pathname.split('/').pop() ?? '';
  if (pathname.endsWith('/') || /\.[a-z0-9]+$/i.test(lastSegment)) return path;
  return `${pathname}/${rest}`;
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
