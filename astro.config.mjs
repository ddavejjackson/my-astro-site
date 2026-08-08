import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import decapCmsOauth from 'astro-decap-cms-oauth';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [decapCmsOauth],
  vite: {
    plugins: [tailwindcss()],
  },
});
