<script lang="ts" setup>
import { PortfolioData } from "~/types"

const { data } = defineProps<{
  data: PortfolioData
}>()

const yearFromDate = (date: string) => {
  const [year] = date.split("-")
  return year
}
</script>

<template>
  <TheCard :data="data" class="">
    <template #dates>
      <div class="w-fit text-end">
        <p class="text-body-medium font-bold">
          {{ yearFromDate(data.date_end) }}
        </p>
        <p class="text-label-medium font-semibold opacity-70">
          {{ yearFromDate(data.date_start) }}
        </p>
      </div>
    </template>
    <template #heading>
      <div>
        <p
          data-transition-name="title"
          class="text-title-medium font-bold leading-tight text-on-surface-variant md:text-title-large md:font-bold"
        >
          {{ data.heading }} - {{ data.company_name }}
        </p>
        <p
          class="text-label-medium font-semibold leading-loose text-on-surface-variant"
        >
          {{ data.subheading }}
        </p>
      </div>
    </template>
    <template #default>
      <p class="text-body-medium text-on-surface-variant">
        {{ data.short_description }}
      </p>
    </template>
  </TheCard>
</template>

<style lang="postcss" scoped></style>
