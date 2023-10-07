import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchConversations, fetchConversation } from '@/api/handleApi'

export interface IConversationMessage {
  id?: string,
  time: string,
  author: string,
  message: string,
  sended: boolean,
  viewed: boolean
}

export interface IConversationItem {
  convId: string,
  convName: string,
  lastMessage?: IConversationMessage,
  imgURL?: string,
  time: string,
  muted: boolean,
  count?: number
}

export const useChatStore = defineStore('chat', () => {
  // state
  const selected = ref()
  const conversations = ref([] as IConversationItem[])
  const selectedConversation = ref([] as IConversationMessage[])

  // getters
  const getSelected = computed(() => selected.value)
  const getConversations = computed(() => conversations.value);
  const updateConversations = computed(() => {
    setConversations(fetchConversations());
    return conversations.value
  });
  const showConversation = computed(() => selected.value)
  const getSelectedConversation = computed(() => {
    return selectedConversation.value
  });
  const updateConversation = computed(() => {
    setSelectedConversation(fetchConversation(selected.value));
    return selectedConversation.value
  })

  // actions
  function setSelected(item: IConversationItem) {
    selected.value = item;
  }
  function setSelectedId(id: IConversationItem['convId']) {
    selected.value = conversations.value.find(i => i.convId === id);
  }
  function setConversations(items: IConversationItem[]) {
    conversations.value = items;
  }
  function setSelectedConversation(items: IConversationMessage[]) {
    selectedConversation.value = items;
  }

  return {
    getSelected,
    getConversations,
    updateConversations,
    showConversation,
    getSelectedConversation,
    updateConversation,

    setSelected,
    setSelectedId,
    setConversations,
    setSelectedConversation
  }
});
