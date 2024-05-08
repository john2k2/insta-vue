<script setup>
import Carrousel from "@/components/Carrousel.vue";
import Post from "@/components/Post.vue";
import NavbarBar from "@/components/NavbarBar.vue";
</script>

<template>
  <main class="flex">
    <NavbarBar />
    <div class="flex-grow">
      <Carrousel />
      <Post />
    </div>
  </main>
</template>
