// @ts-check
import { defineConfig } from 'astro/config';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://zubasyan.github.io',
  base: '/site',
  integrations: [preact()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

});