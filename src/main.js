import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import FloatingVue from 'floating-vue'

const app = createApp(App)
app.use(FloatingVue)

app.mount('#app')
