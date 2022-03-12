<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps({
  src: String,
});

const safeSrc = computed(() => {
  // @ts-ignore
  const ch = chrome as any;
  if (ch) {
    return ch.runtime.getURL(props.src?.replace(/^\//, ""));
  }
  return props.src;
});
</script>

<template>
  <img :src="safeSrc" alt="" />
</template>
