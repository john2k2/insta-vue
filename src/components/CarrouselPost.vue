<script setup>
import { AnOutlinedArrowRight } from "@kalimahapps/vue-icons";
import { AnOutlinedArrowLeft } from "@kalimahapps/vue-icons";
import { ref } from "vue";

const items = [
  {
    src: "https://picsum.photos/200/300",
    alt: "imagen",
  },
  {
    src: "https://picsum.photos/200/300",
    alt: "imagen",
  },
  {
    src: "https://picsum.photos/200/300",
    alt: "imagen",
  },
];
let carousel = ref(null);

const handleNext = () => {
  carousel.value.scrollLeft += carousel.value.offsetWidth;
};

const handlePrev = () => {
  carousel.value.scrollLeft -= carousel.value.offsetWidth;
};
</script>

<template>
  <section class="relative">
    <div class="whitespace-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory" ref="carousel">
      <div class="inline-block w-full" v-for="item in items" :key="item.src">
        <img
          :src="item.src"
          :alt="item.alt"
          class="max-w-[600px] w-full snap-start max-h-[600px] h-full object-cover mx-auto" />
      </div>
    </div>
    <div class="absolute top-1/2 inline-flex w-full justify-between px-3">
      <span class="size-6 bg-white/45 rounded-full flex items-center justify-center">
        <AnOutlinedArrowLeft class="size-4 text-black cursor-pointer" @click="handlePrev" />
      </span>
      <span class="size-6 bg-white/45 rounded-full flex items-center justify-center">
        <AnOutlinedArrowRight class="size-4 text-black cursor-pointer" @click="handleNext" />
      </span>
    </div>
  </section>
</template>

<style scoped></style>
