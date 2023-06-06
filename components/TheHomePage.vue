<script lang='ts' setup>
import type {NavItem} from '~/types'
import PortfolioCards from '~/components/PortfolioCards.vue'
import TheHeadline from '~/components/ThePersonalia.vue'
import TheAvatar from "~/components/TheAvatar.vue";
import ThePersonalia from "~/components/ThePersonalia.vue";

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
    <div class='flex w-full gap-6 '>

      <div class="py-2 max-w-2xl">
        <section class='flex flex-col'>
          <!--          <h1 class='text-2xl font-thin text-on-surface-variant tracking-wide leading-tight -skew-x-6'>-->
          <!--            over mij-->
          <!--          </h1>-->
          <ThePersonalia class=" rounded-md " data-view-transition-name="personalia">
            <template #avatar>
                <NuxtImg alt="Maikel Eckelboom"
                         class="object-cover absolute filter grayscale"
                         src="maikel-circle.svg"
                />
            </template>
            <template #title>
              Maikel Eckelboom
            </template>
            <template #subtitle>
              Full-stack developer met een passie voor design en technologie.
            </template>
            <template #footer>
              <NuxtLink
                  class='text-label-medium font-semibold grid place-items-center px-4 py-2 h-[38px] rounded-full
                  border-thin border-outline-variant hover:bg-primary hover:text-on-primary'
                  to='/about'
              >
                meer over mij
              </NuxtLink>
            </template>
          </ThePersonalia>
        </section>
        <section class='flex flex-col pt-4'>
          <div class='flex flex-nowrap justify-between items-baseline px-3 md:px-0'>
            <h1 class='text-2xl font-thin tracking-wide leading-tight -skew-x-6 mb-4'>
              werkervaring
            </h1>
            <NuxtLink
                class='text-label-medium font-semibold grid place-items-center px-4 py-2 rounded-full
                  border-thin border-outline-variant hover:bg-primary hover:text-on-primary h-[38px]'
                to='/portfolio'
            >
              bekijk alles
            </NuxtLink>
          </div>
          <div class='flex flex-col'>
            <PortfolioCards/>
          </div>
        </section>
      </div>

<!--      <div>-->
        <!--        <section class='flex flex-col'>-->
        <!--          <div class=" px-3 md:px-0">-->
        <!--            <div class='grid items-end gap-6 relative w-full '>-->
        <!--              <NavList :items='contactDetails'/>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </section>-->
<!--      </div>-->
    </div>
  </Center>
</template>

<style lang='postcss'>
[data-view-transition-name="personalia"] {
  view-transition-name: personalia;
}

::view-transition-old(personalia) {
}

::view-transition-new(personalia) {
}

</style>