<script setup>
import { AkChevronRight } from "@kalimahapps/vue-icons";
import { AkChevronLeft } from "@kalimahapps/vue-icons";

const handleNext = () => {
  carousel.value.scrollLeft += carousel.value.offsetWidth;
};

const handlePrev = () => {
  carousel.value.scrollLeft -= carousel.value.offsetWidth;
};

defineProps({
  img: String,
  alt: String,
});
</script>

<template>
  <section class="relative md:w-[550px] md:h-[550px] mx-auto">
    <div class="whitespace-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory" ref="carousel">
      <div class="inline-block w-full">
        <img
          :src="img"
          :alt="alt"
          class="max-w-[600px] w-full snap-start max-h-[600px] h-full object-center aspect-square mx-auto" />
      </div>
    </div>
    <div class="absolute top-1/2 inline-flex w-full justify-between px-3">
      <span class="size-6 bg-white/80 rounded-full flex items-center justify-center">
        <AkChevronLeft class="size-4 text-black cursor-pointer" @click="handlePrev" />
      </span>
      <span class="size-6 bg-white/80 rounded-full flex items-center justify-center">
        <AkChevronRight class="size-4 text-black cursor-pointer" @click="handleNext" />
      </span>
    </div>
  </section>
</template>

<style scoped></style>
