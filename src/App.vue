<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import NavbarBar from "@/components/NavbarBar.vue";
</script>

<template>
  <Navbar class="md:hidden" />
  <div class="md:flex">
    <NavbarBar class="md:sticky top-0 hidden md:block 2xl:w-[244px]" />
    <RouterView class="flex-grow" />
  </div>
  <Footer class="fixed bottom-0" />
</template>

<style scoped></style>
