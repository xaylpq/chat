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
  const conversations = ref([] as IConversationItem[])

  // getters
  const getSelected = computed(() => selected.value)
  const getSelectedConversation = computed(() => conversations.value.find(cv => cv.convId === selected.value))
  const getConversations = computed(() => {
    setConversations(fetchUsers());
    return conversations.value
  })
  const showConversation = computed(() => selected.value.length)

  // actions
  function setSelected(id: string) {
    selected.value = id
  }
  function setConversations(items: IConversationItem[]) {
    conversations.value = items
  }

  return { getSelected, getConversations, showConversation, setSelected, setConversations, getSelectedConversation }
});
