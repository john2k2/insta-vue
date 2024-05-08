<script setup>
import IconExplore from "./icons/IconExplore.vue";
import IconMessenger from "./icons/IconMessenger.vue";
import IconReels from "./icons/IconReels.vue";
import IconAddPost from "./icons/IconAddPost.vue";
import IconHome from "./icons/IconHome.vue";
</script>

<template>
  <footer class="sticky buttom-0 w-full bg-black mx-auto p-4 border-t-[1px] border-white/45 md:hidden">
    <div class="flex bg-black w-11/12 mx-auto items-center justify-between">
      <IconHome class="size-6 text-white cursor-pointer" />
      <IconExplore class="size-6 text-white cursor-pointer" />
      <IconReels class="size-6 text-white cursor-pointer" />
      <IconAddPost class="size-6 text-white cursor-pointer" />
      <IconMessenger class="size-6 text-white cursor-pointer" />
      <div>
        <img src="https://picsum.photos/200/300" class="size-6 rounded-full cursor-pointer" alt="imagen" />
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
