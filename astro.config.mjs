// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

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
