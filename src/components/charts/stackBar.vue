
<template>
    <div :ref="'container'" id="container"></div>
</template>

<script setup>
import { inject, nextTick, onMounted, ref, reactive } from 'vue';
let echarts = inject('echarts')

let day=reactive([])
let series=reactive([])
let options = reactive({
    title:{
        show:true,
        text:'周销量均值',
        textStyle:{
            color:'#4c9bfd'
        },
        left:160
    },
    tooltip: {},
    legend:{
        type:'plain',
        itemGpa:3,
        itemWidth:10,
        itemHeight:6,
        textStyle:{
            fontSize:6,
            color:'#4c9bfd'
        },
        bottom:5,
        left:40

    },
    grid:{
        bottom:40,
        top:30
    },

    yAxis:{
            type:'category',
            boundaryGap:true,
            data:day,
            name:'日期',
            nameGap:5,
            nameTextStyle:{
                fontSize:10
            },
            axisLabel:{
                fontSize:8,
                color:'#4c9bfd',
                interval:0
            },
        }
    ,
    xAxis:{
            type:'value',
            name:'数量',
            max:3000,
            nameTextStyle:{
                fontSize:10,
            },
            nameGap:5,
            axisLine:{
                show:true
            },
            axisLabel:{
                color:'#4c9bfd',
                fontSize:8,
            },
            axisTick:{
                show:true,
                length:3
            },
            splitLine:{
                show:false
            }
        }
    ,
    series:series
})
const container = ref(null)

onMounted(async () => {
    await nextTick()
    let data=await fetch('http://localhost:9000/b').then(response => response.json())

    for(let k in data.chartData.num){
        series.push(
            {
                type:'bar',
                stack:'total',
                name:k,
                data:data.chartData.num[k],
            }
            )
    }
    data.chartData.day.forEach(item => {
        day.push(item)
    });


    let mychart = echarts.init(container.value)
    mychart.setOption(options)

    window.addEventListener('resize', () => { mychart.resize() })
})

</script>


<style scoped>
#container {
    height: 3.5rem;
    width: 5.5rem;
    padding: 0.25rem;
}
</style>
