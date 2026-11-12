// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// Pages en attente de validation client (src/data/publication.json) : hors sitemap tant que non publiées.
const publication = JSON.parse(readFileSync(new URL('./src/data/publication.json', import.meta.url), 'utf8'));

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sbdesign.fr',
  output: 'static',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // Pages de remerciement de formulaire (noindex) : hors sitemap.
      filter: (page) =>
        !page.includes('/espace-agences-merci/') &&
        (publication.agencesClimPubliees || !publication.pagesEnAttente.some((p) => page.endsWith(p))),
      // Annotations hreflang FR/EN/IT dans le sitemap (Problème 6 SEO).
      // FR = locale par défaut sans préfixe d'URL ; EN sous /en/, IT sous /it/.
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-FR',
          en: 'en-GB',
          it: 'it-IT',
        },
      },
    }),
  ],
  image: {
    domains: [],
  },
});
