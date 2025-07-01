import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

export default defineConfig({
  site: 'https://www.healthyfamiliesnewyork.org',
  base: '/',
  output: 'static',

  build: {
    assets: '_assets',
    format: 'file',
  },

  env: {
    schema: { 
      PUBLIC_GOOGLEMAPSAPIKEY: envField.string({
        context: 'server',
        access: 'secret',
        description: 'Google Maps API Key',        
      }),
    }
  },

  vite: {
    build: {
      assetsInlineLimit: 0
    }
  },

  integrations: [sitemap(), pagefind()]
});