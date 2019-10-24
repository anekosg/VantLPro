<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in pictures" :key="index">
         <img v-lazy="image.url" />
      </van-swipe-item>
     
    </van-swipe>home
  </div>
</template>

<script>
export default {
  created() {
    this.getPictures();
  },
  data() {
    return {
      pictures:[]
    };
  },
  methods: {
    getPictures() {
      this.$http.get("http://localhost:8081/home/getPictures").then(result => {
        if(result.status == 200){
          this.pictures = result.body;
          console.log(this.pictures);
        }else{
          this.$toast('加载失败');
        }
      });
    }
  }
};
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