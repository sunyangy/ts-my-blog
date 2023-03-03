import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './util/font.js'
import { ElMessage } from 'element-plus'
import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(ElMessage)
app.use(pinia)

app.mount('#app')


