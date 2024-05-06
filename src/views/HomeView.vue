<script setup>
import Carrousel from "@/components/Carrousel.vue";
import Post from "@/components/Post.vue";
</script>

<template>
  <main>
    <Carrousel />
    <section class="bg-black overflow-y-auto">
      <Post />
    </section>
  </main>
</template>
