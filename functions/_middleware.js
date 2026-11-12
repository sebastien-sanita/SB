// Cloudflare Pages Function — sans effet sur Netlify (qui ne lit que netlify/functions).
// Le dépôt est aussi déployé sur Cloudflare Pages (sb-cyn.pages.dev) : ces copies
// répondaient en 200 et faisaient doublon avec le vrai site. Toute requête
// arrivant sur un hôte *.pages.dev (production, branches, aperçus) est renvoyée
// en 301 vers la même page du vrai domaine, paramètres d'URL compris.
const CANONICAL_ORIGIN = 'https://www.sbdesign.fr';

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname.endsWith('.pages.dev')) {
    return Response.redirect(CANONICAL_ORIGIN + url.pathname + url.search, 301);
  }
  return next();
}
