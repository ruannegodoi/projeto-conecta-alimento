import { createApp } from 'vue'
import { createPinia } from 'pinia' // Importa Pinia

import App from './App.vue'
import router from './router' // Importa nosso futuro router

import './assets/main.css' // Importa nossos estilos globais

const app = createApp(App)

app.use(createPinia()) // Usa o Pinia
app.use(router) // Usa o Vue Router

app.mount('#app')