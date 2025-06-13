<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<style scoped>
main {
  min-height: calc(100vh - 200px); /* Garante que o footer fique no fim mesmo em páginas com pouco conteúdo */
  padding: 0 2rem;
}
</style>