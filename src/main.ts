import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from "./App.vue"
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './routes'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)
app.use(VueQueryPlugin)
app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
app.mount('#app')