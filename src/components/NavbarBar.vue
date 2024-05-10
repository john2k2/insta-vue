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
</script>

<template>
  <nav class="h-screen border-r-[1px] border-white/15 py-10 px-5 flex flex-col items-center">
    <div class="mb-10">
      <RouterLink to="/"><AkInstagramFill class="size-8 text-white mb-10" /></RouterLink>
    </div>
    <div class="h-full">
      <ul class="flex flex-col items-center h-full gap-y-10">
        <li>
          <RouterLink to="/">
            <IconHome class="size-8" />
          </RouterLink>
        </li>
        <li>
          <AkSearch class="size-8 text-white" />
        </li>
        <li>
          <RouterLink to="/Explore">
            <IconExplore class="size-8 text-white" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/Reels">
            <IconReels class="size-8 text-white" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">
            <IconMessenger class="size-8 text-white" />
          </RouterLink>
        </li>
        <li>
          <AkHeart class="size-8 text-white" />
        </li>
        <li>
          <IconAddPost class="size-8 text-white" />
        </li>
        <li>
          <RouterLink to="/Profile"
            ><img src="https://picsum.photos/200/300" class="size-8 rounded-full cursor-pointer" alt="imagen"
          /></RouterLink>
        </li>
      </ul>
    </div>
    <div class="flex flex-col gap-y-5">
      <IconInstagram class="size-8 text-white mt-10" />
      <ChMenuHamburger class="size-8 text-white" />
    </div>
  </nav>
</template>

<style scoped></style>
