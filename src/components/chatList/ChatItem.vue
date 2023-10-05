<script setup lang="ts">
import { type IConversationItem } from '@/stores/chatStore'
import Avatar from '../UI components/UserAvatar.vue';

const props = defineProps<{
  item: IConversationItem
}>()
</script>

<template>
  <Avatar :url="props.item.imgURL" :alt="props.item.convName" :brevis="props.item.convName[0]" />
  <div :class="$style.infoContainer">
    <div :class="$style.titleContainer">
      <div :class="$style.title">
        {{ props.item.convName }}
        <div :class="$style.muteIcon">
          {{ props.item.muted ? '&#8224;' : '&#160;' }}
        </div>
      </div>
      <div :class="$style.title">
        <div class="text-title-icons-sended">&#10003;</div>
        <div class="text-title-icons-time">
          {{ props.item.lastMessage?.date || props.item.time }}
        </div>
      </div>
    </div>
    <div :class="$style.descriptionContainer">
      <div :class="$style.description">
        {{ props.item.lastMessage?.message }}
      </div>
      <div :class="$style.counter" v-if="props.item.lastMessage?.count">
        {{ props.item.lastMessage.count }}
      </div>
    </div>
  </div>
</template>

<style module>
.infoContainer {
  width: calc(100% - 50px);
}
.title {
  display: flex;
  font-size: small;
}
.muteIcon {
  margin-left: 4px;
}
.titleContainer {
  display: flex;
  justify-content: space-between;
  font-size: small;
}
.descriptionContainer {
  display: flex;
  justify-content: space-between;
}
.description {
  font-size: small;
  opacity: 0.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 5px);
}
.counter {
  text-align: center;
  background-color: rgb(169, 204, 235);
  color: rgb(33, 33, 33);
  border-radius: 50%;
  font-size: smaller;
  height: 20px;
  width: 22px;
  overflow: hidden;
}
</style>
