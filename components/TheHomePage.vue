<script lang='ts' setup>
import type { NavItem } from '~/types'
import PortfolioCards from '~/components/PortfolioCards.vue'
import TheHeadline from '~/components/TheHeadline.vue'

const contactDetails = ref<NavItem[]>([

  {
    name: 'phone',
    value: '+31 6 255 77 452',
    icon: 'ic:outline-phone',
    href: 'tel:+31625577452'
  },
  {
    name: 'email',
    value: 'eckelboommaikel@gmail.com',
    icon: 'ic:outline-mail',
    href: 'mailto:eckelboommaikel@gmail.com'
  },
  {
    name: 'location',
    value: 'gelderland, overijssel',
    icon: 'ic:outline-location-on',
    href: 'https://goo.gl/maps/6Y5Z1Z2Z2Z2Z2Z2Z2'
  }
])

const socialsList = ref<NavItem[]>([
  {
    name: 'github',
    value: 'github',
    icon: 'ri:github-line',
    href: 'https://github.com/maikeleckelboom'
  },
  {
    name: 'linkedin',
    value: 'linkedin',
    icon: 'ri:linkedin-line',
    href: 'https://linkedin.com/in/maikeleckelboom'
  }
])
</script>

<template>
    <Center>
      <div class='grid grid-cols-1 md:grid-cols-2 w-full gap-6 p-4 md:p-0'>
        <div>
          <section class='flex flex-col'>
            <h2 class='text-2xl font-thin text-on-surface-variant tracking-wide leading-tight -skew-x-6'>
              over mij
            </h2>
            <TheHeadline class=''>
              <template #title>
                Maikel Eckelboom
              </template>
              <template #subtitle>
                Full-stack developer met een passie voor design en technologie.
              </template>
            </TheHeadline>
          </section>
          <section class='flex flex-col'>
            <div>
              <div class='flex flex-nowrap justify-between mb-4'>
                <h2 class='text-2xl font-thin text-on-surface-variant tracking-wide leading-tight -skew-x-6'>
                  werkervaring
                </h2>
              </div>
              <div class='flex flex-col'>
                <PortfolioCards />
              </div>
<!--              <div class='mt-4 mb-2'>-->
<!--                <h3 class='text-xl font-thin text-on-surface-variant tracking-wide leading-tight -skew-x-6'>-->
<!--                  vrije tijd-->
<!--                </h3>-->
<!--              </div>-->
<!--              <div class='flex flex-col'>-->
<!--                -->
<!--              </div>-->
            </div>
          </section>
        </div>
        <div>
          <section class='flex flex-col'>
            <h1 class='text-2xl font-thin text-on-surface-variant tracking-wide leading-tight -skew-x-6'>
              contact
            </h1>
            <div class='grid items-end gap-6 relative w-full '>
              <NavList :items='contactDetails' />
            </div>
          </section>
        </div>
      </div>
    </Center>
</template>

<style lang='postcss'>


</style>

<!--

<style scoped>
a.active {
  view-transition-name: clicked-link;
}
</style>

<style>
::view-transition-old(clicked-link),
::view-transition-new(clicked-link) {
  transition-duration: 300ms;
}

::view-transition-old(clicked-link) {
  transform: scale(0);
}

::view-transition-new(clicked-link) {
  transform: scale(1);
}
</style>

-->
