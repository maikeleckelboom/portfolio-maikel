<script lang="ts" setup></script>

<template>
  <TheCursor v-if="useDevice().isDesktop" />
  <TheHeader />
  <main class="relative h-full w-full">
    <!-- Section 1 -->
    <section class="grid py-4">
      <div class="mx-auto w-full max-w-6xl">
        <div
          class="grid w-full grid-cols-[auto,1fr] gap-4 overflow-hidden pl-2 pr-2 pt-1.5 text-on-surface-variant"
          data-view-transition-name="personalia"
        >
          <TheAvatar class="flex-shrink-0" url="/maikel-foto.svg" />
          <div class="flex flex-col pr-1">
            <div class="flex flex-nowrap">
              <div class="mb-4 flex flex-col">
                <h1
                  class="mb-1.5 text-title-large font-semibold leading-tight text-on-surface md:text-headline-medium"
                >
                  Maikel Eckelboom
                </h1>
                <p>
                  Full-stack developer met een passie voor design en
                  technologie.
                </p>
              </div>
            </div>
            <div class="flex flex-1 flex-nowrap items-end">
              <NuxtLink
                class="group flex h-[48px] items-center rounded-full"
                to="/about"
              >
                <button
                  class="grid h-[38px] place-items-center rounded-full border-thin border-outline-variant px-6 text-label-large font-semibold group-hover:bg-primary group-hover:text-on-primary"
                >
                  meer over mij
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="flex w-full gap-6 px-2 py-4">
      <div class="mx-auto w-full max-w-6xl">
        <section class="flex flex-col">
          <div class="flex flex-nowrap items-baseline justify-between">
            <h1
              class="mb-4 -skew-x-6 text-2xl font-thin leading-tight tracking-wide"
            >
              werkervaring
            </h1>
            <NuxtLink
              class="grid h-[38px] place-items-center rounded-full border-thin border-outline-variant px-4 py-2 text-label-medium font-semibold hover:bg-primary hover:text-on-primary"
              to="/portfolio"
            >
              bekijk mijn werk
            </NuxtLink>
          </div>
          <div class="flex flex-col">
            <PortfolioCards />
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<style lang="postcss">
[data-view-transition-name="personalia"] {
  view-transition-name: personalia;
}
</style>
