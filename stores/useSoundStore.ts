export const useSoundStore = defineStore("sound", () => {
  const isMuted = ref<boolean>(true)

  const toggleMuted = () => {
    isMuted.value = !isMuted.value
  }

  return {
    isMuted,
    toggleMuted,
  }
})
