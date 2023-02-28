import { createApp } from 'vue'
import './style.css'
import './util/font.js'
import { ElMessage } from 'element-plus'
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)
app.use(ElMessage)

app.mount('#app')


