import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
        scss: {
            quietDeps: true
        },
    }
  },
  resolve: {
    alias: {
      './shared-products.json': path.resolve(__dirname, './knowledge-base/examples/shared/shared-products.json'),
      './shared-sample-products': path.resolve(__dirname, './knowledge-base/examples/shared/shared-sample-products'),
      './shared-products-with-sections.json': path.resolve(__dirname, './knowledge-base/examples/shared/shared-products-with-sections.json'),
      './shared-products-loader.jsx': path.resolve(__dirname, './knowledge-base/examples/shared/shared-products-loader.jsx'),
      './shared-countries': path.resolve(__dirname, './knowledge-base/examples/shared/shared-countries'),
      './shared-data': path.resolve(__dirname, './knowledge-base/examples/shared/shared-data'),
      './shared-events-utc': path.resolve(__dirname, './knowledge-base/examples/shared/shared-events-utc'),
      './shared-treeListData': path.resolve(__dirname, './knowledge-base/examples/shared/shared-treeListData'),
      './shared-treelist-data': path.resolve(__dirname, './knowledge-base/examples/shared/shared-treelist-data'),
    },
  },
})
