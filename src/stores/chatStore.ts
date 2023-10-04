import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchUsers } from '@/api/handleApi'

export interface IConversationMessage {
  date: string,
  author: string,
  message: string,
  count?: number
}

export interface IConversationItem {
  convId: string,
  convName: string,
  lastMessage?: IConversationMessage,
  imgURL?: string,
  time: string,
  sended: boolean,
  viewed: boolean,
  muted: boolean
}

export const useChatStore = defineStore('chat', () => {
  // state
  const selected = ref('')
  const users = ref([] as IConversationItem[])

  // getters
  const getSelected = computed(() => selected.value)
  const getUsers = computed(() => {
    setUsers(fetchUsers());
    return users.value
  })
  const showConversation = computed(() => selected.value.length)
  
  // actions
  function setSelected(id: string) {
    selected.value = id
  }
  function setUsers(items: IConversationItem[]) {
    users.value = items
  }

  return { getSelected, getUsers, showConversation, setSelected }
});
