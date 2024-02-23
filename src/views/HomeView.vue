<script setup>
import { RouterLink, RouterView } from 'vue-router';
import aku from '@/components/aku.vue'
</script>

<template>
  <main>
    <RouterLink to="/about">
      <button class="btn btn-accent">Button</button>
    </RouterLink>

    <aku/>
  </main>
</template>
