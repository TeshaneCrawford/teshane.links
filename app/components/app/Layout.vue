<script setup lang="ts"></script>

<template>
  <main class="flex flex-col items-center min-h-dvh">
    <div class="mx-auto max-w-3xl w-full px-4 pt-4 lg:px-20 md:pt-10">
      <div class="w-full flex flex-1 flex-col items-center gap-8">
        <slot />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
