<script lang="ts" setup>
import { NavItem } from "~/types"

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
</script>

<template>
  <Center>
    <Breadcrumbs />
    <div class="flex justify-start">
      <ThePersonalia
        class="gap-4 rounded-md"
        data-view-transition-name="personalia"
      >
        <template #avatar>
          <NuxtImg
            alt="Maikel Eckelboom"
            class="absolute object-cover grayscale filter"
            src="maikel-circle.svg"
          />
        </template>
        <template #title> Maikel Eckelboom </template>
        <template #subtitle>
          Full-stack developer met een passie voor design en technologie.
        </template>
      </ThePersonalia>
    </div>
    <div>
      <section class="flex flex-col">
        <div class="px-3 md:px-0">
          <div class="relative grid w-full items-end gap-6">
            <NavList :items="contactDetails" />
          </div>
        </div>
      </section>
    </div>
  </Center>
</template>

<style lang="postcss" scoped>
[data-view-transition-name="personalia"] {
  view-transition-name: personalia;
  contain: layout;
}
</style>
