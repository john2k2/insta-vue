<script setup>
import Carrousel from "@/components/Carrousel.vue";
import Post from "@/components/Post.vue";
</script>

<template>
  <main class="2xl:mt-5 grid grid-cols-12 2xl:gap-x-[6rem]">
    <div class="col-span-12 2xl:col-span-8 2xl:ml-5 2xl:grid 2xl:justify-end">
      <Carrousel />
      <Post />
    </div>
    <div class="md:sticky top-0 hidden pt-10 2xl:col-span-4 2xl:block">
      <span class="flex items-center justify-start 2xl:gap-x-[3rem]">
        <span class="flex items-center gap-x-[1rem]">
          <img src="https://picsum.photos/200/300" class="size-12 rounded-full cursor-pointer" alt="imagen" />
          <div>
            <p class="text-white capitalize hidden 2xl:text-xs 2xl:block font-bold">John0rtiz</p>
            <p class="text-white capitalize hidden 2xl:text-xs 2xl:block">Jonathan Damian Ortiz</p>
          </div></span
        >
        <RouterLink to="/Profile">
          <p class="text-blue-600">Cambiar</p>
        </RouterLink>
      </span>
    </div>
  </main>
</template>
