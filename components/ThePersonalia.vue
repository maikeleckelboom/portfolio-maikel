<script lang='ts' setup>
</script>

<template>
  <div class='grid grid-cols-10 py-4 rounded-md lowercase text-on-surface-variant'>
    <div
        class='col-span-2  h-fit pt-1 pl-1 pr-3.5 border-r-thin border-outline-variant flex justify-end'>
      <TheAvatar>
        <slot name="avatar"/>
      </TheAvatar>
    </div>
    <div class='col-span-8 mb-1 pl-3.5'>
      <TheTitle>
        <slot name='title'/>
      </TheTitle>
      <TheSubtitle>
        <slot name='subtitle'/>
      </TheSubtitle>
      <div class="flex col-span-full">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>