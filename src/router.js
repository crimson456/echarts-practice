import { createRouter, createWebHashHistory } from "vue-router";

import bodyVue from './components/body.vue'
import barVue from './components/single/bar.vue'
import stackLineVue from "./components/single/stackLine.vue";
import stackBarVue from './components/single/stackBar.vue';
import pieVue from "./components/single/pie.vue";
import kLineVue from './components/single/kLine.vue';
import radarVue from './components/single/radar.vue'
import mapVue from './components/single/map.vue';

const routes=[
    {path:'/',redirect:'/all'},
    {path:'/all',component:bodyVue},
    // {path:'/single',children:[
        {path:'/bar',component:barVue},
        {path:'/stackLine',component:stackLineVue},
        {path:'/stackBar',component:stackBarVue},
        {path:'/pie',component:pieVue},
        {path:'/kLine',component:kLineVue},
        {path:'/radar',component:radarVue},
        {path:'/map',component:mapVue}
    // ]}
]

const router=createRouter({
    routes,
    history:createWebHashHistory()
})
export default router







