<script lang="ts" setup>
import { onBeforeRouteUpdate } from "#app"
import { storeToRefs } from "pinia"
import { useSoundStore } from "~/stores/useSoundStore"

const emit = defineEmits<{
  moved: () => void
}>()

const transitionDuration: number = 1_000 as const

const elCursor = ref<HTMLElement>()

whenever(elCursor, (cursorEl) => {
  cursorEl.style.setProperty("--t-duration", `${transitionDuration}ms`)
})

const parentElement = useParentElement()

const { x, y } = useMouse({ type: "client" })

const hasMoved = useState()

watchOnce([x, y], () => {
  hasMoved.value = true
  emit("moved")
})

const { element } = useElementByPoint({
  x,
  y,
})

const currentElement = ref<HTMLElement>()

useEventListener(parentElement, "pointermove", (ev: PointerEvent) => {
  const cursorEl = elCursor.value as HTMLElement
  cursorEl.style.setProperty("--x", ev.clientX.toString())
  cursorEl.style.setProperty("--y", ev.clientY.toString())

  if (!currentElement.value) {
    return
  }
  const el = currentElement.value as HTMLElement
  const rect = el.getBoundingClientRect()
  el.style.setProperty("--pointer-x", x.value.toString())
  el.style.setProperty("--pointer-y", y.value.toString())
  el.style.setProperty("--x", rect.left.toString())
  el.style.setProperty("--y", rect.top.toString())
  el.style.setProperty("--w", rect.width.toString())
  el.style.setProperty("--h", rect.height.toString())
})

const findAnchorOrButtonElement = (
  el: HTMLElement | null
): HTMLElement | undefined => {
  if (!el) {
    return undefined
  }
  if (el.tagName === "BUTTON" && el.parentElement?.tagName !== "A") {
    return el
  }
  if (el.tagName === "A") {
    return el
  }
  return findAnchorOrButtonElement(el.parentElement)
}

whenever(element, (el) => {
  if (findAnchorOrButtonElement(el)) {
    el.dataset.target = "true"
  }

  if (!el?.dataset?.target) {
    currentElement.value = undefined
    return
  }

  currentElement.value = el

  const rect = el.getBoundingClientRect()
  el.style.setProperty("--pointer-x", x.value.toString())
  el.style.setProperty("--pointer-y", y.value.toString())
  el.style.setProperty("--x", rect.left.toString())
  el.style.setProperty("--y", rect.top.toString())
  el.style.setProperty("--w", rect.width.toString())
  el.style.setProperty("--h", rect.height.toString())

  const cursorEl = elCursor.value as HTMLElement
  cursorEl.dataset.hover = "true"

  const radius = getComputedStyle(el).borderRadius
  cursorEl.style.setProperty("--radius", parseInt(radius).toString())
  cursorEl.style.setProperty("--hover-x", rect.left.toString())
  cursorEl.style.setProperty("--hover-y", rect.top.toString())
  cursorEl.style.setProperty("--w", rect.width.toString())
  cursorEl.style.setProperty("--h", rect.height.toString())

  useEventListener(el, "pointerleave", (_ev: PointerEvent) => {
    const cursorEl = elCursor.value as HTMLElement
    delete cursorEl.dataset.hover
    cursorEl.style.removeProperty("--radius")
    cursorEl.style.removeProperty("--hover-x")
    cursorEl.style.removeProperty("--hover-y")
    cursorEl.style.removeProperty("--w")
    cursorEl.style.removeProperty("--h")
  })
})

const hasLeft = usePageLeave()

watch(hasLeft, () => {
  const cursorEl = elCursor.value as HTMLElement
  cursorEl.classList.toggle("has-left-page", hasLeft.value)
})

const { isMuted } = storeToRefs(useSoundStore())

watchThrottled(
  currentElement,
  (el) => {
    if (!el || !navigator.userActivation.hasBeenActive || isMuted.value) {
      return
    }

    const audio = new Audio("/sounds/tube-swoosh.wav")
    audio.volume = 0.2
    audio.play()
  },
  {
    throttle: 200,
    leading: false,
    trailing: true,
  }
)

const router = useRouter()

const onRouteChange = () => {
  currentElement.value = undefined
}

onBeforeRouteUpdate(onRouteChange)
watch(router.currentRoute, onRouteChange)
</script>

<template>
  <Transition name="fade-scale">
    <div
      v-show="hasMoved"
      id="cursor"
      key="cursor"
      ref="elCursor"
      class="block-size-full inline-size-full pointer-events-none fixed inset-0 z-50 overflow-hidden rounded-xl opacity-90"
    >
      <div
        id="cursor-background"
        class="-z-10 h-full w-full bg-on-surface/50"
      />
      <div
        id="cursor-light"
        class="absolute left-0 top-0 z-10 w-full pt-[100%] opacity-0"
      />
    </div>
  </Transition>
</template>

<!--suppress CssUnresolvedCustomProperty -->
<style lang="postcss">
#cursor {
  view-transition-name: cursor;
}

#cursor {
  --base-w: 18;
  --base-h: 18;
  --w: var(--base-w);
  --h: var(--base-h);
  height: calc(var(--base-h) * 1px);
  width: calc(var(--base-w) * 1px);
  transform: translate(calc(1px * var(--x)), calc(1px * var(--y)))
    translate(-50%, -50%);
  transform-origin: center center;
  transition-property: transform, opacity;
  transition-duration: 0.1s, 0.3s;

  &[data-hover] {
    --px: calc(((var(--x) - var(--hover-x)) / var(--w)) - 0.5);
    --py: calc(((var(--y) - var(--hover-y)) / var(--h)) - 0.5);

    --dw: calc(var(--base-w) / var(--w));
    --dh: calc(var(--base-h) / var(--h));

    opacity: 0.2;
    border-radius: calc(var(--radius) * var(--dw) * 1px) /
      calc(var(--radius) * var(--dh) * 1px);
    transform: translate(calc(1px * var(--hover-x)), calc(1px * var(--hover-y)))
      translate(calc(150% * var(--px)), calc(150% * var(--py)))
      scale(calc(1 / var(--dw)), calc(1 / var(--dh))) translate(50%, 50%);
  }

  &.has-left-page {
    height: 0;
    width: 0;
    transition: all ease-out 0.3s;
  }
}

#cursor-light {
  background: radial-gradient(
    circle at 50%,
    var(--md-sys-color-on-surface-dark) 5%,
    transparent 50%
  );
  transform-origin: center center;
  transform: translate(calc(100% * var(--px)), calc(100% * var(--py)))
    scale(calc(20 * var(--dw)), calc(20 * var(--dh)));

  [data-hover] & {
    opacity: 1;
    transition: opacity 0.3s linear;
  }
}

[data-target="true"] {
  transition: transform 140ms linear, opacity 0.2s linear, all 0.14s ease-out;

  * {
    pointer-events: none;
  }

  &:hover {
    --px: calc(((var(--pointer-x) - var(--x)) / var(--w)) - 0.5);
    --py: calc(((var(--pointer-y) - var(--y)) / var(--h)) - 0.5);
    transform: translate(calc(var(--px) * 4px), calc(var(--py) * 4px));
    cursor: pointer;
  }
}

@media (prefers-reduced-motion) {
  #cursor:not([data-hover]):not([data-transitioning]) {
    transition: none;

    &[data-target="true"] {
      transition: none;
    }
  }
}
</style>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
  opacity: 1;
  transform: scale(1);
  transition: all 3ms ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0.25;
  transform: scale(0);
}
</style>
