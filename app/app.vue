<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'font-sans antialiased text-neutral-6 dark:text-neutral-2',
  },
  htmlAttrs: {
    lang: 'en',
  },
  titleTemplate: c => c ? `${c} - Teshane Crawford` : 'Software Engineer',
  title: 'Links',
  meta: [
    {
      name: 'description',
      content: 'Teshane Crawford is a software engineer based in New York City.',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/jpeg',
      // href: faviconHref,
    },
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
