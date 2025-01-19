import type { ModuleOptions as SitemapModuleOptions } from '@nuxtjs/sitemap';

export default defineNuxtConfig({
  nitro: {
    compatibilityDate: '2025-01-19',
    compressPublicAssets: true,
  },

  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/content', '@nuxtjs/sitemap'],

  sitemap: <Partial<SitemapModuleOptions>>{
    hostname: 'https://pluton.capital',
    gzip: true,
    autoLastmod: true,
  },
});