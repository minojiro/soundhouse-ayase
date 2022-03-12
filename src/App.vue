<script setup lang="ts">
import Dialog from "./components/Dialog.vue";
import Button from "./components/Button.vue";

import { onMounted, ref } from "vue";
const isOpen = ref(false);

const close = () => {
  isOpen.value = false;
};

onMounted(() => {
  isOpen.value = true;
});
</script>

<template>
  <Dialog :isOpen="isOpen">
    <p class="text-lg">
      YOASOBI の Ayase は、<br />この環境だけで『夜に駆ける』を作ったんだよ。<br />わかった？
    </p>
    <p class="py-5">
      <img src="./assets/ayase.jpg" />
    </p>
    <Button @click="close"> わかった </Button>
  </Dialog>
</template>
