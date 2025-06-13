<template>
  <div class="donation-card">
    <!-- A imagem agora é fixa -->
    <img src="/images/cesta-basica.jpg" alt="Imagem de doação de alimento" class="donation-image">
    
    <div class="card-content">
      <h3>{{ donation.name }}</h3>
      <p class="card-info"><strong>Doador:</strong> {{ donation.donorName }}</p>
      <p class="card-info"><strong>Retirada em:</strong> {{ donation.address }}</p>
      <a :href="whatsappLink" target="_blank" class="btn btn-primary btn-block">
        Entrar em contato via WhatsApp
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  donation: {
    type: Object,
    required: true,
  },
});

const whatsappLink = computed(() => {
  const message = `Olá, ${props.donation.donorName}! Tenho interesse na sua doação de '${props.donation.name}'.`;
  const whatsappNumber = props.donation.whatsapp.replace(/\D/g, '');
  return `https://wa.me/55${whatsappNumber}?text=${encodeURIComponent(message)}`;
});

// Nenhuma lógica de imagem é mais necessária aqui.
// O computed `foodImage` foi completamente removido.

</script>

<style scoped>
/* Estilos não mudam */
.donation-card { background: var(--background-color); border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden; display: flex; flex-direction: column; transition: transform 0.3s ease; }
.donation-card:hover { transform: translateY(-5px); }
.donation-image { width: 100%; height: 180px; object-fit: cover; }
.card-content { padding: 1rem; display: flex; flex-direction: column; flex-grow: 1; }
.card-content h3 { font-size: 20px; margin-bottom: 0.75rem; }
.card-info { font-size: 14px; color: #555; margin-bottom: 0.5rem; }
.btn-block { width: 100%; margin-top: auto; padding-top: 10px; padding-bottom: 10px; }
</style>