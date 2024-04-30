import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'

import App from './App.vue'

const router = createRouter({
	history: createWebHistory(),
})

createApp(App).use(router).mount('#app')
