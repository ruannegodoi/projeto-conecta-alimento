<template>
  <header class="main-header">
    <div class="logo">
      <RouterLink to="/">Conecta Alimento</RouterLink>
    </div>
    <nav class="actions">
      <RouterLink to="/login" class="btn btn-secondary">Login</RouterLink>
      <RouterLink to="/cadastro" class="btn btn-primary">Cadastre-se</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border-color);
}

.logo a {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
}

.actions a {
  margin-left: 1rem;
}
</style>