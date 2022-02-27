import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import "./assets/index.css"
import store from "./store/index.js"
import { appAxios } from './utils/appAxios.js'

const app = createApp(App)
app.use(router)
app.use(store)
app.config.globalProperties.$appAxios = appAxios
app.provide("appAxios", appAxios)

app.mount('#app')
