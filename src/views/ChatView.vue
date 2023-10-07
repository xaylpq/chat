<script setup lang="ts">
import ChatContainer from '../components/ChatContainer.vue'
import { useRoute } from 'vue-router'
import { useChatStore } from '../stores/chatStore'

const chatStore = useChatStore()
chatStore.updateConversations
const id = useRoute().params.chatId?.toString()
if (id) {
  chatStore.setSelectedId(id)
  chatStore.updateConversation
}
</script>

<template>
  <div>
    <h1>This is an chat {{ chatStore.getSelected?.convId }} page</h1>
    <ChatContainer />
  </div>
</template>

<style>
h1 {
  text-align: center;
}
</style>
