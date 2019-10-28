<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in pictures" :key="index">
        <img v-lazy="image.url" :rr="index" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="3" :border="false" clickable  class="van-grid-Home">
      <van-grid-item to="/home/NewsList">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <span>新闻资讯</span>
      </van-grid-item>
      <van-grid-item to="/member">
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <span>图片分享</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <span>商品购买</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-7.jpg" />
        <span>留言反馈</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-5.jpg" />
        <span>视频专区</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-6.jpg" />
        <span>视频专区</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  created() {
    this.getPictures();
  },
  data() {
    return {
      pictures: []
    };
  },
  methods: {
    getPictures() {
      this.$http.get("http://localhost:8081/home/getPictures").then(result => {
        if (result.status == 200) {
          this.pictures = result.body;
          this.$toast("加载成功");
        } else {
          this.$toast("加载失败");
        }
      });
    }
  }
};
</script>

// 有个别组件下标签并没有包含在当前组件下，所以要去掉 scoped 限制才能添加样式
<style lang="scss" >
.van-grid-Home {
  .van-grid-item {
    .van-grid-item__content {
      padding: 10px 8px !important;
    }
  }
}
</style>

<style lang="scss"  scoped>
.van-image{
  height: 50px;
  width: 50px;
}
.van-grid-item span {
  padding-top: 5px;
  font-size: 16px;
}
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