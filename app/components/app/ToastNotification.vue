<script setup lang="ts">
const { toasts } = useToast()
</script>

<template>
  <div
    aria-live="polite"
    class="pointer-events-none fixed inset-0 z-50 flex flex-col items-end gap-2 p-4 md:p-6"
  >
    <TransitionGroup name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="pointer-events-auto max-w-sm w-full rounded-lg bg-dark-800/90 p-4 shadow-lg backdrop-blur md:w-auto dark:bg-light-800/90"
      >
        <div class="w-full flex items-start gap-4">
          <div class="flex-1">
            <p class="text-sm text-light-50 font-medium dark:text-dark-50">
              {{ toast.title }}
            </p>
            <p
              v-if="toast.description"
              class="mt-1 text-sm text-light-400 dark:text-dark-400"
            >
              {{ toast.description }}
            </p>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.2s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>

<style scoped></style>
