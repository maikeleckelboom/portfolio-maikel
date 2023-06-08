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
  <TheHeader />
  <Center>
    <Breadcrumbs />

    <main class="relative">
      <div class="px-3 pt-8">
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
      </div>
    </main>
  </Center>
</template>

<style lang="postcss">
#top-bar {
  view-transition-name: top-bar;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes translate-up {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

@keyframes translate-down {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

::view-transition-old(top-bar) {
  animation: translate-up 0.2s ease-out;
  animation-fill-mode: both;
}

::view-transition-new(top-bar) {
  animation: translate-down 0.2s ease-in;
  animation-fill-mode: both;
}
</style>
