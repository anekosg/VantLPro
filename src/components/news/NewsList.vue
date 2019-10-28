<template>
  <div   class="newsList">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="400">
      <van-cell
        v-for="item in list"
        :key="item.title"
        v-bind:to="'/home/NewsInfo/'+item.id"
      >
        <van-image v-bind:src="item.img" fit="fill" height="70" width="70" />
        <div class="newsDescript">
          <p>{{item.title}}</p>
          <p>
            <span>{{item.recordTime | dateformat }}</span>
            <span>点击：{{item.clCount}}次</span>
          </p>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      count: 0
    };
  },
  methods: {
    onLoad() {

      this.$http
        .get("http://localhost:8081/home/newsList?count=" + this.count)
        .then(result => {
          if (result.status == 200) {
            if (result.body.status == "1") {
              this.finished = true;
            }    
              // 加载状态结束
            this.loading = false;
             this.list = this.list.concat(result.body.newsList) ;
          
            this.$toast("加载成功");
            this.count += 1;
          } else {
            this.$toast("加载失败");
          }
        });
    }
  }
};
</script>

<style lang="scss" >

.van-cell__value {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  .van-image {
    flex: 15%;
    display: hidden;
  }
  .newsDescript {
    flex: 80%;
    display: hidden;
    height: 70px; //和图片一般高
    padding-left: 12px;
    p:nth-child(1) {
      margin-top: 11px;
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 270px; //这个地方不能用 百分比
    }
    p:nth-child(2) {
      color: #1989fa;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>