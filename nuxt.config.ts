import { type NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {

  preset: 'cloudflare_pages',

  experimental: {
    appManifest: false
  },

  compatibilityDate: '2024-04-03',

  devtools: {
    enabled: process.env.NODE_ENV === 'development'
  },

  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    'nuxt-cloudflare-analytics'
  ],

  css: [
    '~/assets/css/tailwind.css'
  ],

  app: {
    name: 'Retouren Express',
    description: 'Retouren Express - Ihr Partner für aufregende Rücksendungen und Mystery-Boxen.',
    head: {
      titleTemplate: '%s • Retouren Express',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,shrink-to-fit=no' },
        { id: 'og:site_name', property: 'og:site_name', content: 'Retouren Express' }
      ],
    }
  },

  routeRules: {
    '/': { prerender: true },
    /* '/coming-soon': { prerender: true, cache: { maxAge: 60 * 60 * 24 } }, // Cache for a day
    '/maintenance': { prerender: true, cache: { maxAge: 60 * 60 * 24 } }, // Cache for a day
    '/about': { prerender: true },
    '/contact': { ssr: true },
    '/legal/**': { prerender: true, cache: { maxAge: 60 * 60 * 24 } }, // Cache for a day */
  },

  typescript: {
    types: ['@nuxt/types', '@nuxt/content']
  }
};

export default config;
