import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'windi.css'

createApp(App).use(router).mount('#app')
