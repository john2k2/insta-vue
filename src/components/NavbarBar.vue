<script setup>
import IconHome from "./icons/IconHome.vue";
import { AkSearch } from "@kalimahapps/vue-icons";
import { AkInstagramFill } from "@kalimahapps/vue-icons";
import IconExplore from "./icons/IconExplore.vue";
import { RouterLink } from "vue-router";
import IconReels from "./icons/IconReels.vue";
import IconMessenger from "./icons/IconMessenger.vue";
import { AkHeart } from "@kalimahapps/vue-icons";
import IconAddPost from "./icons/IconAddPost.vue";
import { ChMenuHamburger } from "@kalimahapps/vue-icons";
import IconInstagram from "./icons/IconInstagram.vue";
import IconTrends from "./icons/IconTrends.vue";
</script>

<template>
  <nav class="h-screen border-r-[1px] border-white/15 py-10 px-5 flex flex-col items-center 2xl:items-start">
    <div class="hover:bg-white/10 rounded-md p-3 mb-10 2xl:hover:bg-white/0">
      <RouterLink to="/">
        <AkInstagramFill class="size-7 2xl:hidden text-white" />
        <IconInstagram class="hidden 2xl:block text-white 2xl:w-[130px] w-full" />
      </RouterLink>
    </div>
    <div class="h-full 2xl:w-[300px]">
      <ul class="flex flex-col items-center 2xl:items-start h-full gap-y-1">
        <li class="hover:bg-white/10 rounded-md p-3 2xl:w-full flex items-center cursor-pointer justify-start">
          <RouterLink to="/">
            <IconHome class="size-7 2xl:size-9" />
          </RouterLink>
          <p class="text-white h-7 pt-1 pl-5 capitalize hidden 2xl:text-xl 2xl:block">Inicio</p>
        </li>
        <li class="hover:bg-white/10 rounded-md p-3 2xl:flex 2xl:items-center 2xl:w-full cursor-pointer">
          <AkSearch class="size-7 2xl:size-9 text-white" />
          <p class="text-white h-7 pl-5 capitalize hidden 2xl:text-xl 2xl:block">buscar</p>
        </li>
        <li class="hover:bg-white/10 rounded-md p-3 2xl:flex 2xl:items-center 2xl:w-full cursor-pointer">
          <RouterLink to="/Explore">
            <IconExplore class="size-7 2xl:size-9 text-white" />
          </RouterLink>
          <p class="text-white h-7 pl-5 capitalize hidden 2xl:text-xl 2xl:block">explorar</p>
        </li>
        <li class="hover:bg-white/10 rounded-md p-3 2xl:flex 2xl:items-center 2xl:w-full cursor-pointer">
          <RouterLink to="/Reels">
            <IconReels class="size-7 2xl:size-9 text-white" />
          </RouterLink>
          <p class="text-white h-7 pl-5 capitalize hidden 2xl:text-xl 2xl:block">Reels</p>
        </li>
        <li class="hover:bg-white/10 rounded-md p-3 2xl:flex 2xl:items-center 2xl:w-full cursor-pointer">
          <RouterLink to="/contact">
            <IconMessenger class="size-7 2xl:size-9 text-white" />
          </RouterLink>
          <p class="text-white h-7 pl-5 capitalize hidden 2xl:text-xl 2xl:block">Mensajes</p>
        </li>
        <li class="hover:bg-white/10 rounded-md p-3 2xl:flex 2xl:items-center 2xl:w-full cursor-pointer">
          <AkHeart class="size-7 2xl:size-9 text-white" />
          <p class="text-white h-7 pl-5 capitalize hidden 2xl:text-xl 2xl:block">Notificaciones</p>
        </li>
        <li class="hover:bg-white/10 rounded-md p-3 2xl:flex 2xl:items-center 2xl:w-full cursor-pointer">
          <IconAddPost class="size-7 2xl:size-9 text-white" />
          <p class="text-white h-7 pl-5 capitalize hidden 2xl:text-xl 2xl:block">Crear</p>
        </li>
        <li class="hover:bg-white/10 rounded-md p-3 2xl:flex 2xl:items-center 2xl:w-full cursor-pointer">
          <RouterLink to="/Profile"
            ><img
              src="https://picsum.photos/200/300"
              class="size-7 2xl:size-9 rounded-full cursor-pointer"
              alt="imagen"
          /></RouterLink>
          <p class="text-white h-7 pl-5 capitalize hidden 2xl:text-xl 2xl:block">Perfil</p>
        </li>
      </ul>
    </div>
    <div class="flex flex-col gap-y-5 w-full">
      <div class="hover:bg-white/10 rounded-md p-3 flex cursor-pointer">
        <IconTrends class="size-7 2xl:size-9 text-white" />
        <p class="text-white h-7 pt-1 pl-5 capitalize hidden 2xl:text-xl 2xl:block">Trends</p>
      </div>
      <div class="hover:bg-white/10 rounded-md p-3 flex cursor-pointer">
        <ChMenuHamburger class="size-7 2xl:size-9 text-white" />
        <p class="text-white h-7 pt-1 pl-5 capitalize hidden 2xl:text-xl 2xl:block">mas</p>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
