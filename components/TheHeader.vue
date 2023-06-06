<script lang='ts' setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header
    class='relative z-20 top-0 left-0 right-0 w-full px-0 py-2 xl:px-4 flex overflow-hidden bg-surface'>
    <Center>
      <nav class='flex flex-row justify-between'>
        <ul class='flex items-center flex-1'>
          <li>
            <NuxtLink  to='/' class="rounded-full p-2 flex">
              <button class='grid grid-flow-col gap-4 place-items-center'>
                <svg class='h-10 w-10 fill-on-surface' viewBox='0 0 512 512'
                     xmlns='http://www.w3.org/2000/svg'>
                  <polygon
                    points='66.93 427.87 113.23 456.33 113.23 246.52 255.5 333.76 398.77 246.52 401.11 452.92 445.07 424.39 445.07 164.29 256 278.07 66.93 164.29 66.93 427.87'
                  />
                  <polygon points='120.79 146.3 171.52 179.8 267.58 122.17 267.58 55.67 120.79 146.3' />
                  <polygon points='208.14 198.03 256.66 232.01 352.46 170.93 352.46 108.38 208.14 198.03' />
                </svg>
              </button>
            </NuxtLink>
          </li>
        </ul>
        <ul class='flex justify-end flex-1'>
          <li>
            <button class='p-4 grid place-items-center rounded-full' data-target='true'>
              <Icon class='h-6 w-6 text-on-surface' name='ic:round-volume-off' />
            </button>
          </li>
          <li>
            <button
              class='p-4 grid place-items-center rounded-full'
              data-target='true' @click='toggleColorMode'>
              <Icon v-if='colorMode.value === "light"' class='h-6 w-6 text-on-surface' name='ic:round-mode-night' />
              <Icon v-else class='h-6 w-6 text-on-surface' name='ic:round-light-mode' />
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
/*
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background-image: linear-gradient(0, rgba(var(--md-sys-color-surface-rgb) / 1) 0%, rgba(var(--md-sys-color-on-surface-rgb) / 0) 100%);
    z-index: -1;
    pointer-events: none;
  }*/
}
</style>