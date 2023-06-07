<script generic="T extends { [key: string]: any }" lang="ts" setup>
const { data } = defineProps<{
  data: T
}>()
</script>

<template>
  <div
    class="relative grid grid-cols-10 overflow-hidden rounded-md py-4 text-on-surface-variant"
    data-component="TheCard"
  >
    <div class="col-span-2 flex h-fit justify-end pr-3.5 md:col-span-1">
      <slot name="dates" />
    </div>
    <div class="col-span-7 mb-1 pl-3.5 text-[balance] md:col-span-9">
      <div data-view-transition-name="heading">
        <slot name="heading" />
      </div>
      <div class="text-body-medium">
        <slot name="default" />
      </div>
      <div>
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.selected [data-view-transition-name="heading"] {
  view-transition-name: heading;
  contain: paint;
}
</style>
