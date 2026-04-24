import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],

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
