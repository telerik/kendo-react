import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  base: `/kendo-react/kendo-react-e-commerce-astro-app/`,
  build: {
    outDir: 'build'
  },
});
