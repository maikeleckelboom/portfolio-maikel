<template>
  <div
    class="p2 ce-items-center relative grid aspect-square h-16 w-16 rounded-full border-thin border-outline-variant p-4"
  >
    <slot />
  </div>
</template>

<style scoped lang="postcss">
[data-class="inner-circle"] {
}
.selected div {
  view-transition-name: avatar;
}
</style>

<script setup></script>
