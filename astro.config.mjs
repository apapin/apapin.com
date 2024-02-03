import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://apapin.com',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [],
    extendDefaultPlugins: true
  }
});