<script setup lang="ts">
const { data: AppConfig } = await useFetch('/api/siteConfig')
</script>

<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="link in AppConfig?.link"
      :key="link.name"
      class="w-full"
    >
      <LinkButton :link="link" />
    </div>
  </div>
</template>

<style scoped></style>
