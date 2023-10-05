<script setup lang="ts">
import { useChatStore } from '@/stores/chatStore'
import Avatar from "@/components/UI components/UserAvatar.vue";

const props = defineProps({
  cId: String,
});

const cData = useChatStore().getSelectedConversation();

// требуется из стора взять значение юзера, чтобы сравнивать с автором сообщений для разделения свой-чужой

</script>

<template>
  <Avatar :url="useChatStore().getSelectedConversation().imgURL" :alt="useChatStore().getSelectedConversation().convName" :brevis="useChatStore().getSelectedConversation().convName[0]" />
</template>

<style module>
</style>
