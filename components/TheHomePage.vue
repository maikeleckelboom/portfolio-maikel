<script lang="ts" setup>
import type { NavItem } from "~/types"

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
</script>

<template>
  <div class="" data-component="TheHomePage">
    <div></div>
    <div>
      <svg>
        <filter id="f">
          <feTurbulence baseFrequency="7.5" type="fractalNoise" />
        </filter>
      </svg>
    </div>
  </div>
</template>

<style lang="postcss">
[data-view-transition-name="personalia"] {
  view-transition-name: personalia;
}
</style>
