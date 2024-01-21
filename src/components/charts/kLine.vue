
<template>
  <div :ref="'container'" id="container"></div>
</template>

<script setup>
import { inject, nextTick, onMounted, ref, reactive } from 'vue';
let echarts = inject('echarts')


let options = {
  title: {
    show: true,
    text: '某商品售价波动',
    textStyle: {
      color: '#4c9bfd'
    },
    left: 160
  },
  tooltip: {
    axisPointer:{
      type:'cross',
      
    },

  },
  grid: {
    bottom: 20,
    top: 50
  },

  xAxis: {
    type: 'category',
    boundaryGap: true,
    data: ['2000-1-1', '2000-1-2', '2000-1-3', '2000-1-4', '2000-1-5',
      '2000-1-6', '2000-1-7', '2000-1-8', '2000-1-9', '2000-1-10',
      '2000-1-11', '2000-1-21', '2000-1-13', '2000-1-14', '2000-1-15',
      '2000-1-16', '2000-1-17', '2000-1-18', '2000-1-19', '2000-1-20'],
    name: '日期',
    nameGap: 5,
    nameTextStyle: {
      fontSize: 10
    },
    axisLabel: {
      color: '#4c9bfd',
      interval: 5
    },
  },
  yAxis: {
    type: 'value',
    name: '价格',
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
      type: 'candlestick',
      data: [
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42],
        [20, 34, 10, 38],
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42],
        [20, 34, 10, 38],
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42],
        [20, 34, 10, 38],
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42],
        [20, 34, 10, 38],
      ]
    }
  ]
};
const container = ref(null)

onMounted(async () => {
  await nextTick()
  let data = await fetch('http://localhost:9000/a').then(response => response.json())
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
