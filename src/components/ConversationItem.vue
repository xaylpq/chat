<script setup lang="ts">
import HeaderConversation from './conversation/HeaderConversation.vue'
import ConversationList from './conversation/ConversationList.vue'
import InputConversation from './conversation/InputConversation.vue'
</script>

<template>
  <div :class="$style.item">
    <HeaderConversation />
    <ConversationList />
    <InputConversation />
  </div>
</template>

<style module>
.item {
  padding: 5px 0;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
}
</style>
