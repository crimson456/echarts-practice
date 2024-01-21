
<template>
    <div :ref="'container'" id="container"></div>
</template>

<script setup>
import { inject, nextTick, onMounted, ref, reactive } from 'vue';
let echarts = inject('echarts')

let seriesData = reactive([])
let options = reactive({
    title: {
        show: true,
        text: '品类销售额统计',
        textStyle: {
            color: '#4c9bfd'
        },
        left: 160
    },
    tooltip: {},
    legend: {
        type: 'plain',
        orient: 'vertical',
        itemGpa: 2,
        itemWidth: 12,
        itemHeight: 10,
        textStyle: {
            fontSize: 10,
            color: '#4c9bfd'
        },
        itemStyle: {
            borderWidth: 0
        },
        icon: 'roundRect',
        top:20,
        left: 20
    },
    grid: {
        bottom: 20,
        top: 50
    },

    series: [
        {
            type: 'pie',
            data: seriesData,
            radius: ['30%', '80%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 5,
                borderColor: '#fff',
                borderWidth: 0.5
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold',
                    formatter: (params) => {
                        return  params.name+'\n'+params.data.percentage*100 +'%'
                    }
                }
            },
            labelLine: {
                show: false
            },
        }
    ]
})
const container = ref(null)

onMounted(async () => {
    await nextTick()
    let data = await fetch('http://localhost:9000/d').then(response => response.json())
    let totalValue = 0
    data.chartData.forEach(item => {
        totalValue += item.num
    });
    data.chartData.forEach(item => {
        seriesData.push({
            name: item.title,
            value: item.num,
            percentage: `${(item.num / totalValue).toFixed(4)}`
        })
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
