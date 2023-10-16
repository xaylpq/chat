<script setup lang="ts">
import { useChatStore } from '@/stores/chatStore'
import Avatar from '@/components/UIcomponents/UserAvatar.vue'
</script>
<template>
  <div :class="$style.header">
    <div :class="$style.icon">&#9001;</div>
    <Avatar
      :url="useChatStore().getSelected?.imgURL"
      :alt="useChatStore().getSelected?.convName"
      :brevis="useChatStore().getSelected?.convName[0]"
    />
    <div :class="$style.last">
      <div :class="$style.text">
        <div :class="$style.convName">{{ useChatStore().getSelected?.convName }}</div>
        <div :class="[$style.convName, $style.status]">status</div>
      </div>
      <div :class="$style.item">
        <div :class="$style.icon">&#128269;</div>
        <div :class="$style.icon">&#8230;</div>
      </div>
    </div>
  </div>
</template>

<style module>
.header {
  display: flex;
  align-items: center;
  height: 60px;
  padding-bottom: 5px;
  border-bottom: 1px solid #025b96;
}
.icon {
  width: 30px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  align-self: center;
  color: #047fd2;
  cursor: pointer;
  margin: 0 10px;
}
.icon:hover {
  color: #025b96;
}
.last {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 100px);
}
.text {
  width: calc(100% - 100px);
}
.convName {
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.status {
  font-size: small;
  opacity: 0.5;
}
.item {
  display: flex;
}
</style>
