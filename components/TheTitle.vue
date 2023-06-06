<template>
  <h1 class='text-headline-medium md:text-display-small leading-tight font-semibold mb-2'>
    <slot/>
  </h1>
</template>

<style lang='postcss' scoped>
h1 {
  view-transition-name: title;
}
</style>