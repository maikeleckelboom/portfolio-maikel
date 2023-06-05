<script lang='ts' setup>
const hasMoved = useState()
const onMoved = () => {
  hasMoved.value = true
}
</script>

<template>
  <Transition name="fade-scale">
    <TheCursor
        v-if='useDevice().isDesktop'
        v-show="hasMoved"
        v-on:moved="onMoved"
    />
  </Transition>
  <Header/>
  <main class='relative h-full w-full'>
    <TheHomePage/>
  </main>
</template>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 2.5s ease;
  transform-origin: center;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0.25;
  transform: scale(0);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>