<script lang='ts' setup>
</script>

<template>
  <Center>
    <Breadcrumbs/>
    <div class="flex justify-start pt-4">
      <ThePersonalia class="rounded-md"
                     data-view-transition-name="personalia">
        <template #avatar>
          <NuxtImg alt="Maikel Eckelboom"
                   class="object-cover absolute filter grayscale"
                   src="maikel-circle.svg"
          />
        </template>
        <template #title>
          maikel eckelboom
        </template>
        <template #subtitle>
          full-stack developer met een passie voor design en technologie.
        </template>
      </ThePersonalia>
    </div>
  </Center>
</template>

<style lang="postcss" scoped>
[data-view-transition-name="personalia"] {
  view-transition-name: personalia;
  contain: layout;
}

</style>
