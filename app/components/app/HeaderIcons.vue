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
      class="group flex items-center border border-gray-7 bg-gray-1 p-2 rounded-custom hover:bg-gray-2"
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
