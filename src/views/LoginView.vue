<template>
  <div class="form-page-container">
    <FormCard>
      <h2>Login</h2>
      <form @submit.prevent="handleLogin" :class="{ 'loading': isLoading }">
        <fieldset>
          <div class="form-group"><label for="email">Seu e-mail</label><input type="email" id="email" v-model="formData.email" required /></div>
          <div class="form-group"><label for="password">Sua senha</label><input type="password" id="password" v-model="formData.password" required /></div>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          <button type="submit" class="btn btn-primary btn-block">{{ isLoading ? 'Entrando...' : 'Entrar' }}</button>
        </fieldset>
      </form>
      <p class="navigation-link">Não tem uma conta? <RouterLink to="/cadastro">Cadastre-se</RouterLink></p>
    </FormCard>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import FormCard from '../components/FormCard.vue';

const formData = ref({ email: '', password: '' });
const authStore = useAuthStore();
const isLoading = ref(false);
const errorMessage = ref('');
const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    authStore.login(formData.value.email, formData.value.password);
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.form-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
}

/* Regra brutal e direta para o fieldset DENTRO deste componente */
fieldset {
  border: 0;
  padding: 0;
  margin: 0;
}

h2 { text-align: center; margin-bottom: 2rem; }
.form-group { margin-bottom: 1.5rem; }
.form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; }
.btn-block { width: 100%; margin-top: 1rem; }
.navigation-link { text-align: center; margin-top: 1.5rem; }
.error-message { color: var(--danger-color); text-align: center; margin-bottom: 1rem; }
form.loading { opacity: 0.7; }
</style>