// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  prefetch: true,
  adapter: vercel(),
});