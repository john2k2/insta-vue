<script setup>
import { AkMoreHorizontalFill } from "@kalimahapps/vue-icons";
import Favorite from "@/components/Favorite.vue";
import { FeMessageCircle } from "@kalimahapps/vue-icons";
import IconPrivateMessage from "@/components/icons/IconPrivateMessage.vue";
import IconSave from "@/components/icons/IconSave.vue";
import CarrouselPost from "@/components/CarrouselPost.vue";
import usePost from "@/composables/usePost";

const { posts, isLoaded } = usePost();
</script>

<template>
  <article v-for="post in posts" :key="post.id">
    <div class="flex w-11/12 md:w-[550px] mb-4 mx-auto">
      <img :src="post.avatar" class="size-6 rounded-full" alt="imagen" />
      <p class="text-white ml-2">{{ post.nickname }}</p>
      <AkMoreHorizontalFill class="size-6 text-white ml-auto" />
    </div>
    <CarrouselPost :img="post.imageUrl" :alt="post.nickname" />
    <div class="flex w-11/12 md:w-[550px] mx-auto my-3">
      <div class="flex gap-x-2">
        <Favorite class="size-8" />
        <FeMessageCircle class="size-8 text-white cursor-pointer" />
        <IconPrivateMessage class="cursor-pointer size-8" />
      </div>
      <IconSave class="text-white ml-auto cursor-pointer size-8" />
    </div>
    <div class="my-4 w-11/12 md:w-[550px] mb-4 mx-auto flex flex-col items-start justify-center">
      <h3 class="text-white my-3 font-bold">{{ post.likes }} Me gusta</h3>
      <div class="grid grid-cols-nickname-body gap-x-2 w-full">
        <h3 class="text-white text-xl font-bold">{{ post.nickname }}</h3>
        <div class="text-white w-full text-pretty truncate-3-lines">{{ post.body }}</div>
      </div>
      <h3 class="text-gray-400 mt-2">Ver los 3 comentarios</h3>
    </div>
  </article>
</template>

<style scoped></style>
