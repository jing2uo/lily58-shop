// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Static keyboard shop. `site` is the canonical origin used for absolute URLs,
// the sitemap, and SEO tags. Static output deploys to Cloudflare Pages (current
// host) or Vercel with no server runtime.
export default defineConfig({
  site: process.env.SITE_URL || 'https://kbd.guojing.io',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
