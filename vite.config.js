// vite.config.js
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    solidPlugin(),
    tailwindcss({
      config: './tailwind.config.js' // Explicit path to config
    })
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});