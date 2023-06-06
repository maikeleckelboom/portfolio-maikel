<script lang="ts" setup>
import {useBreadcrumbs} from "~/composables/useBreadcrumbs"

const {
  breadcrumbs,
  isNotFirstCrumb,
  isNotCurrentCrumb
} = useBreadcrumbs()
</script>

<template>
  <div data-component="breadcrumbs" class="text-title-small text-on-surface-variant lowercase px-2 ">
    <ul class="flex flex-row items-center ">
      <li v-for="(crumb, index) in breadcrumbs"
          :key="index"
          class="flex flex-row items-center">
        <div v-if="isNotFirstCrumb(crumb)"
             class="flex flex-row items-center gap-1">
          <NuxtLink :to="`/${crumb.path}`"
                    class="on-surface-variant hover:on-surface-variant/90 px-2.5 ">
            <Icon class="w-4 h-4" name="ic:round-arrow-right"/>
          </NuxtLink>
        </div>
        <div v-if="isNotCurrentCrumb(crumb)"
             class="flex flex-row items-center gap-1">
          <NuxtLink :to="`/${crumb.path}`"
                    class="on-surface-variant hover:on-surface-variant/90">
            {{ crumb.name }}
          </NuxtLink>
        </div>
        <div v-else class="flex flex-row items-center gap-1 ">
          <span class="text-on-surface-variant ">
            {{ crumb.name }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
