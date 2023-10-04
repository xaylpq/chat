import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// ref - state, computed - getters, function - actions
export const useSelectedStore = defineStore('selected', () => {
  const selected = ref('')
  const getSelected = computed(() => selected.value)
  const showConversation = computed(() => selected.value.length)
  function setSelected(id: string) {
    selected.value = id
  }

  return { getSelected, showConversation, setSelected }
})
