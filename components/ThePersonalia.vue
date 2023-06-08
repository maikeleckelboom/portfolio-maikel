<script lang="ts" setup></script>

<template>
  <div class="flex w-full flex-col text-on-surface-variant">
    <div class="flex flex-nowrap">
      <div class="flex">
        <slot name="avatar" />
      </div>
      <div class="flex flex-col">
        <TheTitle>
          <slot name="title" />
        </TheTitle>
        <TheSubtitle>
          <slot name="subtitle" />
        </TheSubtitle>
      </div>
    </div>
    <div class="flex flex-nowrap">
      <slot name="footer" />
    </div>
  </div>
</template>
