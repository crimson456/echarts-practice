
<template>
    <div :ref="'container'" id="container"></div>
</template>

<script setup>
import { inject, nextTick, onMounted, ref, reactive } from 'vue';
let echarts = inject('echarts')


let options = {
  title:{
        show:true,
        text:'销路订单量',
        textStyle:{
            color:'#4c9bfd'
        },
        left:160
    },
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
  radar: {
    shape: 'circle',
    indicator: [
      { name: '网页商城', max: 100 },
      { name: '商城APP', max: 100 },
      { name: '微信小程序', max: 100 },
      { name: '线下门店', max: 100 },
      { name: '批发商', max: 100 },
      { name: '其他', max: 100 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [80, 90, 70, 75, 95, 60],
          name: '订单量'
        },
        {
          value: [50, 94, 28, 65, 82, 74],
          name: '预订单量'
        }
      ]
    }
  ]
};
const container = ref(null)

onMounted(async () => {
    await nextTick()
    let data=await fetch('http://localhost:9000/a').then(response => response.json())
    

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
