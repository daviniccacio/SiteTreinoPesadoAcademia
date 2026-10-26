import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import SitePrivacyPolicyView from '@/views/SitePrivacyPolicyView.vue'
import AppPrivacyPolicyView from '@/views/AppPrivacyPolicyView.vue'
import DeleteAccountView from '@/views/DeleteAccountView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

// ID de Medição do Google Analytics 4
const GA_MEASUREMENT_ID = 'G-P62FZPK9MB'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/politica-de-privacidade', redirect: '/politica-de-privacidade/site' },
  { path: '/politica-de-privacidade/site', name: 'site-privacy', component: SitePrivacyPolicyView },
  { path: '/politica-de-privacidade/app', name: 'app-privacy', component: AppPrivacyPolicyView },
  { path: '/exclusao-de-conta', name: 'delete-account', component: DeleteAccountView },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Gancho para envio automático de eventos de visualização de página no GA4
router.afterEach((to) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: to.fullPath,
      page_title: document.title
    })
  }
})

export default router