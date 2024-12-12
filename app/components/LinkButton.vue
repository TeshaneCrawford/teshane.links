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
    class="group relative w-full flex cursor-pointer select-none items-center justify-between gap-4 overflow-hidden border-1 border-gray-7 bg-gray-1 p-3 shadow-[rgba(0,0,0,0.1)_5px_15px_15px_-15px] transition-all duration-235 ease-in-out rounded-custom hover:translate-y-0.5 md:p-5 focus:shadow-[rgba(0,0,0,0.15)_1px_4px_2px_-4px] hover:shadow-[rgba(0,0,0,0.15)_1px_4px_4px_-3px]"
    :aria-label="`Open ${link.name} link in new tab`"
  >
    <!-- Content container -->
    <div class="relative w-full flex items-center gap-4">
      <!-- Left icon -->
      <div class="h-8 w-8 flex items-center justify-center">
        <Icon
          :name="link.icon"
          class="text-gray-12 h-6 w-6 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <!-- Link text -->
      <span
        class="text-gray-12 flex-1 text-center text-base font-medium font-sans md:text-lg"
      >
        {{ link.name }}
      </span>

      <!-- Share button -->
      <button
        class="h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-gray-3"
        :aria-label="`Share ${link.name} link`"
        @click.prevent="shareLink"
      >
        <Icon
          name="i-ph-share-network-light"
          class="text-gray-12 h-5 w-5 transition-transform duration-300 group-hover:scale-110"
        />
      </button>
    </div>
  </NuxtLink>
</template>
