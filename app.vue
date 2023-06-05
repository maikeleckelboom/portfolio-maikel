<script lang='ts' setup>
const theme = useTheme()

useHead({
  title: 'Portfolio - Maikel Eckelboom',
  meta: [
    {
      name: 'description',
      content: 'Het portfolio van Maikel Eckelboom'
    }
  ]
})

</script>

<template>
  <NuxtLoadingIndicator
      :color='useColorGradient()'
  />
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