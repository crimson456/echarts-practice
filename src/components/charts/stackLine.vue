
<template>
  <div :ref="'container'" id="container"></div>
</template>

<script setup>
import { inject, nextTick, onMounted, ref, reactive } from 'vue';
let echarts = inject('echarts')

let regions = reactive([])
let series = reactive([])
let options = reactive({
  title: {
    show: true,
    text: '地区月销量',
    textStyle: {
      color: '#4c9bfd'
    },
    left: 160
  },
  tooltip: {},
  legend: {
    type: 'plain',
    itemGpa: 3,
    itemWidth: 10,
    itemHeight: 6,
    textStyle: {
      fontSize: 6,
      color: '#4c9bfd'
    },
    icon: 'roundRect',
    bottom: 5,
    left: 40

  },
  grid: {
    bottom: 40,
    top: 30
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    name: '日期',
    nameGap: 5,
    nameTextStyle: {
      fontSize: 10
    },
    axisLabel: {
      fontSize: 8,
      color: '#4c9bfd',
      interval: 0
    },
  }
  ,
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
  }
  ,
  series: series
})
const container = ref(null)

onMounted(async () => {
  await nextTick()
  let data = await fetch('http://localhost:9000/c').then(response => response.json())
  data.chartData.forEach(item => {
    series.push(
      {
        type: 'line',
        stack: 'totalSale',
        name: item.region,
        data: item.value, smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8
        },
        emphasis: {
          focus: 'series'
        },
      }
    )
    regions.push(item.region)
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
