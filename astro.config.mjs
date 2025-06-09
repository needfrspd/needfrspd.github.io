// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  outDir: "docs",
  base: "/needfrspd.github.io",
  site: "https://needfrspd.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
