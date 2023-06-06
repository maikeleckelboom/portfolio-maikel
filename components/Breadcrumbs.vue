<script lang="ts" setup>
import { useBreadcrumbs } from "~/composables/useBreadcrumbs";

const { breadcrumbs, isNotFirstCrumb, isNotCurrentCrumb } = useBreadcrumbs();
</script>

<template>
  <div
    class="px-2 text-title-small lowercase text-on-surface-variant"
    data-component="breadcrumbs"
  >
    <ul class="flex flex-row items-center">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="flex flex-row items-center"
      >
        <div class="flex flex-row items-center gap-1">
          <Icon
            v-if="isNotFirstCrumb(crumb)"
            class="mx-2.5 h-5 w-5"
            name="ic:round-arrow-forward"
          />
          <NuxtLink
            v-if="isNotCurrentCrumb(crumb)"
            :to="`/${crumb.path}`"
            class="on-surface-variant hover:on-surface-variant/80 rounded-md px-1 py-2"
          >
            {{ crumb.name }}
          </NuxtLink>
        </div>
        <div
          v-if="isNotFirstCrumb(crumb)"
          class="flex flex-row items-center gap-1"
        >
          <span class="text-on-surface-variant opacity-50">
            {{ crumb.name }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
