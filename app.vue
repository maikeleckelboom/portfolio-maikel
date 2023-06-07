<script lang="ts" setup>
const theme = useTheme()

const colorMode = useColorMode()

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
  <div class="min-h-screen" data-name="container">
    <NuxtPage />
  </div>
  <VitePwaManifest />
</template>

<style>
[data-name="container"]::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background-image: linear-gradient(
    0,
    rgba(var(--md-sys-color-surface-rgb) / 1) 0%,
    rgba(var(--md-sys-color-on-surface-rgb) / 0) 100%
  );
  z-index: -1;
  pointer-events: none;
}

::view-transition-image-pair(root) {
}

::view-transition-old(root),
::view-transition-new(root) {
}
</style>
