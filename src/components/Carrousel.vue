<script setup>
import useUsers from "@/composables/useUsers";

const { users } = useUsers();
</script>

<template>
  <div class="bg-black h-32 w-full pt-4">
    <nav class="w-full overflow-auto justify-start ml-3 flex">
      <ul class="flex gap-x-5 items-center justify-start">
        <!--
          codigo para app mobile el desktop, no lleva avatar arriba
        -->
        <!-- <div class="flex flex-col w-20 justify-center items-center gap-y-1 relative">
          <img
            class="rounded-full w-[60px] border-[2px] border-red-600"
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="asdas" />
          <span
            class="w-4 h-4 bg-green-600 rounded-full absolute bottom-6 right-4 inline-flex items-center justify-center"
            >2</span
          >
          <p class="text-white text-[14px]">Tu Historia</p>
        </div> -->

        <li class="w-[65px] flex flex-col gap-y-1" v-for="user in users" :key="user.login.uuid">
          <img
            :src="user.picture.thumbnail"
            :alt="user.name.first"
            class="rounded-full object-cover border-[3px] border-red-600 w-full" />
          <p class="text-white truncate text-[15px]">{{ user.login.username }}</p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>



</style>
