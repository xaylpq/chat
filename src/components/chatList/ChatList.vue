<script setup lang="ts">
import ChatItemContainer from './ChatItemContainer.vue'
import { useChatStore } from '@/stores/chatStore'

const chatStore = useChatStore()
</script>

<template>
  <div :class="$style.list">
    <div v-for="item in chatStore.getUsers" :key="item.convId">
      <ChatItemContainer :item="item" :selectedId="chatStore.getSelected" />
    </div>
  </div>
</template>

<style module>
.list {
  min-width: 250px;
  padding: 2px 4px;
  border-right: 1px solid rgba(0, 157, 255, 0.4);
  background-color: rgba(0, 157, 255, 0.02);
  overflow-y: auto;
}
</style>
