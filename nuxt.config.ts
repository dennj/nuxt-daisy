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

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/sitemap', '@nuxt/content', '@nuxt/image', '@nuxtjs/supabase', '@nuxtjs/tailwindcss', 'nuxt-gtag'],

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false
  },

  sitemap: <Partial<SitemapModuleOptions>>{
    hostname: 'https://pluton.capital',
    gzip: true,
    autoLastmod: true,
  },

  image: {
    formats: ['avif', 'webp'],
  },
  gtag: {
    id: 'G-ZDXSPVM1D8'
  },
});