<script setup lang="ts">
import { useChatStore } from '@/stores/chatStore'
import ConversationItem from './ConversationItem.vue'

useChatStore().updateConversation();
const list = useChatStore().getSelectedConversation;
</script>

<template>
  <div :class="$style.container">
    <div
      v-for="item in list"
      :key="item.id"
      :class="item.author !== useChatStore().getSelected.convId ? $style.item : $style.authorItem"
    >
      <ConversationItem :item="item" />
    </div>
  </div>
</template>

<style module>
.container {
  height: 378px;
  overflow-y: auto;
  padding: 2px;
}
.item {
  display: flex;
  justify-content: start;
}
.authorItem {
  display: flex;
  justify-content: end;
}
</style>
