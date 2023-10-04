<script setup lang="ts">
import { useChatStore } from '@/stores/chatStore'

// todo fetch
const conv = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque commodi,
    deserunt illo totam ullam est numquam vitae dolore nisi qui minus, cupiditate, esse architecto
    porro eligendi facere repellat eum.`
</script>

<template>
  <div class="item">{{ useChatStore().getSelected }} {{ conv }}</div>
</template>

<style>
.item {
  padding: 10px 15px;
}
</style>
