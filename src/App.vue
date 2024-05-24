<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Default from "@/layouts/Default.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";

const layout = ref(Default);

const route = useRoute();

watchEffect(() => {
  let layoutComponent = route.meta.layout;
  if (layoutComponent === "Default") {
    layout.value = Default;
  } else if (layoutComponent === "EmptyLayout") {
    layout.value = EmptyLayout;
  }

  if (layoutComponent === undefined) {
    layout.value = Default; // Aquí está la corrección
  }
});
</script>

<template>
  <component :is="layout">
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </component>
</template>

<style scoped></style>
