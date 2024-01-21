
<template>
    <div :ref="'container'" id="container"></div>
</template>

<script setup>
import { inject, nextTick, onMounted, ref, reactive } from 'vue';
let echarts = inject('echarts')


let options = {
    geo:{
        map:'china'
    }
    
}
const container = ref(null)

onMounted(async () => {
    await nextTick()
    let data=await fetch('http://localhost:9000/china_map').then(response => response.json())
    echarts.registerMap('china',{geoJSON:data})


    let mychart = echarts.init(container.value)
    mychart.setOption(options)

    window.addEventListener('resize', () => { mychart.resize() })
})

</script>


<style scoped>
#container {
    height: 9.5rem;
    width: 11.5rem;
    padding: 0.25rem;
}
</style>
