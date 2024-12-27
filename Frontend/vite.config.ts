import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: './',
  publicDir: 'public',
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src'),
      // '@public': path.resolve(__dirname, './public')
    }
  },
  assetsInclude: ['**/*.jpg', '**/*.JPG', '**/*.jpeg', '**/*.png'], // Add this line
});