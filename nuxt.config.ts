import type { ModuleOptions as SitemapModuleOptions } from '@nuxtjs/sitemap';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Pluton Capital',
      meta: [
        { name: 'description', content: 'Pluton Capital Limited in a Private Equity in Republic of Ireland.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.svg' }
      ]
    }
  },

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

  modules: ['@nuxt/content', '@nuxtjs/sitemap', '@nuxt/image'],

  sitemap: <Partial<SitemapModuleOptions>>{
    hostname: 'https://pluton.capital',
    gzip: true,
    autoLastmod: true,
  },
});