// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  outDir: "docs",
  base: "/",
  site: "https://needfrspd.github.io",
  build: {
    assets: "assets",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
