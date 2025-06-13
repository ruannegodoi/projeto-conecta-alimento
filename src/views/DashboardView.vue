<template>
  <div class="dashboard-container">
    <header class="dashboard-header">
      <h1>Olá, {{ authStore.userName }}!</h1>
      <button @click="handleLogout" class="btn btn-secondary">Sair</button>
    </header>

    <main class="dashboard-content">
      <div class="donations-control">
        <h2>Minhas Doações</h2>
        <button @click="openDonationModal()" class="btn btn-primary">+ Adicionar Nova Doação</button>
      </div>

      <div v-if="donations.length > 0" class="donations-table-wrapper">
        <table class="donations-table">
          <thead>
            <tr>
              <th>Alimento</th>
              <th>Endereço</th>
              <!-- Coluna nova adicionada -->
              <th>WhatsApp para Contato</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="donation in donations" :key="donation.id">
              <td>{{ donation.name }}</td>
              <td>{{ donation.address }}</td>
              <!-- Dado novo exibido -->
              <td>{{ donation.whatsapp }}</td>
              <td class="actions-cell">
                <button @click="openDonationModal(donation)" class="btn btn-secondary btn-sm">Editar</button>
                <button @click="confirmDelete(donation.id)" class="btn btn-danger btn-sm">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="no-donations-message">
        <p>Você ainda não cadastrou nenhuma doação.</p>
        <p>Clique em "Adicionar Nova Doação" para começar!</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const donations = ref([]);

const fetchUserDonations = () => {
  const userDonations = JSON.parse(localStorage.getItem(`donations_${authStore.user.email}`)) || [];
  donations.value = userDonations;
};

onMounted(fetchUserDonations);

const handleLogout = () => {
  authStore.logout();
};

const openDonationModal = (donation = null) => {
  const isEditing = !!donation;
  
  // 1. Prompt para o nome do alimento
  const newName = prompt(isEditing ? 'Editar nome do alimento:' : 'Nome do alimento:', isEditing ? donation.name : '');
  if (!newName) return;
  
  // 2. Prompt para o endereço
  const newAddress = prompt(isEditing ? 'Editar endereço de retirada:' : 'Endereço de retirada:', isEditing ? donation.address : '');
  if (!newAddress) return;

  // --- CAMPO ADICIONADO ---
  // 3. Prompt para o WhatsApp, sugerindo o do cadastro como padrão
  const defaultWhatsapp = authStore.user.whatsapp || '';
  const newWhatsapp = prompt(
    isEditing ? 'Editar WhatsApp para contato:' : 'WhatsApp para contato (sugerimos o seu cadastrado):',
    isEditing ? donation.whatsapp : defaultWhatsapp
  );
  if (!newWhatsapp) return;
  // --- FIM DA ADIÇÃO ---

  if (isEditing) {
    // Lógica de Update
    const updatedDonations = donations.value.map(d => 
      d.id === donation.id ? { ...d, name: newName, address: newAddress, whatsapp: newWhatsapp } : d
    );
    donations.value = updatedDonations;
  } else {
    // Lógica de Create
    const newDonation = {
      id: Date.now(),
      name: newName,
      address: newAddress,
      whatsapp: newWhatsapp, // Adiciona o campo no novo objeto
      // Adicionamos o nome do doador para usar no card da Home
      donorName: authStore.userName,
    };
    donations.value.push(newDonation);
  }

  localStorage.setItem(`donations_${authStore.user.email}`, JSON.stringify(donations.value));
};

const confirmDelete = (donationId) => {
  if (confirm('Tem certeza que deseja excluir esta doação? Esta ação não pode ser desfeita.')) {
    donations.value = donations.value.filter(d => d.id !== donationId);
    localStorage.setItem(`donations_${authStore.user.email}`, JSON.stringify(donations.value));
  }
};
</script>

<style scoped>
.dashboard-container { padding: 2rem; }
.dashboard-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 2rem; }
.donations-control { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
.donations-table-wrapper { overflow-x: auto; }
.donations-table { width: 100%; border-collapse: collapse; }
.donations-table th, .donations-table td { padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: left; }
.donations-table th { background-color: var(--light-gray-background); font-weight: 700; }
.actions-cell button { margin-right: 8px; }
.btn-sm { padding: 6px 12px; font-size: 14px; }
.no-donations-message { text-align: center; padding: 3rem; background-color: var(--light-gray-background); border-radius: 8px; margin-top: 2rem; }
.no-donations-message p { margin-bottom: 0.5rem; }
</style>