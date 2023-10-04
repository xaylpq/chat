<script setup lang="ts">
import ChatItem from './ChatItem.vue'
import { useSelectedStore } from '../stores/selectedStore'

const selectedStore = useSelectedStore()
const items = ['1', '2', '3', '4', '5', '6']
</script>

<template>
  <div class="list">
    <div v-for="item in items" :key="item">
      <ChatItem :item="item" :selectedId="selectedStore.getSelected" />
    </div>
  </div>
</template>

<style>
.list {
  min-width: 200px;
  border-right: 1px solid rgba(0, 157, 255, 0.4);
  background-color: rgba(0, 157, 255, 0.02);
  overflow-y: auto;
}
</style>
