<script lang="ts" setup>
import {
  argbFromHex,
  hexFromArgb,
  Theme,
  themeFromImage,
} from "@material/material-color-utilities"
import { PortfolioData } from "~/types"

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
            company_url,
            company_logo,
            company_source_color,
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
      .order("id", { ascending: true }),
  {
    transform: ({ data }): PortfolioData[] =>
      (data as PortfolioData[]).reduce((acc, curr) => {
        const { portfolio_tags, ...rest } = curr
        const tags = portfolio_tags.map((tag) => tag.tags)
        const href = `/portfolio/${curr.id}`
        return [
          ...acc,
          {
            ...rest,
            tags,
            href,
          },
        ]
      }, []),
  }
)

const active = useState()
</script>

<template>
  <TheNav>
    <ul>
      <li v-for="(data, i) in portfolio" :key="data.id">
        <NuxtLink
          :class="{ selected: active === data.id }"
          :to="data.href"
          @click.native="active = data.id"
        >
          <TheCard :data-source-color="data.company_source_color">
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
                  class="text-title-medium font-bold leading-tight text-on-surface-variant md:text-title-large md:font-bold"
                  data-transition-name="heading"
                >
                  {{ data.heading }} - {{ data.company_name }}
                </p>
                <p
                  class="pb-1.5 pt-1 text-label-medium font-semibold text-on-surface-variant"
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
            <template #footer></template>
          </TheCard>
        </NuxtLink>
      </li>
    </ul>
  </TheNav>
</template>

<style lang="postcss" scoped>
.selected [data-transition-name="heading"] {
  view-transition-name: heading;
  contain: paint;
}
</style>
