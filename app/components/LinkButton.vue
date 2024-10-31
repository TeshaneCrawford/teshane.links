<script setup lang="ts">
interface Link {
  name: string
  url: string
  icon: string
}

const props = defineProps<{
  link: Link
}>()

const { copy } = useClipboard()
const toast = useToast()

const shareLink = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: props.link.name,
        url: props.link.url,
      })
      toast.add({
        title: 'Shared successfully!',
        description: `${props.link.name} link has been shared.`,
        duration: 2000,
      })
    }
    catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        await copyToClipboard()
      }
    }
  }
  else {
    await copyToClipboard()
  }
}

const copyToClipboard = async () => {
  try {
    await copy(props.link.url)
    toast.add({
      title: 'Link copied!',
      description: `${props.link.name} link has been copied to your clipboard.`,
      duration: 2000,
    })
  }
  catch {
    toast.add({
      title: 'Failed to copy',
      description: 'Please try again or copy the link manually.',
      duration: 3000,
    })
  }
}
</script>

<template>
  <NuxtLink
    :to="link.url"
    external
    target="_blank"
    rel="noopener noreferrer"
    class="group relative w-full flex items-center justify-between gap-4 overflow-hidden rounded-lg p-4 transition-all duration-400"
    :aria-label="`Open ${link.name} link in new tab`"
  >
    <!-- Base button styling -->
    <div
      class="absolute inset-0 bg-dark-5 transition-transform duration-400 group-hover:translate-x-[2%] group-hover:translate-y-[5%] group-hover:scale-110 dark:bg-light-800"
      aria-hidden="true"
    />

    <!-- Blur effect -->
    <div
      class="absolute bottom-0 right-0 h-8 w-8 translate-x-2 translate-y-2 rounded-full bg-white/10 backdrop-blur transition-all duration-400 group-hover:h-full group-hover:w-full group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rounded-lg dark:bg-dark/10"
      aria-hidden="true"
    />

    <!-- Content container -->
    <div class="relative w-full flex items-center gap-4">
      <!-- Left icon -->
      <div class="h-8 w-8 flex items-center justify-center">
        <Icon
          :name="link.icon"
          class="h-6 w-6 text-light-50 transition-transform duration-300 group-hover:scale-110 dark:text-dark-100"
        />
      </div>

      <!-- Link text -->
      <span
        class="flex-1 text-center text-base text-light-50 font-medium transition-colors duration-300 md:text-lg dark:text-dark-50 group-hover:text-light-100 dark:group-hover:text-dark-100"
      >
        {{ link.name }}
      </span>

      <!-- Share button -->
      <button
        class="h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-white/10 dark:hover:bg-black/10"
        :aria-label="`Share ${link.name} link`"
        @click.prevent="shareLink"
      >
        <Icon
          name="i-uil-share-alt"
          class="h-5 w-5 text-light-50 transition-transform duration-300 group-hover:scale-110 dark:text-dark-100"
        />
      </button>
    </div>
  </NuxtLink>
</template>
