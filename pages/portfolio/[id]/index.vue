<script lang="ts" setup>
import { PortfolioData } from "~/types";

const router = useRouter();
const client = useSupabaseClient();

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
)) as { data: PortfolioData; error: Error; refresh: () => void };

const yearFromDate = (date: string) => {
  const [year] = date.split("-");
  return year;
};
</script>

<template>
  <main class="relative">
    <TheHeader />
    <div class="">
      <Center>
        <div class="grid grid-cols-12 pb-2 pt-4">
          <div class="col-span-3 h-fit px-4 py-1.5 xl:col-span-1">
            <div class="w-fit border border-transparent">
              <p class="text-title-large font-bold">
                {{ yearFromDate(data.date_end) }}
              </p>
              <p class="text-title-medium font-semibold opacity-70">
                {{ yearFromDate(data.date_start) }}
              </p>
            </div>
          </div>
          <div
            class="col-span-9 mb-2 border-l-2 border-outline-variant pl-8 xl:col-span-11"
          >
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
      </Center>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
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
