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
  <article v-for="post in posts" :key="post.id" class="max-w-[488px] mx-auto">
    <div class="flex mb-4 2xl:my-6 items-center">
      <img :src="post.avatar" class="size-8 2xl:size-10 rounded-full" alt="imagen" />
      <p class="text-white text-sm ml-2">{{ post.nickname }}</p>
      <AkMoreHorizontalFill class="size-6 text-white ml-auto" />
    </div>
    <CarrouselPost :img="post.imageUrl" :alt="post.nickname" />
    <div class="flex mx-auto my-1">
      <div class="flex gap-x-2">
        <Favorite class="size-6" />
        <FeMessageCircle class="size-6 text-white cursor-pointer" />
        <IconPrivateMessage class="cursor-pointer size-6" />
      </div>
      <IconSave class="text-white ml-auto cursor-pointer size-8" />
    </div>
    <div class="mb-4 mx-auto flex flex-col items-start justify-center">
      <h3 class="text-white my-3 font-bold">{{ post.likes }} Me gusta</h3>
      <div class="grid grid-cols-nickname-body gap-x-2 w-full">
        <div class="text-white w-full text-pretty truncate-3-lines">
          <span>{{ post.nickname }}</span>
          {{ post.body }}
        </div>
      </div>
      <h3 class="text-gray-400 mt-2">Ver los 3 comentarios</h3>
    </div>
  </article>
</template>

<style scoped></style>
