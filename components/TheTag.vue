<script lang='ts' setup>
import { Tag } from '~/types'

const { tag } = defineProps<{
  tag: Tag
}>()
</script>

<template>
  <div
    class='w-fit h-fit bg-tertiary-container text-on-tertiary-container p-2 rounded-lg font-semibold text-label-medium border-thin border-on-tertiary-container/50'>
    {{ tag.name }}
  </div>
</template>