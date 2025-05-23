import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: `/kendo-react/kendo-react-personal-finance/`,
  plugins: [react()],
});
