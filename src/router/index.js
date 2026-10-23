import { createRouter, createWebHistory } from 'vue-router'

// Importação das rotas (pode usar lazy loading com import() dinâmico)
import HomeView from '@/views/HomeView.vue' // ou seu componente principal do site
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import DeleteAccountView from '@/views/DeleteAccountView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/politica-de-privacidade',
    name: 'privacy-policy',
    component: PrivacyPolicyView
  },
  {
    path: '/exclusao-de-conta',
    name: 'delete-account',
    component: DeleteAccountView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Garante que a página sempre abra no topo ao trocar de rota
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router