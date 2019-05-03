<template>
  <div class="container">
    <AppHeader></AppHeader>
    <div class="col-xs-12">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
// 改名为 AppHeader，避免与原生 header 标签冲突
import AppHeader from "./components/Header.vue";
export default {
  components: {
    Home,
    AppHeader // 注册 Vue 局部组件
  }
};
</script>

<style>
body{
  padding: 30px;
}
</style>
