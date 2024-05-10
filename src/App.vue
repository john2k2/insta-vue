<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import NavbarBar from "@/components/NavbarBar.vue";
</script>

<template>
  <Navbar class="md:hidden" />
  <div class="md:grid md:grid-cols-12">
    <NavbarBar class="md:flex hidden fixed top-0 bottom-0 left-0 md:col-span-1" />
    <RouterView class="md:w-full md:col-span-11 md:ml-20" />
  </div>
  <Footer class="fixed bottom-0" />
</template>

<style scoped></style>
