import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import { loadEnv } from "vite";

// const { PUBLIC_GOOGLEMAPSAPIKEY } = loadEnv(process.env.PUBLIC_GOOGLEMAPSAPIKEY, process.cwd(), "");

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
        context: 'client',
        access: 'public',
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