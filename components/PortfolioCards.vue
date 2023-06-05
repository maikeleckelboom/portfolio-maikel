<script lang='ts' setup>
import {PortfolioData} from '~/types'

const {data: portfolio} = await useAsyncData(
    'portfolio',
    async () => await useSupabaseClient()
        .from('portfolio')
        .select(`
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
     `)
        .order('created_at'),
    {
      transform: ({data}): PortfolioData[] => (data as PortfolioData[]).reduce((acc, curr) => {
        const {portfolio_tags, ...rest} = curr
        const tags = portfolio_tags.map(tag => tag.tags)
        const href = `/portfolio/${curr.id}`
        return [...acc, {...rest, tags, href}]
      }, [])
    }
)
</script>

<template>
  <nav>
    <ul class='grid gap-2'>
      <li
          v-for='data in portfolio'
          :key='data.id'>
        <NuxtLink
            :to='data.href'
        >
          <PortfolioCard
              :data='data'
          />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang='postcss' scoped>
li {
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}

nav:has(li:hover):hover ul > * {
  opacity: 0.4;
  transform: scale(0.96);
}

nav:has(li:hover) ul > *:hover {
  opacity: 1;
  transform: scale(1);
  transition-delay: 0ms, 0ms;
}
</style>