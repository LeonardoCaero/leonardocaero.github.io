import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://leonardocaero.github.io",
  prefetch: { prefetchAll: true },
  vite: { plugins: [tailwindcss()] },
});
