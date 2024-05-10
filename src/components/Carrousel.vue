<script setup>
import useUsers from "@/composables/useUsers";
import { ref } from "vue";
import { AkChevronRight } from "@kalimahapps/vue-icons";
import { AkChevronLeft } from "@kalimahapps/vue-icons";

const { users } = useUsers();

let carousel = ref(null);

const handleNext = () => {
  carousel.value.scrollLeft += carousel.value.offsetWidth;
};

const handlePrev = () => {
  carousel.value.scrollLeft -= carousel.value.offsetWidth;
};
</script>

<template>
  <div class="h-32 w-full pt-4 overflow-hidden relative md:max-w-[730px] md:mx-auto">
    <nav class="whitespace-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory" ref="carousel">
      <ul class="flex gap-x-5 items-center justify-start pl-3">
        <li class="w-[60px] md:w-[70px] flex flex-col gap-y-1" v-for="user in users" :key="user.login.uuid">
          <img
            :src="user.picture.thumbnail"
            :alt="user.name.first"
            class="rounded-full object-cover border-[3px] border-red-600 w-full" />
          <p class="text-white truncate w-[80px] text-[14px]">{{ user.login.username }}</p>
        </li>
      </ul>
      <div class="absolute top-1/3 inline-flex w-full px-3">
        <span class="size-6 bg-white/75 rounded-full left-3 md:left-5 flex items-center absolute justify-center">
          <AkChevronLeft class="size-4 text-black cursor-pointer" @click="handlePrev" />
        </span>
        <span class="size-6 bg-white/75 rounded-full flex absolute right-3 md:right-5 items-center justify-center">
          <AkChevronRight class="size-4 text-black cursor-pointer" @click="handleNext" />
        </span>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
