<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import NavbarBar from "@/components/NavbarBar.vue";

import useUsers from "./composables/useUsers";
import { RouterLink } from "vue-router";

const { users } = useUsers();
</script>

<template>
  <Navbar class="md:hidden" />
  <div class="md:flex">
    <NavbarBar class="md:sticky top-0 hidden md:block 2xl:w-1/6" />
    <RouterView class="flex-grow" />
  </div>
  <Footer class="fixed bottom-0" />
</template>

<style scoped></style>
