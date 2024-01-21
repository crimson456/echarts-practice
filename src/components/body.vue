<template>
    <div class="side">
        <div class="chart-container border">
            <barVue></barVue>
            <div class="border1"></div>
            <div class="border2"></div>
            <div class="border3"></div>
            <div class="border4"></div>
        </div>
        <div class="chart-container border">
            <stackLineVue></stackLineVue>
            <div class="border1"></div>
            <div class="border2"></div>
            <div class="border3"></div>
            <div class="border4"></div>
        </div>
        <div class="chart-container border">
            <pieVue></pieVue>
            <div class="border1"></div>
            <div class="border2"></div>
            <div class="border3"></div>
            <div class="border4"></div>
        </div>
    </div>
    <div class="middle">
        <div class="data-container border">
            <div class="border1"></div>
            <div class="border2"></div>
            <div class="border3"></div>
            <div class="border4"></div>
        </div>
        <div class="map-container border">
            <mapVue></mapVue>
            <div class="border1"></div>
            <div class="border2"></div>
            <div class="border3"></div>
            <div class="border4"></div>
        </div>
    </div>
    <div class="side">
        <div class="chart-container border">
            <stackBarVue></stackBarVue>
            <div class="border1"></div>
            <div class="border2"></div>
            <div class="border3"></div>
            <div class="border4"></div>
        </div>
        <div class="chart-container border">
            <kLineVue></kLineVue>
            <div class="border1"></div>
            <div class="border2"></div>
            <div class="border3"></div>
            <div class="border4"></div>
        </div>
        <div class="chart-container border">
            <radarVue></radarVue>
            <div class="border1"></div>
            <div class="border2"></div>
            <div class="border3"></div>
            <div class="border4"></div>
        </div>
    </div>
</template>


<script setup>
import barVue from './charts/bar.vue'
import stackLineVue from "./charts/stackLine.vue";
import stackBarVue from './charts/stackBar.vue';
import pieVue from "./charts/pie.vue";
import kLineVue from './charts/kLine.vue';
import radarVue from './charts/radar.vue'
import mapVue from './charts/map.vue';



</script>

<style scoped>
.side {
    flex: 2;
}

.middle {
    flex: 3;
}

.chart-container {
    /* height: 3.9375rem;
    width: 5.875rem;
    border-style: solid;
    border-width: .0625rem .0625rem 0;
    border-color: pink;
    border-radius: .125rem; */
    height: 4rem;
    width: 6rem;
    position: relative;
}

.data-container {
    height: 2rem;
    width: 12rem;
    position: relative;
}

.map-container {
    height: 10rem;
    width: 12rem;
    position: relative;
}

.border1 {
    position: absolute;
    top: .25rem;
    left: .25rem;
    height: .25rem;
    width: .25rem;
    border-top: 2px pink solid;
    border-left: 2px pink solid;
}

.border2 {
    position: absolute;
    top: .25rem;
    right: .25rem;
    height: .25rem;
    width: .25rem;
    border-top: 2px pink solid;
    border-right: 2px pink solid;
}

.border3 {
    position: absolute;
    bottom: .25rem;
    left: .25rem;
    height: .25rem;
    width: .25rem;
    border-bottom: 2px pink solid;
    border-left: 2px pink solid;
}

.border4 {
    position: absolute;
    bottom: .25rem;
    right: .25rem;
    height: .25rem;
    width: .25rem;
    border-bottom: 2px pink solid;
    border-right: 2px pink solid;
}</style>

