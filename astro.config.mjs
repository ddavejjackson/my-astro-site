import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ddavejjackson.github.io',
  base: '/my-astro-site',
  vite: {
    plugins: [tailwindcss()],
  },
});
