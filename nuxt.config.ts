import process from 'node:process'
import { AppConfig } from './server/util/site'

const name = process.env.LINK_NAME || 'Teshane Crawford'
const website = process.env.WEBSITE_DOMAIN || 'https://teshanecrawford.me'
const description = 'Software Developer specializing in web applications using modern technologies'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
    strict: true,
    shim: true,
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    '@nuxthub/core',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@vueuse/nuxt',
  ],

  runtimeConfig: {
    public: {
      name,
      website,
      description,
    },
  },

  app: {
    head: {
      title: `${name} Links.`,
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'alternate', type: 'application/rss+xml', title: `${name}'s links`, href: '/feed.xml' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'description', content: description },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: website },
        { property: 'og:title', content: `${name} Links` },
        { property: 'og:description', content: description },
        { property: 'og:image', content: website + AppConfig.meta.image.src },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: AppConfig.meta.image.alt },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: website },
        { name: 'twitter:title', content: `${name} Links` },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: website + AppConfig.meta.image.src },
        { name: 'twitter:image:alt', content: AppConfig.meta.image.alt },
      ],
    },
  },

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {
    // cache: true,
  },

  // https://unocss.com/docs/nuxt
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/css/main.css',
    // '@/assets/css/font.css',
  ],

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
      // standalone: false,
    },
  },

  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

  ssr: true,

  experimental: {
    componentIslands: true,
    // payloadExtraction: false,
    viewTransition: true,
  },
})
