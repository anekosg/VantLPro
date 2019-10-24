<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    
    home
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// 标签名就是类名
.van-swipe {
  height: 200px;
//   scss 嵌套语法
  .van-swipe-item {
    &:nth-child(1) {
      background-color: purple;
    }
    &:nth-child(2) {
      background-color: black;
    }
    &:nth-child(3) {
      background-color: orange;
    }
    &:nth-child(4) {
      background-color: red;
    }
  }
}
</style>