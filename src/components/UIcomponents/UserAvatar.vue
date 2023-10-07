<script setup lang="ts">
const props = defineProps({
  url: String,
  alt: String,
  brevis: String
})

</script>

<template>
  <div :class="$style.avatar">
    <img
        v-if="props.url"
        :class="$style.img"
        :src="props.url"
        alt="{{ props.alt }}"
        width="45"
        height="45"
        srcset=""
    />
    <div v-else :class="$style.textAvatar">{{ props.brevis }}</div>
  </div>
</template>

<style module>
.avatar {
  margin-right: 5px;
}
.img {
  border-radius: 50%;
}
.textAvatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #076e3a;
  color: white;
  font-size: large;
  font-weight: 800;
  text-align: center;
  padding-top: 8px;
}
</style>
