<script setup>
import { AkMoreHorizontalFill } from "@kalimahapps/vue-icons";
import Favorite from "@/components/Favorite.vue";
import { FeMessageCircle } from "@kalimahapps/vue-icons";
import IconPrivateMessage from "@/components/icons/IconPrivateMessage.vue";
import IconSave from "@/components/icons/IconSave.vue";
</script>

<template>
  <article>
    <div class="flex w-11/12 md:w-[550px] mb-4 mx-auto py-2">
      <img src="https://picsum.photos/200/300" class="size-6 rounded-full" alt="imagen" />
      <p class="text-white ml-2">jedipoint</p>
      <AkMoreHorizontalFill class="size-6 text-white ml-auto" />
    </div>
    <img src="https://picsum.photos/200/300" class="w-full md:w-[600px] mx-auto" alt="imagen" />
    <div class="flex w-11/12 md:w-[550px] mx-auto my-2">
      <div class="flex gap-x-2">
        <Favorite />
        <FeMessageCircle class="size-6 text-white cursor-pointer" />
        <IconPrivateMessage class="cursor-pointer" />
      </div>
      <IconSave class="text-white ml-auto cursor-pointer" />
    </div>
  </article>
</template>

<style scoped></style>
