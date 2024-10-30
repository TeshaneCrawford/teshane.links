import process from 'node:process'

const name = process.env.LINK_NAME || 'Teshane Crawford'
const website = process.env.WEBSITE_DOMAIN || 'https://teshanecrawford.me'

// https://nuxt.com/docs/api/configuration/nuxt-config
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
    '@stefanobartoletti/nuxt-social-share',
  ],

  runtimeConfig: {
    public: {
      name,
      website,
    },
  },

  app: {
    head: {
      title: `${name} Links.`,
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'alternate', type: 'application/rss+xml', title: `${name}'s links`, href: '/feed.xml' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: `${name}'s links` },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
        { property: 'og:image', content: `${website}/og.png` },
        { property: 'og:image:alt', content: `${name} Links.` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: `${website}/og.png` },
        { name: 'twitter:image:alt', content: `${name} Links.` },
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

  socialShare: {
    baseUrl: 'https://teshanecrawford.com', // required!
    // other optional module options
  },

  ssr: true,

  experimental: {
    componentIslands: true,
    // payloadExtraction: false,
    viewTransition: true,
  },
})
