<script lang="ts" setup>
import { PortfolioData } from "~/types"
import TheNav from "~/components/TheNav.vue"

const { data: portfolio } = await useAsyncData(
  "portfolio",
  async () =>
    await useSupabaseClient()
      .from("portfolio")
      .select(
        `
            id,
            heading,
            subheading,
            description,
            short_description,
            company_name,
            date_start,
            date_end,
            created_at,
            portfolio_tags(
              tags (
                id,
                name
              )
            )
     `
      )
      .order("created_at"),
  {
    transform: ({ data }): PortfolioData[] =>
      (data as PortfolioData[]).reduce((acc, curr) => {
        const { portfolio_tags, ...rest } = curr
        const tags = portfolio_tags.map((tag) => tag.tags)
        const href = `/portfolio/${curr.id}`
        return [...acc, { ...rest, tags, href }]
      }, []),
  }
)
const active = useState()

const yearFromDate = (date: string) => {
  const [year] = date.split("-")
  return year
}
</script>

<template>
  <TheNav>
    <ul class="grid gap-2">
      <li v-for="data in portfolio" :key="data.id">
        <NuxtLink
          :class="{ selected: active === data.id }"
          :to="data.href"
          @click.native="active = data.id"
        >
          <TheCard :data="data">
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
                  data-transition-name="heading"
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
        </NuxtLink>
      </li>
    </ul>
  </TheNav>
</template>

<style lang="postcss" scoped></style>
