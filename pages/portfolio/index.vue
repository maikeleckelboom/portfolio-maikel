<script lang="ts" setup></script>

<template>
  <TheCursor v-if="useDevice().isDesktop" />
  <TheHeader />
  <main class="relative">
    <Center>
      <Breadcrumbs />
    </Center>
  </main>
</template>
