<script setup lang="ts">
const { data: AppConfig } = await useFetch('/api/siteConfig')
</script>

<template>
  <div class="flex flex-col md:px-0">
    <div class="flex flex-col space-y-2">
      <span class="text-gray-11 leading-6">
        {{ AppConfig?.description }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
