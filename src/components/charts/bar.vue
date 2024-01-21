
<template>
    <div :ref="'container'" id="container"></div>
</template>

<script setup>
import { inject, nextTick, onMounted, ref, reactive } from 'vue';
import icon from '../../assets/icon/quanping.svg'
let echarts = inject('echarts')


let category = reactive([])
let num = reactive([])
let options = {
    title: {
        show: true,
        text: '品类余量统计',
        textStyle: {
            color: '#4c9bfd'
        },
        left: 160
    },
    graphic: {
        elements: [
            {
                type: 'image',
                top: 0,
                right: 0,
                style: {
                    image: icon,
                    height: 22,
                    width: 22,
                },
                invisible: false,
                onmousedown: () => {
                    console.log('mousedown');
                }
            },


        ]
    },
    tooltip: {},
    grid: {
        bottom: 20,
        top: 50
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: category,
        name: '品类',
        nameGap: 5,
        nameTextStyle: {
            fontSize: 10
        },
        axisLabel: {
            color: '#4c9bfd',
            interval: 0
        },
    },
    yAxis: {
        type: 'value',
        name: '数量',
        nameTextStyle: {
            fontSize: 10,
        },
        nameGap: 5,
        axisLine: {
            show: true
        },
        axisLabel: {
            color: '#4c9bfd',
            fontSize: 8,
        },
        axisTick: {
            show: true,
            length: 3
        },
        splitLine: {
            show: false
        }


    },
    series: [
        {
            type: 'bar',
            data: num
        }
    ]
}
const container = ref(null)

onMounted(async () => {
    await nextTick()
    let data = await fetch('http://localhost:9000/a').then(response => response.json())
    data.chartData.forEach(item => {
        category.push(item.title)
        num.push(item.num)
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
    z-index: 5;
}
</style>
