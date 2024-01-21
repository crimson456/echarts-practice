<template>
    <div class="base"> <div id="tag"></div> </div>
    <div class="base middle"> 可视化数据展示 </div>
    <div class="base">
        <div class="date"> {{ str }} &nbsp;&nbsp;&nbsp; </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let str = ref('')
function updatingDate(str) {
    let t = setTimeout(function timeout() {
        const date = new Date();
        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()
        str.value = `时间：${h} 时 ${m} 分 ${s} 秒 `
        clearTimeout(t)
        t = setTimeout(timeout, 1000);
    }, 1000)
}
updatingDate(str)


</script>

<style scoped>
#tag{
    height: 1rem;
    width: 1rem;
    background-image: url(../assets/vue.svg);
    background-position:0.25rem 0.25rem;
    background-repeat: no-repeat;
    background-size: 0.5rem 0.5rem;
}
.base {
    height: 1rem;
    position: relative;
    flex: 1;
    color: #4c9bfd;
}

.middle {
    text-align: center;
    line-height: 1rem;
    font-size: .5rem;
}

.date {
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: right;
    font-size: .1875rem;
    overflow: hidden;
}
</style>