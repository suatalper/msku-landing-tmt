// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import legacy from "@vitejs/plugin-legacy";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      // @ts-ignore
      tailwindcss(),
      // @ts-ignore
      legacy({
        targets: ["defaults", "not IE 11", "ios >= 9", "android >= 4.4"],
        renderLegacyChunks: true,
      }),
    ],
    build: {
      target: "es2015",
      cssTarget: "chrome61",
    },
  },
});
