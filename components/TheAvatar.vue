<script lang="ts" setup>
const { url = "/", alt = "" } = defineProps<{
  url?: string
  alt?: string
}>()
</script>

<template>
  <div
    class="relative grid h-[62px] w-[62px] overflow-hidden rounded-full border-thin border-outline-variant"
    data-component="Avatar"
  >
    <slot>
      <NuxtImg
        :alt="alt"
        :src="url"
        class="relative top-[8px] mx-[8px] h-[90%] w-[70%] grayscale filter"
      />
    </slot>
  </div>
</template>

<style lang="postcss" scoped>
.selected [data-component="Avatar"] {
  view-transition-name: avatar;
}
</style>
