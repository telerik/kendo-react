import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            '@docs-shared': path.resolve(__dirname, 'shared')
        }
    },

    server: {
        port: 3030,
        host: 'localhost'
    },

    build: {
        outDir: 'dist',
        commonjsOptions: { transformMixedEsModules: true },
        chunkSizeWarningLimit: 4096,
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('/node_modules/cldr-')) {
                        return 'cldr';
                    }
                    if (id.includes('/node_modules/@progress/kendo-charts')) {
                        return 'kendo-charts';
                    }
                    if (id.includes('/node_modules/')) {
                        return 'vendor';
                    }
                }
            }
        }
    },

    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true
            }
        }
    }
});
