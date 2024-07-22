import { defineConfig } from "astro/config";
import dotenv from "dotenv";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    define: {
      "process.env": process.env,
    },
  },
});
