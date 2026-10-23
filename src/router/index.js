import { createRouter, createWebHistory } from 'vue-router'

// Importação das páginas da aplicação
import HomeView from '@/views/HomeView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import DeleteAccountView from '@/views/DeleteAccountView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
  },
  // ROTA CATCH-ALL (Captura qualquer URL que não coincida com as rotas acima)
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router