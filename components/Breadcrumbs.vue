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
        <div class="flex flex-row items-center gap-1">
          <Icon class="w-5 h-5 mx-2.5"
                name="ic:round-arrow-forward"
                v-if="isNotFirstCrumb(crumb)"
          />
          <NuxtLink  v-if="isNotCurrentCrumb(crumb)"
                     :to="`/${crumb.path}`"
                    class="on-surface-variant hover:on-surface-variant/90 rounded-md"
          >
            {{ crumb.name }}
          </NuxtLink>
        </div>
        <div v-if=" isNotFirstCrumb(crumb)" class="flex flex-row items-center gap-1"
        >
          <span class="text-on-surface-variant ">
            {{ crumb.name }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
