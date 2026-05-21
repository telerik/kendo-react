import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/kendo-react/kendo-react-homepage-demo/",
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "global-builtin",
          "legacy-js-api",
          "abs-percent",
          "if-function",
          "color-functions",
        ],
      },
    },
  },
});
