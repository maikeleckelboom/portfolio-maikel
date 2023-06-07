<script lang="ts" setup>
import type { NavItem } from "~/types"
import PortfolioCards from "~/components/PortfolioCards.vue"
import TheHeadline from "~/components/ThePersonalia.vue"
import TheAvatar from "~/components/TheAvatar.vue"
import ThePersonalia from "~/components/ThePersonalia.vue"

const contactDetails = ref<NavItem[]>([
  {
    name: "phone",
    value: "+31 6 255 77 452",
    icon: "ic:outline-phone",
    href: "tel:+31625577452",
  },
  {
    name: "email",
    value: "eckelboommaikel@gmail.com",
    icon: "ic:outline-mail",
    href: "mailto:eckelboommaikel@gmail.com",
  },
  {
    name: "location",
    value: "gelderland, overijssel",
    icon: "ic:outline-location-on",
    href: "https://goo.gl/maps/6Y5Z1Z2Z2Z2Z2Z2Z2",
  },
])

const socialsList = ref<NavItem[]>([
  {
    name: "github",
    value: "github",
    icon: "ri:github-line",
    href: "https://github.com/maikeleckelboom",
  },
  {
    name: "linkedin",
    value: "linkedin",
    icon: "ri:linkedin-line",
    href: "https://linkedin.com/in/maikeleckelboom",
  },
])

const selectedTitle = useState()
</script>

<template>
  <div class="">
    <Center>
      <div class="grid">
        <ThePersonalia data-view-transition-name="personalia">
          <template #avatar>
            <NuxtImg
              alt="Maikel Eckelboom"
              class="absolute object-cover grayscale filter"
              src="maikel-circle.svg"
            />
          </template>
          <template #title> Maikel Eckelboom</template>
          <template #subtitle>
            Full-stack developer met een passie voor design en technologie.
          </template>
          <template #footer>
            <NuxtLink
              class="grid h-[38px] place-items-center rounded-full border-thin border-outline-variant px-4 py-2 text-label-medium font-semibold hover:bg-primary hover:text-on-primary"
              to="/about"
            >
              meer over mij
            </NuxtLink>
          </template>
        </ThePersonalia>
      </div>
    </Center>
  </div>
  <div class="bg-surface">
    <Center>
      <div class="flex w-full gap-6 py-2">
        <section class="flex flex-col pt-4">
          <div
            class="flex flex-nowrap items-baseline justify-between px-3 md:px-0"
          >
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
    </Center>
  </div>
</template>

<style lang="postcss">
[data-view-transition-name="personalia"] {
  view-transition-name: personalia;
}

::view-transition-old(personalia) {
}

::view-transition-new(personalia) {
}
</style>
