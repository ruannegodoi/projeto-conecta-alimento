<template>
  <div class="home-view">
    <!-- Seção 1: Apresentação (Hero) -->
    <section class="hero-section">
      <h2>Reduzindo o desperdício, alimentando o futuro.</h2>
      <p>Uma plataforma que une doadores de alimentos a quem precisa, de forma simples, local e imediata.</p>
    </section>

    <!-- Seção 2: Como Funciona -->
    <section class="how-it-works-section">
      <!-- ... (código da seção não muda) ... -->
      <h2>Como Funciona?</h2>
      <div class="steps-container">
        <div class="step"><div class="step-icon">1</div><h3>O Doador Cadastra</h3><p>Informa o alimento, o endereço e um contato.</p></div>
        <div class="step"><div class="step-icon">2</div><h3>O Receptor Encontra</h3><p>Visualiza as doações disponíveis em nosso painel público.</p></div>
        <div class="step"><div class="step-icon">3</div><h3>A Conexão Acontece</h3><p>O contato é feito via WhatsApp para combinar a retirada.</p></div>
      </div>
    </section>

    <!-- Seção 3: Doações Disponíveis -->
    <section class="donations-section">
      <h2>Doações Disponíveis Agora</h2>
      <div v-if="loading" class="loading-message">
        Buscando doações...
      </div>
      <div v-else-if="allDonations.length > 0" class="donations-grid">
        <DonationCard
          v-for="donation in allDonations"
          :key="donation.id"
          :donation="donation"
        />
      </div>
      <div v-else class="no-donations-message">
        Nenhuma doação disponível no momento. Seja o primeiro a doar!
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DonationCard from '../components/DonationCard.vue';

const allDonations = ref([]);
const loading = ref(true);

// Lógica FINAL: Busca todas as doações de todos os usuários no localStorage
const fetchAllDonations = () => {
  setTimeout(() => {
    let donationsFromAllUsers = [];
    // Itera por todas as chaves no localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      // Se a chave começar com "donations_", é uma lista de doações de um usuário
      if (key.startsWith('donations_')) {
        const userDonations = JSON.parse(localStorage.getItem(key));
        donationsFromAllUsers = donationsFromAllUsers.concat(userDonations);
      }
    }
    allDonations.value = donationsFromAllUsers;
    loading.value = false;
  }, 1000); // Reduzimos o tempo de espera
};

onMounted(fetchAllDonations);
</script>

<style scoped>
/* Estilos não mudam */
.home-view { display: flex; flex-direction: column; gap: 4rem; }
.hero-section { text-align: center; padding: 4rem 1rem; }
.hero-section h2 { font-size: 40px; margin-bottom: 1rem; }
.hero-section p { font-size: 18px; color: #555; max-width: 600px; margin: 0 auto; }
.how-it-works-section { text-align: center; padding: 2rem 1rem; background-color: var(--light-gray-background); border-radius: 8px; }
.steps-container { display: flex; justify-content: space-around; gap: 2rem; margin-top: 2rem; flex-wrap: wrap; }
.step { flex-basis: 30%; min-width: 250px; }
.step-icon { width: 50px; height: 50px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 24px; font-weight: 700; margin: 0 auto 1rem auto; }
.step h3 { font-size: 20px; margin-bottom: 0.5rem; }
.donations-section { text-align: center; }
.donations-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem; }
.loading-message, .no-donations-message { margin-top: 2rem; font-size: 18px; color: #777; }
</style>