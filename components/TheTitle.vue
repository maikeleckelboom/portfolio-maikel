<template>
  <h1
    class="mb-2 text-headline-medium font-semibold leading-tight text-on-surface md:text-display-small"
  >
    <slot />
  </h1>
</template>

<style lang="postcss" scoped>
h1 {
  view-transition-name: title;
}
</style>
