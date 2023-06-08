<script lang="ts" setup>
useHead({
  title: "Portfolio - Maikel Eckelboom",
  meta: [
    {
      name: "description",
      content: "Het portfolio van Maikel Eckelboom",
    },
    {
      name: "theme-color",
      theme_color: "var(--md-sys-color-surface)",
    },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator :color="useColorGradient()" />
  <NuxtPage />
  <VitePwaManifest />
</template>

<style>
::view-transition-image-pair(root) {
}

::view-transition-old(root),
::view-transition-new(root) {
}
</style>
