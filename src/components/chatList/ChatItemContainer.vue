<script setup lang="ts">
import router from '@/router/index'
import { useChatStore, type IConversationItem } from '@/stores/chatStore'
import ChartItem from './ChatItem.vue'

const props = defineProps<{ item: IConversationItem }>()

const handleOnClick = () => {
  router.push({ name: 'chatSelected', params: { chatId: props.item.convId } })
  useChatStore().setSelected(props.item);
}
</script>

<template>
  <div @click="handleOnClick">
    <div
      v-if="useChatStore().getSelected?.convId === props.item.convId"
      :class="[$style.item, $style.selected]"
    >
      <ChartItem :item="props.item" />
    </div>
    <div v-else :class="$style.item">
      <ChartItem :item="props.item" />
    </div>
  </div>
</template>

<style module>
.item {
  min-height: 48px;
  padding: 2px 4px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  margin: 1px 0;
}
.item:hover {
  background-color: rgb(0, 157, 255);
}
.selected {
  background-color: rgb(35, 154, 228);
  color: white;
}
</style>
