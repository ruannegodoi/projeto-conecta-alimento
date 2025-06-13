<template>
  <div class="form-card">
    <slot></slot>
  </div>
</template>

<script setup>
// Este componente é puramente visual e não precisa de lógica no script.
// A tag <slot> é um placeholder onde o conteúdo do formulário (que está em LoginView/RegisterView) será inserido.
</script>

<style scoped>
.form-card {
  width: 100%;
  max-width: 450px;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  
  /* A regra mais importante para resolver o problema original da borda */
  border: 0;
  
  /* Sombra suave para dar profundidade */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}
</style>