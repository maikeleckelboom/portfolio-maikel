<script lang="ts" setup></script>

<template>
  <div class="flex w-full gap-5 px-3 py-4 text-on-surface-variant">
    <div class="flex">
      <TheAvatar>
        <slot name="avatar" />
      </TheAvatar>
    </div>
    <div class="">
      <TheTitle>
        <slot name="title" />
      </TheTitle>
      <TheSubtitle>
        <slot name="subtitle" />
      </TheSubtitle>
      <div class="col-span-full flex">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
