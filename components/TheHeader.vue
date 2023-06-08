<script lang="ts" setup>
import { storeToRefs } from "pinia"
import TheLogo from "~/components/Auth/TheLogo.vue"
import { useSoundStore } from "~/stores/useSoundStore"

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
}
const soundStore = useSoundStore()
const { toggleMuted } = soundStore,
  { isMuted } = storeToRefs(soundStore)
</script>

<template>
  <header
    class="relative left-0 right-0 top-0 z-20 flex w-full overflow-hidden px-0 xl:px-4"
  >
    <Center>
      <nav class="flex flex-row justify-between">
        <ul class="flex flex-1 items-center">
          <li>
            <NuxtLink class="flex rounded-full p-2" to="/">
              <TheLogo />
            </NuxtLink>
          </li>
        </ul>
        <ul class="flex flex-1 justify-end">
          <li>
            <button
              class="grid place-items-center rounded-full p-4"
              @click="toggleMuted"
            >
              <Icon
                v-if="isMuted"
                class="h-6 w-6 text-on-surface group-hover:text-on-surface-variant"
                name="ic:round-volume-mute"
              />
              <Icon
                v-else
                class="h-6 w-6 text-on-surface group-hover:text-on-surface-variant"
                name="ic:round-volume-up"
              />
            </button>
          </li>
          <li>
            <button
              class="grid place-items-center rounded-full p-4"
              data-target="true"
              @click="toggleColorMode"
            >
              <Icon
                v-if="colorMode.value === 'light'"
                class="h-6 w-6 text-on-surface"
                name="ic:round-mode-night"
              />
              <Icon
                v-else
                class="h-6 w-6 text-on-surface"
                name="ic:round-light-mode"
              />
            </button>
          </li>
        </ul>
      </nav>
    </Center>
  </header>
</template>

<style scoped>
header {
  view-transition-name: header;
}
</style>
