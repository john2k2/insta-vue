<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Navbar class="md:hidden" />

  <RouterView />

  <Footer class="fixed bottom-0" />
</template>

<style scoped></style>
