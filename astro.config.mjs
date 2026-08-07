// @ts-check
import { defineConfig } from 'astro/config';

// tailwind
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
