import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: `/kendo-react/kendo-react-project-tracker-app/`,
  plugins: [react(), tailwindcss()],
});
