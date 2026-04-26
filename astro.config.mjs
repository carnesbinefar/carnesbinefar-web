import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://carnesbinefar.es',
  output: "hybrid",
  adapter: cloudflare()
});