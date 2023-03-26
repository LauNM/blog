import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BackendConnector from './plugins/backend-connector';

import App from './App.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(App)

BackendConnector.init(); // Initialisation du plugin ApiService

app.use(createPinia())
app.use(router)

app.mount('#app')


