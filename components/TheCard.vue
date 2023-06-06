<script generic='T extends { [key: string]: any }' lang='ts' setup>
const {data} = defineProps<{
  data: T
}>()

</script>

<template>
  <div class='grid grid-cols-10 py-4 rounded-md lowercase text-on-surface-variant'>
    <div
        class='col-span-2 md:col-span-1 h-fit pt-1 pl-1 pr-3.5  border-r-thin border-outline-variant flex justify-end'>
      <slot name='dates'/>
    </div>
    <div class='col-span-8 md:col-span-9 mb-1 pl-3.5'>
      <slot name='heading'/>
      <div class=" text-body-medium">
        <slot name='default'/>
      </div>
      <div>
        <slot name='footer'/>
      </div>
    </div>
  </div>
</template>

<style lang='postcss'>
.selected [data-view-transition-name="heading"] {
  view-transition-name: heading;
  contain: paint;
}
</style>