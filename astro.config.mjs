import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://cavalown.com",
  output: "static",
  image: {
    service: passthroughImageService(),
  },
  integrations: [sitemap()],
});
