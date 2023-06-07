<template>
  <h1
    class="mb-2 text-headline-small font-semibold leading-tight md:text-headline-large"
  >
    <slot />
  </h1>
</template>

<style lang="postcss" scoped>
h1 {
  view-transition-name: title;
}
</style>
