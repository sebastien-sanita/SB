/**
 * i18n — Barrel export
 */
export { defaultLocale, locales, localeLabels, localeShortLabels, routeMap } from './languages';
export type { Locale } from './languages';
export { getLangFromUrl, getLangFromPathname, t, tArray, getLocalizedPath, getBasePathname, getHreflangAlternates } from './utils';
export { default as strings } from './strings';
