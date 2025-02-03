import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    outDir: 'dist', // Change 'dist' to 'build'
    manifest: true, // This will create a manifest file that you can use to customize the HTML output
    rollupOptions: {
      input: '/index.html', // Ensure that it points to your actual HTML file
    },
  },
});
