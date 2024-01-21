import { createApp } from 'vue'
import * as echarts from 'echarts';
import './reset.css'

import App from './App.vue'
import router from './router'
import webSocket from './ws';




let root=createApp(App)
root.provide('echarts',echarts)
root.provide('webSocket',webSocket)
root.use(router)
root.mount('#app')