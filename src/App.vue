<template>
  <div class="app-Container">
    <!-- 此处nav-bar 属性 fixed 显示即为真，不用赋值 -->
  <van-nav-bar
  title="标题"
 
  fixed  
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>


<van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
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