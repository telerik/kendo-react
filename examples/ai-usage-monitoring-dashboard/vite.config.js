import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: `/kendo-react/ai-usage-monitoring-dashboard/`,
  plugins: [react()],
  server: {
    port: 4173,
  },
});
