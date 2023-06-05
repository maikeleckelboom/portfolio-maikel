<script lang='ts' setup>
const router = useRouter()
const client = useSupabaseClient()

const { data, error, refresh } = await useAsyncData(
  'portfolio-id',
  async () => await client
    .from('portfolio')
    .select(`*`)
    .eq('id', router.currentRoute.value.params.id)
    .single()
  , { transform: ({ data }) => data })

</script>

<template>
  <main class='relative'>
    <Header/>
    <Center>
      <Breadcrumbs />
      <div v-if='error'>
        {{ error }}
      </div>
      <div v-else>
        <pre>{{ data }}</pre>
      </div>
    </Center>
  </main>
</template>

<style lang='postcss' scoped>
::view-transition-old(header) {

}

::view-transition-new(header) {

}

::view-transition-old(header),
::view-transition-new(header) {

}
</style>
