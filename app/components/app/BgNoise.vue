<script setup lang="ts"></script>

<template>
  <svg
    class="pointer-events-none fixed isolate z-10 h-100dvh w-full opacity-90 mix-blend-soft-light"
  >
    <filter id="pedroduarteisalegend">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.80"
        numOctaves="4"
        stitchTiles="stitch"
      />
    </filter>
    <rect
      width="100%"
      height="100%"
      filter="url(#pedroduarteisalegend)"
    />
  </svg>
  <div class="fixed h-24 w-full bg-gray-1/80 blur-[150px] dark:bg-gray-6/80" />
</template>

<style scoped></style>
