<script setup lang="ts">
import ChatContainer from '../components/ChatContainer.vue'
import { useRoute } from 'vue-router'
import { useChatStore } from '../stores/chatStore'

const id = useRoute().params.chatId?.toString()
const chatStore = useChatStore()
chatStore.setSelected(id || '')
</script>

<template>
  <div>
    <h1>This is an chat {{ $route.params.chatId }} page</h1>
    <ChatContainer />
  </div>
</template>

<style>
h1 {
  text-align: center;
}
</style>
