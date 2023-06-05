<script lang='ts' setup>
import {onBeforeRouteUpdate} from '#app'

const emit = defineEmits<{
  moved: () => void
}>()

const transitionDuration: number = 1_000 as const

const elCursor = ref<HTMLElement>()

whenever(elCursor, (cursorEl) => {
  cursorEl.style.setProperty('--t-duration', `${transitionDuration}ms`)
})

const parentElement = useParentElement()

const {x, y} = useMouse({type: 'client'})

watchOnce([x, y], () => emit('moved'))

const {element} = useElementByPoint({x, y})

const currentElement = ref<HTMLElement>()

useEventListener(parentElement, 'pointermove', (ev: PointerEvent) => {
  const cursorEl = elCursor.value as HTMLElement
  cursorEl.style.setProperty('--x', ev.clientX.toString())
  cursorEl.style.setProperty('--y', ev.clientY.toString())

  if (!currentElement.value) return
  const el = currentElement.value as HTMLElement
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--pointer-x', x.value.toString())
  el.style.setProperty('--pointer-y', y.value.toString())
  el.style.setProperty('--x', rect.left.toString())
  el.style.setProperty('--y', rect.top.toString())
  el.style.setProperty('--w', rect.width.toString())
  el.style.setProperty('--h', rect.height.toString())
})


const findAnchorOrButtonElement = (el: HTMLElement | null): HTMLElement | undefined => {
  if (!el) return undefined
  if (el.tagName === 'BUTTON' && el.parentElement?.tagName !== 'A') return el
  if (el.tagName === 'A') return el
  return findAnchorOrButtonElement(el.parentElement)
}

whenever(element, (el) => {

  if (findAnchorOrButtonElement(el)) {
    el.dataset.target = 'true'
  }

  if (!el?.dataset?.target) {
    currentElement.value = undefined
    return
  }

  currentElement.value = el

  const rect = el.getBoundingClientRect()
  el.style.setProperty('--pointer-x', x.value.toString())
  el.style.setProperty('--pointer-y', y.value.toString())
  el.style.setProperty('--x', rect.left.toString())
  el.style.setProperty('--y', rect.top.toString())
  el.style.setProperty('--w', rect.width.toString())
  el.style.setProperty('--h', rect.height.toString())

  const cursorEl = elCursor.value as HTMLElement
  cursorEl.dataset.hover = 'true'

  const radius = getComputedStyle(el).borderRadius
  cursorEl.style.setProperty('--radius', parseInt(radius).toString())
  cursorEl.style.setProperty('--hover-x', rect.left.toString())
  cursorEl.style.setProperty('--hover-y', rect.top.toString())
  cursorEl.style.setProperty('--w', rect.width.toString())
  cursorEl.style.setProperty('--h', rect.height.toString())


  useEventListener(el, 'pointerleave', (_ev: PointerEvent) => {
    const cursorEl = elCursor.value as HTMLElement
    delete cursorEl.dataset.hover
    cursorEl.style.removeProperty('--radius')
    cursorEl.style.removeProperty('--hover-x')
    cursorEl.style.removeProperty('--hover-y')
    cursorEl.style.removeProperty('--w')
    cursorEl.style.removeProperty('--h')
  })
})

const hasLeft = usePageLeave()

watch(hasLeft, () => {
  const cursorEl = elCursor.value as HTMLElement
  cursorEl.classList.toggle('has-left-page', hasLeft.value)
})

watchThrottled(currentElement, (el) => {
  if (!el || !navigator.userActivation.hasBeenActive) {
    return
  }

  const audio = new Audio('/sounds/tube-swoosh.wav')
  audio.volume = 0.2
  audio.play()
}, {throttle: 200, leading: false, trailing: true})

const router = useRouter()

const onRouteChange = () => {
  currentElement.value = undefined
}

onBeforeRouteUpdate(onRouteChange)
watch(router.currentRoute, onRouteChange)
</script>

<template>
  <div id='cursor'
       ref='elCursor'
       class='fixed z-50 inset-0 rounded-xl block-size-full inline-size-full pointer-events-none overflow-hidden opacity-90'>
    <div id='cursor-background' class='w-full h-full -z-10 bg-on-surface/50'/>
    <div id='cursor-light' class='absolute top-0 left-0 w-full pt-[100%] z-10 opacity-0'/>
  </div>
</template>

<!--suppress CssUnresolvedCustomProperty -->
<style lang='postcss'>
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
  transform: translate(calc(1px * var(--x)), calc(1px * var(--y))) translate(-50%, -50%);
  transform-origin: center center;
  transition-property: transform, opacity;
  transition-duration: 0.1s, 0.3s;

  &[data-hover] {
    --px: calc(((var(--x) - var(--hover-x)) / var(--w)) - 0.5);
    --py: calc(((var(--y) - var(--hover-y)) / var(--h)) - 0.5);

    --dw: calc(var(--base-w) / var(--w));
    --dh: calc(var(--base-h) / var(--h));

    opacity: 0.2;
    border-radius: calc(var(--radius) * var(--dw) * 1px) /calc(var(--radius) * var(--dh) * 1px);
    transform: translate(calc(1px * var(--hover-x)), calc(1px * var(--hover-y))) translate(calc(150% * var(--px)), calc(150% * var(--py))) scale(calc(1 / var(--dw)), calc(1 / var(--dh))) translate(50%, 50%);
  }

  &.has-left-page {
    height: 0;
    width: 0;
    transition: all ease-out 0.3s;
  }
}

#cursor-light {
  background: radial-gradient(circle at 50%, var(--md-sys-color-on-surface-dark) 5%, transparent 50%);
  transform-origin: center center;
  transform: translate(calc(100% * var(--px)), calc(100% * var(--py))) scale(calc(20 * var(--dw)), calc(20 * var(--dh)));

  [data-hover] & {
    opacity: 1;
    transition: opacity 0.3s linear;
  }
}

[data-target="true"] {
  transition: transform 100ms linear, opacity 0.2s linear;

  &:hover {
    --px: calc(((var(--pointer-x) - var(--x)) / var(--w)) - 0.5);
    --py: calc(((var(--pointer-y) - var(--y)) / var(--h)) - 0.5);
    transform: translate(calc(var(--px) * 4px), calc(var(--py) * 4px));
    cursor: pointer;

    * {
      pointer-events: none;
    }
  }
}

@media (prefers-reduced-motion) {
  #cursor:not([data-hover]):not([data-transitioning]) {
    transition: none;
  }
}
</style>