<script lang="ts" setup>
const currentYear = new Date()
</script>

<template>
  <footer>
    <div
      class="mx-auto max-w-4xl flex items-center justify-between border-t border-[#c7c7c7] px-4 pb-5 pt-5 dark:border-[#34343a] lg:px-0"
    >
      <p class="flex-inline items-center">
        © {{ currentYear.getFullYear() }} Teshane Crawford
        <br class="sm:hidden">
      </p>

      <div class="flex items-center">
        <a
          class="mr-3"
          target="_blank"
          href="https://twitter.com/TeshaneCrawford"
        >
          <Icon
            name="i-ph-x-logo"
            class="h-5 w-5 dark:fill-white"
          />
        </a>
        <a
          class="mr-3"
          target="_blank"
          href="https://github.com/TeshaneCrawford"
        ><Icon
          name="i-ph-github-logo"
          class="h-5 w-5 dark:fill-white"
        />
        </a>
        <a
          class="mr-3"
          target="_blank"
          href="/feed.xml"
          title="RSS Feed"
        ><Icon
          name="i-ph-rss"
          class="h-5 w-5 dark:fill-white"
        />
        </a>
        <a><AppThemeSwitch /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
