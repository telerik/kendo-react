import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  base: `/kendo-react/ecommerce-jewellery-store/`,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          404: resolve(__dirname, "public/404.html"),
        },
      },
  },
});