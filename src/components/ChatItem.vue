<script setup lang="ts">
import router from '../router/index'
import { useSelectedStore } from '@/stores/selectedStore'

const props = defineProps<{
  selectedId: string
  item: string
}>()

const handleOnClick = () => {
  router.push({ name: 'chatSelected', params: { chatId: props.item } })
  useSelectedStore().setSelected(props.item)
}
</script>

<template>
  <div @click="handleOnClick">
    <div v-if="props.selectedId === props.item" class="item selected">{{ props.item }}</div>
    <div v-else class="item">{{ props.item }}</div>
  </div>
</template>

<style>
.item {
  margin: 4px 5px;
  padding: 2px 4px;
  border-radius: 4px;
  cursor: pointer;
}
.selected {
  background-color: rgba(0, 157, 255, 0.5);
  color: white;
}
</style>
