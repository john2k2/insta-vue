<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import NavbarBar from "@/components/NavbarBar.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row min-h-screen">
    <Navbar class="md:hidden" />
    <NavbarBar class="hidden md:block md:sticky top-0 xl:w-1/6" />
    <div class="flex-grow">
      <slot />
    </div>
    <Footer class="mt-auto" />
  </div>
</template>

<style scoped></style>
