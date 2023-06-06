<script lang='ts' setup>

</script>

<template>
  <TheCursor v-if='useDevice().isDesktop'/>
  <TheHeader/>
  <main class='relative h-full w-full'>
   <TheAboutPage/>
  </main>
</template>
