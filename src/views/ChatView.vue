<script setup lang="ts">
import ChatContainer from '../components/ChatContainer.vue'
import { useRoute } from 'vue-router'
import { useSelectedStore } from '../stores/selectedStore'

const id = useRoute().params.chatId?.toString()
const selectedStore = useSelectedStore()
if (id) {
  selectedStore.setSelected(id)
}
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
