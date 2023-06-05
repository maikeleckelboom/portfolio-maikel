<script lang='ts' setup>
import { PortfolioData } from '~/types'

const { data } = defineProps<{
  data: PortfolioData
}>()


const yearFromDate = (date: string) => {
  const [year] = date.split('-')
  return year
}
</script>

<template>
  <TheCard :data='data'>
    <template #dates>
      <div class='border border-transparent w-fit rounded-md p-0.5'>
        <p class='text-body-medium font-bold '>
          {{ yearFromDate(data.date_end) }}
        </p>
        <p class='text-label-medium opacity-70 font-semibold'>
          {{ yearFromDate(data.date_start) }}
        </p>
      </div>
    </template>
    <template #heading>
      <p class='text-title-medium text-on-surface-variant leading-tight font-bold md:text-title-large md:font-bold'>
        {{ data.heading }} - {{ data.company_name }}
      </p>
      <p class='text-label-medium text-on-surface-variant leading-loose font-semibold'>
        {{ data.subheading }}
      </p>
    </template>
    <template #default>
      <p class='text-body-medium text-on-surface-variant'>
        {{ data.short_description }}
      </p>
    </template>
  </TheCard>
</template>

<style lang='postcss' scoped>

</style>