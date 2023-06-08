<script lang="ts" setup></script>

<template>
  <TheCursor v-if="useDevice().isDesktop" />
  <TheHeader />

  <div class="grid" data-view-transition-name="sheet">
    <Center>
      <Breadcrumbs />

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
                  <p class="text-title-medium text-on-surface-variant">
                    Full-stack developer met een passie voor design en
                    technologie.
                  </p>
                </div>
              </div>
              <div class="flex flex-1 flex-nowrap items-end">
                <!--                <NuxtLink
                  class="group flex h-[48px] items-center rounded-full"
                  to="/about"
                >
                  <button
                    class="grid h-[38px] place-items-center rounded-full border-thin border-outline-variant px-6 text-label-large font-semibold group-hover:bg-primary group-hover:text-on-primary"
                  >
                    meer over mij
                  </button>
                </NuxtLink>-->
              </div>
              <div data-view-transition-name="about" class="max-w-md">
                <p class="mb-4">
                  I love to create beautiful and functional applications that
                  are easy to use and maintain.
                </p>

                <!--                <div class="mt-8 flex flex-wrap">
                  <TheContactDetails />
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </section>
    </Center>
  </div>
</template>

<style lang="postcss" scoped>
[data-view-transition-name="about"] {
  view-transition-name: about;
}
</style>

<style>
::view-transition-old(about) {
  animation: aboutTextOut 200ms ease-in;
  animation-fill-mode: both;
}

::view-transition-new(about) {
  animation: aboutTextIn 200ms ease-out;
  animation-fill-mode: both;
}

@keyframes aboutTextIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes aboutTextOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-12px);
  }
}
</style>
