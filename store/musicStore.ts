import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMusicStore = defineStore('search', () => {
  const searchInput = ref<string | null>(null)
  const isShowSearchDrawer = ref<boolean>(false)

  const toggleSearchDrawer = (isOpen: boolean) => {
    isShowSearchDrawer.value = isOpen
  }

  return { searchInput, isShowSearchDrawer, toggleSearchDrawer }
})
