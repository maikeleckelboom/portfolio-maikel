<script lang='ts' setup>
import {PortfolioData} from "~/types";

const router = useRouter()
const client = useSupabaseClient()

const {data, error, refresh} = await useAsyncData(
    'portfolio-id',
    async () => await client
        .from('portfolio')
        .select(`*`)
        .eq('id', router.currentRoute.value.params.id)
        .single(),
    {
      transform: ({data}) => data
    }
) as { data: PortfolioData, error: Error, refresh: () => void }


const yearFromDate = (date: string) => {
  const [year] = date.split('-')
  return year
}
</script>

<template>
  <main class='relative'>
    <TheHeader/>
    <div class="">
      <Center>
        <div class="grid grid-cols-12  pt-4 pb-2">
          <div class='col-span-3 h-fit xl:col-span-1 px-4 py-1.5'>
            <div class='border border-transparent w-fit'>
              <p class='text-title-large font-bold'>
                {{ yearFromDate(data.date_end) }}
              </p>
              <p class='text-title-medium opacity-70 font-semibold'>
                {{ yearFromDate(data.date_start) }}
              </p>
            </div>
          </div>
          <div class='col-span-9 xl:col-span-11 mb-2 pl-8 border-l-2 border-outline-variant'>
            <p class='text-headline-small font-bold md:text-headline-large md:font-bold'>
              {{ data.heading }} - {{ data.company_name }}
            </p>
            <p class='text-title-medium md:text-headline-small text-on-surface-variant leading-normal '>
              {{ data.subheading }}
            </p>
          </div>
        </div>
      </Center>
    </div>
  </main>
</template>

<style lang='postcss' scoped>
[data-view-transition-name="heading"] {
  view-transition-name: heading;
}

::view-transition-old(heading) {
}

::view-transition-image-pair(heading) {
}

::view-transition-group(heading) {
}

</style>
