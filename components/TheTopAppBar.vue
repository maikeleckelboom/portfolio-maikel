<script lang="ts" setup>
const router = useRouter()

interface Props {
  onRefresh?: () => void | false
  onBack?: () => void | false
  onMore?: () => void | false
}

interface Emits {
  refresh: () => void
  back: () => void
  more: () => void
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const events = reactive({
  onRefresh: !props.onRefresh
    ? false
    : () => {
        emit("refresh")
        props.onRefresh?.()
      },
  onBack: !props.onBack
    ? router.back
    : () => {
        emit("back")
        props.onBack?.() || router.back()
      },
  onMore: !props.onMore
    ? false
    : () => {
        emit("more")
        props.onMore?.()
      },
})

const { onRefresh, onBack, onMore } = toRefs(events)
</script>

<template>
  <div
    class="flex h-16 w-full items-center bg-surface-level-1"
    data-view-transition-name="top-bar"
  >
    <Center>
      <div class="grid grid-cols-2">
        <div class="col-span-1">
          <button @click="onBack" class="px-4 py-3">
            <Icon class="h-6 w-6" name="ic:baseline-arrow-back" />
          </button>
          <button v-if="onRefresh" @click="onRefresh" class="px-4 py-3">
            <Icon class="h-6 w-6" name="ic:baseline-refresh" />
          </button>
        </div>
        <div class="col-span-1 flex justify-end">
          <button v-if="onMore" @click="onMore" class="px-4 py-3">
            <Icon class="h-6 w-6" name="ic:baseline-more-vert" />
          </button>
        </div>
      </div>
    </Center>
  </div>
</template>

<style lang="postcss" scoped>
[data-view-transition-name="top-bar"] {
  view-transition-name: top-bar;
  contain: paint;
}
</style>

<style></style>
