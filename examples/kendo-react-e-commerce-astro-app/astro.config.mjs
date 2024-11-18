import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://telerik.github.io',
  base: `/kendo-react/kendo-react-e-commerce-astro-app/`,
  build: {
    outDir: 'build'
  },
});
