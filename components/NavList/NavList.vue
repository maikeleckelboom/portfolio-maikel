<script lang="ts" setup>
import { NavItem } from "~/types"

const { list } = defineProps<{
  list: NavItem[]
}>()
</script>

<template>
  <nav>
    <ul>
      <NavListItem v-for="item in list" :key="item.name" :item="item" />
    </ul>
  </nav>
</template>
