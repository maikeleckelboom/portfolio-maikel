<script lang="ts" setup>
import { NavItem } from "~/types"

const list = ref<NavItem[]>([
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
  <NavList :list="list" />
</template>
