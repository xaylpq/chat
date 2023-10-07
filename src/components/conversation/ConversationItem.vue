<script setup lang="ts">
import { type IConversationMessage } from '@/stores/chatStore'

const props = defineProps<{
  item: IConversationMessage
}>()
</script>

<template>
  <div :class="$style.container">{{ props.item.message }}</div>
</template>

<style module>
.container {
  max-width: 200px;
  width: 180px;
  background-color: rgb(61, 159, 235);
  color: white;
  border-radius: 4px;
  padding: 2px;
  margin: 4px;
}
</style>
