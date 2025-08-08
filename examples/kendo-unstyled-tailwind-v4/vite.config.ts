import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: `/kendo-react/kendo-unstyled-tailwind-v4/`,
  plugins: [react(), tailwindcss()],
});
