<script setup lang="ts">
const { data: AppConfig } = await useFetch('/api/siteConfig')
</script>

<template>
  <div
    flex
    gap-2
  >
    <div
      v-for="social in AppConfig?.socials"
      :key="social.platform"
      class="group flex items-center border border-rounded bg-white/60 p-2 dark:bg-white/10 hover:bg-gray-50 dark:hover:bg-white/5"
    >
      <NuxtLink
        :to="social.link"
        :aria-label="social.platform"
        external
        target="blank"
        inline-flex
        items-center
      >
        <Icon
          :name="social.icon"
          size="1.5rem"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
