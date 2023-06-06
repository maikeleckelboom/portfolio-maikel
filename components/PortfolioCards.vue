<script lang='ts' setup>
import {PortfolioData} from '~/types'
import TheNav from "~/components/TheNav.vue";

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
const active = useState()
</script>

<template>
  <TheNav>
    <ul class='grid gap-2'>
      <li v-for='data in portfolio' :key='data.id'>
        <NuxtLink :class="{'selected': active === data.id}" :to='data.href' @click.native='active = data.id'>
          <PortfolioCard :data='data'/>
        </NuxtLink>
      </li>
    </ul>
  </TheNav>
</template>

<style lang='postcss' scoped>

</style>