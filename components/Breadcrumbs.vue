<script lang="ts" setup>
import { useBreadcrumbs } from "~/composables/useBreadcrumbs"

const { breadcrumbs, isNotFirstCrumb, isNotCurrentCrumb } = useBreadcrumbs()
</script>

<template>
  <div
    class="flex flex-nowrap items-center px-3 py-2 lowercase"
    data-component="breadcrumbs"
  >
    <ul class="flex flex-row items-center">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="flex flex-row items-center"
      >
        <div v-if="isNotFirstCrumb(crumb)" class="flex flex-row items-center">
          <NuxtLink
            :to="`/${crumb.path}`"
            class="on-surface-variant hover:on-surface-variant/90 rounded-md px-1"
          >
            <Icon class="mx-1 h-4 w-4" name="ic:round-arrow-forward" />
          </NuxtLink>
        </div>
        <div v-if="isNotCurrentCrumb(crumb)" class="flex flex-row items-center">
          <NuxtLink
            :to="`/${crumb.path}`"
            class="on-surface-variant hover:on-surface-variant/90 rounded-md px-1"
          >
            {{ crumb.name }}
          </NuxtLink>
        </div>
        <div v-else class="flex flex-row items-center">
          <span class="rounded-md px-1 font-bold text-on-surface-variant/90">
            {{ crumb.name }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
