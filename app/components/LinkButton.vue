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
    class="group relative w-full flex cursor-pointer select-none items-center justify-between gap-4 overflow-hidden border-1 border-dark/80 border-solid bg-white/10 p-3 shadow-[rgba(0,0,0,0.2)_15px_28px_25px_-18px] transition-all duration-235 ease-in-out rounded-custom hover:translate-y-0.5 dark:border-gray-300 dark:bg-dark/50 md:p-5 focus:shadow-[rgba(0,0,0,0.3)_2px_8px_4px_-6px] hover:shadow-[rgba(0,0,0,0.3)_2px_8px_8px_-5px]"
    :aria-label="`Open ${link.name} link in new tab`"
  >
    <!-- Content container -->
    <div class="relative w-full flex items-center gap-4">
      <!-- Left icon -->
      <div class="h-8 w-8 flex items-center justify-center">
        <Icon
          :name="link.icon"
          class="h-6 w-6 text-gray-800 transition-transform duration-300 group-hover:scale-110 dark:text-gray-200"
        />
      </div>

      <!-- Link text -->
      <span
        class="flex-1 text-center text-base text-gray-800 font-medium font-sans md:text-lg dark:text-gray-200"
      >
        {{ link.name }}
      </span>

      <!-- Share button -->
      <button
        class="h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-black/10 dark:hover:bg-white/10"
        :aria-label="`Share ${link.name} link`"
        @click.prevent="shareLink"
      >
        <Icon
          name="i-ph-share-network-light"
          class="h-5 w-5 text-gray-800 transition-transform duration-300 group-hover:scale-110 dark:text-gray-200"
        />
      </button>
    </div>
  </NuxtLink>
</template>
