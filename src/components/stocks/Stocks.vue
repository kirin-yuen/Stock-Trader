<template>
  <div class="row">
    <!-- 传递股票数据到子组件 -->
    <AppStock v-for="stock in stocks" :stock="stock"></AppStock>
  </div>
</template>

<script>
import AppStock from './Stock.vue';

export default {
  components: {
    AppStock
  },
  data(){
    return {
      stocks: [
        {id: 1, name: 'Google',price: 100},
        {id: 2, name: 'Huawei',price: 150},
        {id: 3, name: 'Twitter',price: 120},
        {id: 4, name: 'Apple',price: 200},
      ]
    };
  }
};
</script>

<style scoped>
</style>