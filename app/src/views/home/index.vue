<template>
  <div class="home">
    <div class="main">
      <router-view />
    </div>
    <div class="foot">
      <router-link to="/list">配送到家</router-link>
      <router-link to="/classfy">分类</router-link>
      <router-link to="/vip">会员</router-link>
      <router-link to="/car">购物车</router-link>
      <router-link to="/my">我的</router-link>
    </div>
  </div>
</template>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    width: 100%;
    flex: 1;
  }
  .foot {
    border-top: 1px solid #ccc;
    width: 100%;
    height: 45px;
    line-height: 45px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
