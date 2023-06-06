<script lang='ts' setup>

const hasMoved = useState()
const onMoved = () => {
  hasMoved.value = true
}
</script>

<template>
  <TheCursor
      v-if='useDevice().isDesktop'
      v-show="hasMoved"
      @moved="onMoved"
  />
  <TheHeader/>
  <main class='relative '>
    <Center>
      <Breadcrumbs/>
    </Center>
  </main>
</template>