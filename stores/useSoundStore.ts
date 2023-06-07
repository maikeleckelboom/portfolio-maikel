export const useSoundStore = defineStore("sound", () => {
  const isMuted = ref<boolean>(false)

  const toggleMuted = () => {
    isMuted.value = !isMuted.value
  }

  return {
    isMuted,
    toggleMuted,
  }
})
