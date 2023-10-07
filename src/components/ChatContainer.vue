<script setup lang="ts">
import ChatList from './chatList/ChatList.vue'
import ConversationItem from './ConversationItem.vue'
import { useChatStore } from '@/stores/chatStore'

const chatStore = useChatStore()
</script>

<template>
  <div :class="$style.chatContainer">
    <ChatList />
    <div v-if="chatStore.showConversation" :class="$style.conversation">
      <ConversationItem />
    </div>
    <div v-else :class="$style.simpleText">Please select chat</div>
  </div>
</template>

<style module>
.chatContainer {
  width: 700px;
  max-width: 900px;
  min-width: 300px;
  height: 500px;
  max-height: 500px;
  min-height: 200px;
  border: 1px solid rgba(0, 157, 255, 0.4);
  border-radius: 4px;
  display: flex;
  padding-right: 10px;
}
.conversation {
  min-width: 250px;
  width: 900px;
}
.simpleText {
  margin: auto;
}
</style>
