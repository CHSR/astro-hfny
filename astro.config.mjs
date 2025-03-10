import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.healthyfamiliesnewyork.org',
  base: '/',
  output: 'static',
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
}); 