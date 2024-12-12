<script setup lang="ts">
const { data: siteConfig } = await useFetch('/api/siteConfig')
const siteName = siteConfig.value?.name || 'Teshane Crawford'
const siteDesc = siteConfig.value?.meta?.description || 'Teshane Crawford is a software engineer who specializes in building web applications using modern technologies.'
const siteUrl = 'https://teshanecrawford.me'
const siteImage = siteConfig.value?.meta?.image?.src || '/ogImage.jpeg'

const twitterHandle = computed(() => {
  const xAccount = siteConfig.value?.socials?.find((social: { platform: string }) => social.platform === 'X')
  return xAccount ? '@TeshaneCrawford' : '@TeshaneCrawford'
})

useHead({
  bodyAttrs: {
    class: 'font-sans antialiased text-gray-11',
  },
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr',
  },
  titleTemplate: (title: string | undefined) => title ? `${title} - ${siteName}` : siteName,
  title: 'Links',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: siteDesc },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' }, // For iOS
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'mobile-web-app-capable', content: 'yes' }, // For Android

    // Open Graph Card
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: siteName },
    { property: 'og:title', content: `Links - ${siteName}` },
    { property: 'og:description', content: siteDesc },
    { property: 'og:image', content: siteImage },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: `${siteName}'s profile picture` },
    { property: 'og:url', content: siteUrl },
    { property: 'og:locale', content: 'en_US' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: twitterHandle.value },
    { name: 'twitter:creator', content: twitterHandle.value },
    { name: 'twitter:title', content: `Links - ${siteName}` },
    { name: 'twitter:description', content: siteDesc },
    { name: 'twitter:image', content: siteImage },
    { name: 'twitter:image:alt', content: `${siteName}'s profile picture` },

    // Additional SEO
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { name: 'author', content: siteName },
    { name: 'theme-color', content: '#000000' },
    { name: 'keywords', content: 'software engineer, web development, JavaScript, TypeScript, Vue.js' },
    { name: 'application-name', content: siteName },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'canonical', href: 'https://teshanecrawford.me' },
    { rel: 'alternate', type: 'application/rss+xml', title: `${siteName}'s RSS Feed`, href: '/feed.xml' },
    { rel: 'alternate', hreflang: 'en', href: 'https://teshanecrawford.me' },
    { rel: 'author', href: '/humans.txt' },
  ],
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppLayout>
      <NuxtPage />
      <AppBgNoise />
      <AppToastNotification />
    </AppLayout>
  </div>
</template>
