// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://xelovnight.github.io',
  base: '/Portfolio/',
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false // Le FR restera sur /, l'anglais sera sur /en/
    }
  }
});