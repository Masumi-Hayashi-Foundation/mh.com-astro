import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "@astrojs/icon";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  renderers: [react()],
  integrations: [tailwind(), react(), icon()]
});