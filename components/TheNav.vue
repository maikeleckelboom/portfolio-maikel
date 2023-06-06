<script lang='ts' setup>
</script>

<template>
  <nav class="the-nav">
    <slot></slot>
  </nav>
</template>

<style lang='postcss'>
.the-nav li {
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}

.the-nav:has(li:hover):hover ul > * {
  opacity: 0.4;
  transform: scale(0.96);
}

.the-nav:has(li:hover) ul > *:hover {
  opacity: 1;
  transform: scale(1);
  transition-delay: 0ms, 0ms;
}
</style>