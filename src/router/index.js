import { createRouter, createWebHistory } from 'vue-router'
// Não precisamos mais da store aqui.
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cadastro',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

// Guarda de Navegação Global
router.beforeEach((to, from, next) => {
  // Verificamos a autenticação lendo diretamente do localStorage.
  // Isso é seguro e desacoplado do Pinia nesta fase de inicialização.
  const isAuthenticated = !!localStorage.getItem('user');
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Se a rota exige auth e o usuário não está logado, vai para o login.
    next({ name: 'login' });
  } else {
    // Caso contrário, permite a navegação.
    next();
  }
});

export default router