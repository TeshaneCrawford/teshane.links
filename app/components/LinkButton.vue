<script lang="ts" setup>
const { data: AppConfig } = await useFetch('/api/siteConfig')

// const showShare = ref(false)

// const toggleShare = () => {
//   showShare.value = !showShare.value
// }
</script>

<template>
  <div
    flex
    flex-col
    gap-4
  >
    <!-- <div
      v-for="links in AppConfig?.link"
      :key="links.name"
    >
      <NuxtLink
        flex
        justify-between
        icon-btn
        :to="links.url"
      >
        <Icon
          :name="links.icon"
          size="2rem"
        />
        <span class="text-lg font-semibold">
          {{ links.name }}
        </span>

        <Icon
          name="uil-share-alt"
          size="2rem"
          @click="toggleShare"
        />
      </NuxtLink> -->
    <!-- <div v-if="showShare">
        <SocialShare
          v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
          :key="network"
          :network="network"
          :styled="true"
          :label="true"
        >
          <template #label>
            {{ network }}
          </template>
        </SocialShare>
      </div> -->
    <div
      v-for="links in AppConfig?.link"
      :key="links.name"
      class=""
    >
      <NuxtLink
        :to="links.url"
        class="button"
        external
        target="blank"
      >
        <div class="button__content gap-24 md:gap-48">
          <Icon
            :name="links.icon"
            size="2rem"
            class="button__icon"
          />
          <span class="button__text">{{ links.name }}</span>

          <div class="button__reflection-1" />
          <div class="button__reflection-2" />
        </div>

        <img
          src="/star.png"
          alt=""
          class="button__star-1"
        >
        <img
          src="/star.png"
          alt=""
          class="button__star-2"
        >
        <img
          src="/circle.png"
          alt=""
          class="button__circle-1"
        >
        <img
          src="/circle.png"
          alt=""
          class="button__circle-2"
        >
        <img
          src="/diamond.png"
          alt=""
          class="button__diamond"
        >
        <img
          src="/triangle.png"
          alt=""
          class="button__triangle"
        >

        <div class="button__shadow" />
      </NuxtLink>
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped>

</style>
