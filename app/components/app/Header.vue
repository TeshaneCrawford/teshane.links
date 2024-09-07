<script setup lang="ts">
const { data: AppConfig } = await useFetch('/api/siteConfig')
</script>

<template>
  <header
    class="animate-slide-from-down-and-fade-1 max-w-3xl w-full flex flex-row items-center justify-between space-y-0 md:px-0"
  >
    <div class="flex flex-row items-center space-x-3">
      <img
        :src="AppConfig?.headshot"
        :alt="`${AppConfig?.name} headshot`"
        width="100"
        height="100"
        class="h-[48px] w-[48px] rounded-full"
      >
      <div
        v-if="AppConfig?.name"
        class="flex flex-col"
      >
        <span class="font-semibold">{{ AppConfig?.name }}</span>
        <span class="text-neutral-400">{{ AppConfig?.title }}</span>
      </div>
    </div>
    <!-- Desktop -->
    <div class="hidden flex-row md:flex space-x-24">
      <AppHeaderIcons />
    </div>
  </header>
</template>

<style scoped></style>
