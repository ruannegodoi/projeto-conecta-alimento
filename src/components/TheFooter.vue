<template>
  <footer class="main-footer">
    <p>Conecta Alimento © {{ currentYear }} - Projeto Acadêmico</p>
  </footer>
</template>

<script setup>
// Usamos a Composition API do Vue 3 para obter o ano atual dinamicamente
import { ref } from 'vue';
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.main-footer {
  text-align: center;
  padding: 2rem;
  background-color: var(--light-gray-background);
  color: var(--text-color);
  margin-top: 4rem; /* Adiciona um espaço acima do rodapé */
}
</style>