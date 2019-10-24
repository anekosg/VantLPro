<template>
  <div class="app-Container">
    <!-- 此处nav-bar 属性 fixed 显示即为真，不用赋值 -->
  <van-nav-bar
  title="我的Vant移动项目"
 
  fixed  
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<router-view></router-view>

<!-- 此tabbar 自动变成 router-link 不用手动设置了 -->
<van-tabbar v-model="active" route>
  <van-tabbar-item name="home" icon="home-o" replace  to="/home">首页</van-tabbar-item>
  <van-tabbar-item name="search" icon="user-o" replace  to="/member">会员</van-tabbar-item>
  <van-tabbar-item name="friends" icon="shopping-cart-o" replace to="/shopcar">购物车</van-tabbar-item>
  <van-tabbar-item name="setting" icon="setting-o" replace to="/setting">设置</van-tabbar-item>
</van-tabbar>

  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
     this.$toast('返回')
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  data() {
    return {
      active: 'home'
    }
  }
};
</script>

<style lang="scss" scoped>
.app-Container{
  padding-top: 46px;
}
</style>