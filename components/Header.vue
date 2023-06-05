<script lang='ts' setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header
    class='relative bg-surface z-20 top-0 left-0 right-0 w-full py-4 px-3 md:px-0 flex overflow-hidden '>
    <Center>
      <nav class='flex flex-row justify-between pb-8'>
        <ul class='flex items-center flex-1'>
          <li>
            <NuxtLink  to='/' class="rounded-full p-2">
              <button class='grid grid-flow-col gap-4 place-items-center'>
                <svg class='h-12 w-12 fill-on-surface' viewBox='0 0 512 512'
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
            <button
              class='p-4 grid place-items-center rounded-full'
              data-target='true' @click='toggleColorMode'>
              <Icon v-if='colorMode.value === "light"' class='h-6 w-6 text-on-surface' name='ic:round-mode-night' />
              <Icon v-else class='h-6 w-6 text-on-surface' name='ic:round-light-mode' />
            </button>
          </li>
          <li>
            <button class='p-4 grid place-items-center rounded-full' data-target='true'>
              <Icon class='h-6 w-6 text-on-surface' name='ic:round-volume-off' />
            </button>
          </li>
        </ul>
      </nav>
    </Center>
    <slot name='background-cover'>
<!--      <NuxtImg class='background-cover object-cover absolute top-0 left-0 right-0 w-full -z-10 mix-blend-color-dodge' src='bubbles.svg' />-->
    </slot>
  </header>
</template>

<style scoped>

header {
  view-transition-name: header;
  clip-path: polygon(0% 0%, 0% 82.5%, 1.69492% 84.3293%, 3.38983% 86.1385%, 5.08475% 87.9078%, 6.77966% 89.6179%, 8.47458% 91.25%, 10.1695% 92.7862%, 11.8644% 94.2098%, 13.5593% 95.505%, 15.2542% 96.6578%, 16.9492% 97.6555%, 18.6441% 98.487%, 20.339% 99.1435%, 22.0339% 99.6176%, 23.7288% 99.9041%, 25.4237% 100%, 27.1186% 99.9041%, 28.8136% 99.6176%, 30.5085% 99.1435%, 32.2034% 98.487%, 33.8983% 97.6555%, 35.5932% 96.6578%, 37.2881% 95.505%, 38.9831% 94.2098%, 40.678% 92.7862%, 42.3729% 91.25%, 44.0678% 89.6179%, 45.7627% 87.9078%, 47.4576% 86.1385%, 49.1525% 84.3293%, 50.8475% 82.5%, 52.5424% 80.6708%, 54.2373% 78.8616%, 55.9322% 77.0922%, 57.6271% 75.3821%, 59.322% 73.75%, 61.017% 72.2138%, 62.7119% 70.7902%, 64.4068% 69.495%, 66.1017% 68.3422%, 67.7966% 67.3446%, 69.4915% 66.513%, 71.1864% 65.8565%, 72.8814% 65.3824%, 74.5763% 65.0959%, 76.2712% 65%, 77.9661% 65.0959%, 79.661% 65.3824%, 81.3559% 65.8565%, 83.0509% 66.513%, 84.7458% 67.3446%, 86.4407% 68.3422%, 88.1356% 69.495%, 89.8305% 70.7902%, 91.5254% 72.2138%, 93.2203% 73.75%, 94.9153% 75.3821%, 96.6102% 77.0922%, 98.3051% 78.8616%, 100% 80.6708%, 100% 0%);
  shape-outside: polygon(0% 0%, 0% 82.5%, 1.69492% 84.3293%, 3.38983% 86.1385%, 5.08475% 87.9078%, 6.77966% 89.6179%, 8.47458% 91.25%, 10.1695% 92.7862%, 11.8644% 94.2098%, 13.5593% 95.505%, 15.2542% 96.6578%, 16.9492% 97.6555%, 18.6441% 98.487%, 20.339% 99.1435%, 22.0339% 99.6176%, 23.7288% 99.9041%, 25.4237% 100%, 27.1186% 99.9041%, 28.8136% 99.6176%, 30.5085% 99.1435%, 32.2034% 98.487%, 33.8983% 97.6555%, 35.5932% 96.6578%, 37.2881% 95.505%, 38.9831% 94.2098%, 40.678% 92.7862%, 42.3729% 91.25%, 44.0678% 89.6179%, 45.7627% 87.9078%, 47.4576% 86.1385%, 49.1525% 84.3293%, 50.8475% 82.5%, 52.5424% 80.6708%, 54.2373% 78.8616%, 55.9322% 77.0922%, 57.6271% 75.3821%, 59.322% 73.75%, 61.017% 72.2138%, 62.7119% 70.7902%, 64.4068% 69.495%, 66.1017% 68.3422%, 67.7966% 67.3446%, 69.4915% 66.513%, 71.1864% 65.8565%, 72.8814% 65.3824%, 74.5763% 65.0959%, 76.2712% 65%, 77.9661% 65.0959%, 79.661% 65.3824%, 81.3559% 65.8565%, 83.0509% 66.513%, 84.7458% 67.3446%, 86.4407% 68.3422%, 88.1356% 69.495%, 89.8305% 70.7902%, 91.5254% 72.2138%, 93.2203% 73.75%, 94.9153% 75.3821%, 96.6102% 77.0922%, 98.3051% 78.8616%, 100% 80.6708%, 100% 0%);

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background-image: linear-gradient(0, rgba(var(--md-sys-color-surface-rgb) / 1) 0%, rgba(var(--md-sys-color-on-surface-rgb) / 0) 100%);
    z-index: 10;
    pointer-events: none;
  }
}
</style>