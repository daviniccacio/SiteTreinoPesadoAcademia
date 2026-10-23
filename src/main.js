import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Inicialização da aplicação Vue 3
const app = createApp(App)

// Registro dos plugins da aplicação
app.use(router)

// Montagem no elemento do DOM (#app)
app.mount('#app')