<script lang="ts" setup>
const currentYear = new Date()

const socialLinks = [
  { href: 'https://twitter.com/TeshaneCrawford', icon: 'i-ph-x-logo', title: 'Twitter' },
  { href: 'https://github.com/TeshaneCrawford', icon: 'i-ph-github-logo', title: 'GitHub' },
  { href: '/feed.xml', icon: 'i-ph-rss', title: 'RSS Feed' },
]
</script>

<template>
  <footer>
    <div class="mx-auto max-w-4xl flex items-center justify-between border-t border-gray-6 px-4 pb-5 pt-5 dark:border-gray-6 lg:px-0">
      <p class="flex-inline items-center">
        © {{ currentYear.getFullYear() }} Teshane Crawford
        <br class="sm:hidden">
      </p>

      <div class="flex items-center">
        <a
          v-for="link in socialLinks"
          :key="link.href"
          :href="link.href"
          :title="link.title"
          target="_blank"
          class="mr-3"
        >
          <Icon
            :name="link.icon"
            class="text-gray-11 hover:text-gray-12 h-5 w-5"
          />
        </a>
        <a><AppThemeSwitch /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
