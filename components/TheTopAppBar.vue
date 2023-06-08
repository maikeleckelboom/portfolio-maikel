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
      <div class="flex flex-nowrap items-center">
        <button class="px-4 py-3" @click="onBack">
          <Icon class="h-6 w-6" name="ic:baseline-arrow-back" />
        </button>
        <slot> </slot>
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
