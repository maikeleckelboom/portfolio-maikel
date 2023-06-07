<script lang="ts" setup>
import { storeToRefs } from "pinia"
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
    class="relative left-0 right-0 top-0 z-20 flex w-full overflow-hidden px-0 py-2 xl:px-4"
  >
    <Center>
      <nav class="flex flex-row justify-between">
        <ul class="flex flex-1 items-center">
          <li>
            <NuxtLink class="flex rounded-full p-2" to="/">
              <button class="grid grid-flow-col place-items-center gap-4">
                <svg
                  class="h-10 w-10 fill-on-surface"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="66.93 427.87 113.23 456.33 113.23 246.52 255.5 333.76 398.77 246.52 401.11 452.92 445.07 424.39 445.07 164.29 256 278.07 66.93 164.29 66.93 427.87"
                  />
                  <polygon
                    points="120.79 146.3 171.52 179.8 267.58 122.17 267.58 55.67 120.79 146.3"
                  />
                  <polygon
                    points="208.14 198.03 256.66 232.01 352.46 170.93 352.46 108.38 208.14 198.03"
                  />
                </svg>
              </button>
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
