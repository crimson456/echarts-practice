
<template>
    <div id="root">
        <div class="header">
            <headerVue></headerVue>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
    </div>
</template>


<script setup>
import headerVue from './components/header.vue';


</script>



<style scoped>
body{
    height:13.5rem;
    width: 24rem;
}
#root{
    background-image: url(./assets/bg.webp);
    background-position:top bottom;
    background-repeat: no-repeat;
    background-size: 24rem 13.5rem;
}

.header { 
    display: flex;
    height: 1rem;
    width: 24rem;
}

.body {
    display: flex;
    height: 12.5rem;
    width: 24rem;
    /* background-color: #d7d7df; */
}
</style>
