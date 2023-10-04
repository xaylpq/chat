<script setup lang="ts">
import ChatList from './chatList/ChatList.vue'
import ConversationItem from './ConversationItem.vue'
import { useChatStore } from '@/stores/chatStore'

const chatStore = useChatStore()
</script>

<template>
  <div class="chat-container">
    <ChatList />
    <div v-if="chatStore.showConversation">
      <ConversationItem />
    </div>
    <div v-else class="simple-text">Please select chat</div>
  </div>
</template>

<style>
.chat-container {
  max-width: 800px;
  max-height: 500px;
  border: 1px solid rgba(0, 157, 255, 0.4);
  border-radius: 4px;
  display: flex;
  padding-right: 20px;
}

.simple-text {
  margin: auto;
}
</style>
