<template>
  <div class="form-page-container">
    <FormCard>
      <h2>Cadastro de Doador</h2>
      <form @submit.prevent="handleRegister" :class="{ 'loading': isLoading }">
        <fieldset>
          <div class="form-group"><label for="name">Nome ou estabelecimento</label><input type="text" id="name" v-model="formData.name" required /></div>
          <div class="form-group"><label for="email">E-mail</label><input type="email" id="email" v-model="formData.email" required /></div>
          <div class="form-group"><label for="password">Senha</label><input type="password" id="password" v-model="formData.password" required /></div>
          <div class="form-group"><label for="whatsapp">WhatsApp (DDD + Número)</label><input type="tel" id="whatsapp" v-model="formData.whatsapp" @input="formatWhatsApp" placeholder="(XX) XXXXX-XXXX" required maxlength="15" /></div>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
          <button type="submit" class="btn btn-primary btn-block">{{ isLoading ? 'Cadastrando...' : 'Cadastrar' }}</button>
        </fieldset>
      </form>
      <p class="navigation-link">Já tem uma conta? <RouterLink to="/login">Faça Login</RouterLink></p>
    </FormCard>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import FormCard from '../components/FormCard.vue';

const formData = ref({ name: '', email: '', password: '', whatsapp: '' });
const authStore = useAuthStore();
const isLoading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const handleRegister = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  successMessage.value = '';
  try {
    authStore.register(formData.value);
    successMessage.value = 'Cadastro realizado com sucesso! Redirecionando...';
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    isLoading.value = false;
  }
};
const formatWhatsApp = (event) => {
  let value = event.target.value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');
  formData.value.whatsapp = value;
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
.success-message { color: var(--primary-color); text-align: center; margin-bottom: 1rem; font-weight: 600; }
form.loading { opacity: 0.7; }
</style>