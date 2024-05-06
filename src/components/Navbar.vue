<script setup>
import { AkSearch } from "@kalimahapps/vue-icons";
import { AkHeart } from "@kalimahapps/vue-icons";
</script>

<template>
  <nav
    class="flex bg-black p-3 w-full px-5 justify-around items-center border-b-[1px] border-white/20 sticky top-0 left-0">
    <div class="flex md:w-[90%] w-full items-center bg-[#262626] rounded-md">
      <AkSearch class="size-6 ml-3 text-[#8e8e8e] mr-3 text-md" />
      <input type="text" placeholder="Buscar" class="rounded-md w-full bg-transparent h-10 text-white" />
    </div>
    <AkHeart class="size-7 text-white md:block hidden" />
  </nav>
</template>

<style scoped>
input {
  border: none;
  outline: none;
}
</style>
