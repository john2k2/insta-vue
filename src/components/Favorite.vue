<script setup>
import { AkHeart } from "@kalimahapps/vue-icons";
import { AnFilledHeart } from "@kalimahapps/vue-icons";
import { ref } from "vue";

const isFavorite = ref(false);
</script>

<template>
  <AkHeart v-if="!isFavorite" class="size-6 text-white heart-animation" @click="isFavorite = true" />
  <AnFilledHeart v-else class="size-6 text-red-600 heart-animation" @click="isFavorite = false" />
</template>

<style scoped>
@keyframes heart-bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.heart-animation {
  animation: heart-bounce 0.4s ease-in-out;
}
</style>
