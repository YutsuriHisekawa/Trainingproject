<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Bottom from "@/components/Bottom.vue";
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
