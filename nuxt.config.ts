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
    '@nuxt/fonts'
  ],

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