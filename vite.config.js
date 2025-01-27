import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Ensure this matches your repository name exactly
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});