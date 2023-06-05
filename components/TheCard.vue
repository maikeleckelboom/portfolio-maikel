<script generic='T extends { [key: string]: any }' lang='ts' setup>
const { data } = defineProps<{
  data: T
}>()

</script>

<template>
  <div class='grid grid-cols-12 rounded-md p-4 lowercase'>
    <div class='col-span-2'>
      <slot name='dates' />
    </div>
    <div class='col-span-10 '>
      <div class='mb-1'>
        <slot name='heading' />
      </div>
      <div>
        <slot name='default' />
      </div>
      <div>
        <slot name='footer' />
      </div>
    </div>
  </div>
</template>

<style lang='postcss' scoped>

</style>