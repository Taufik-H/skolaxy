import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import InlineSvg from 'vue-inline-svg'

createApp(App)
	.use(router)
	.use(store)
	.component('inline-svg', InlineSvg)
	.mount('#app')
	
