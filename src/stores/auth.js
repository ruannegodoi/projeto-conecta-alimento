import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '../router' // Importamos o router diretamente

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')));

  const isAuthenticated = computed(() => !!user.value);
  const userName = computed(() => user.value?.name || 'Doador');

  function login(email, password) {
    const mockUser = JSON.parse(localStorage.getItem(`user_${email}`));

    if (mockUser && mockUser.password === password) {
      user.value = {
        name: mockUser.name,
        email: mockUser.email,
        whatsapp: mockUser.whatsapp,
      };
      localStorage.setItem('user', JSON.stringify(user.value));
      // Usamos a instância do router importada para navegar
      router.push('/dashboard');
    } else {
      throw new Error('E-mail ou senha inválidos.');
    }
  }

  function register(userData) {
    if (localStorage.getItem(`user_${userData.email}`)) {
      throw new Error('Este e-mail já está cadastrado.');
    }
    localStorage.setItem(`user_${userData.email}`, JSON.stringify(userData));
    // Após o cadastro, redirecionamos para o login
    router.push('/login');
  }

  function logout() {
    user.value = null;
    localStorage.removeItem('user');
    // Após o logout, redirecionamos para o login
    router.push('/login');
  }

  return { user, isAuthenticated, userName, login, register, logout }
})