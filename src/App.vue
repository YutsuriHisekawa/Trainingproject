<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/navbar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Bottom from "@/components/bottom.vue";

</script>

<template>
  <div class="bg-blue-50 relative" style="z-index: 0">
    <Navbar />
    <Breadcrumb />
    <RouterView />
    <Bottom />
  </div>
</template>

<style>
html,
body {
  font-family: "Geologica", sans-serif;
}
#app {
  font-family: "Geologica", sans-serif;
}
</style>
