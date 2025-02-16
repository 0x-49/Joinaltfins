// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  server: {
    port: 4325,
    host: true,
    hmr: true,
    watch: {
      // Force-enable file system watching
      ignoreInitial: false,
      alwaysStat: true
    }
  },
  vite: {
    server: {
      hmr: {
        protocol: 'ws'
      },
      watch: {
        usePolling: true
      }
    }
  },
  build: {
    inlineStylesheets: 'auto'
  }
});