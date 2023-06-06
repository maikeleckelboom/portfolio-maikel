<template>
  <div
      class="rounded-full grid place-items-center aspect-square relative overflow-hidden
      max-h-[78px] min-w-[48px] w-[78px] md:h-[78px] md:w-[78px]
      border-thin border-outline-variant">
    <slot/>
  </div>
</template>

<style scoped lang="postcss">
.selected div {
  view-transition-name: avatar;
}
</style>