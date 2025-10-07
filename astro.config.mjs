import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://LaShavi.github.io',
  base: '/JavierSalgadoDevPortfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});
