<script lang="ts" setup>
import { PortfolioData } from "~/types"

const router = useRouter()
const client = useSupabaseClient()

const { data, error, refresh } = (await useAsyncData(
  "portfolio-id",
  async () =>
    await client
      .from("portfolio")
      .select(`*`)
      .eq("id", router.currentRoute.value.params.id)
      .single(),
  {
    transform: ({ data }) => data,
  }
)) as { data: PortfolioData; error: Error; refresh: () => void }

const yearFromDate = (date: string) => {
  const [year] = date.split("-")
  return year
}
</script>

<template>
  <TheTopAppBar id="the-top-bar"> </TheTopAppBar>
  <main class="relative">
    <div class="px-3 pt-8">
      <Center>
        <div>
          <p
            class="text-headline-small font-bold md:text-headline-large md:font-bold"
          >
            {{ data.heading }} - {{ data.company_name }}
          </p>
          <p
            class="text-title-medium leading-normal text-on-surface-variant md:text-headline-small"
          >
            {{ data.subheading }}
          </p>
        </div>
      </Center>
    </div>
  </main>
</template>

<style lang="postcss">
#the-top-bar {
  view-transition-name: top-bar;
}

::view-transition-old(top-bar),
::view-transition-new(top-bar) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

::view-transition-old(top-bar) {
  transform: translateY(-100%);
}

::view-transition-new(top-bar) {
  transform: translateY(0);
}
</style>
