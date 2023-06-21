import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://dar-fi.com',
  integrations: [
    compress(),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'one-dark-pro',
      },
    }),
    sitemap(),
    tailwind(),
  ],
});
