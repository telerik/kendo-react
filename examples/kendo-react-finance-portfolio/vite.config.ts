import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        react(),
        svgr(),
    ],
    base: '/kendo-react/kendo-react-finance-portfolio/',
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
        preprocessorOptions: {
            scss: {
                silenceDeprecations: [
                    'import',
                    'global-builtin',
                    'color-functions',
                    'abs-percent',
                    'if-function',
                ],
            },
        },
    },
});
