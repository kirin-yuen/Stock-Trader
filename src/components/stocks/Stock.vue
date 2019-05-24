<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small> Price: {{stock.price}} </small>
          </h3>        
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="quantity" v-model="quantity" />
        </div>
        <div class="pull-right">
          <button class="btn btn-success" :disabled="buyDisabled" @click="buyStock">Buy</button>
        </div>      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 使用 props 获取父组件传过来的股票数据
  props: ['stock'],
  data(){
    return {
      quantity: 0
    }
  },
  computed: {
    // 当数量不为整数与小于 0 时禁止点击按钮
    buyDisabled() {
      const quantity = Number(this.quantity);
      return quantity <= 0 || !Number.isInteger(quantity);
    }
  },
  methods:{
    // 购买股票，暂时只输出当前股票数据
    buyStock(){
      let order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity,
      }
      console.log(order);
    }
  }
};
</script>

<style lang="sass" scoped>
</style>