<template>
  <div class="newsInfo-Contains">
    <h3>{{NewsDetail.title}}</h3>
    <p class="subTitle">
      <span>{{NewsDetail.recordTime}}</span>
      <span>{{NewsDetail.clCount}}</span>
    </p>
    <hr />
    <div class="content" v-html="NewsDetail.content"></div>
  </div>
</template>

<script>
export default {
  created() {
      this.getNewsDetail();
  },
  data() {
    return {
      id: this.$route.params.id,
      NewsDetail:{}
    };
  },
  methods: {
      getNewsDetail(){
         this.$http
        .get("http://localhost:8081/home/newsInfo?id=" + this.id)
        .then(result => {
          if (result.status == 200) {
              console.log(result);
          this.NewsDetail = result.body[0];
            this.$toast("加载成功");
          } else {
            this.$toast("加载失败");
          }
        });
      }
  }
};
</script>

<style lang="scss" >
.newsInfo-Contains {
  padding: 0 5px;
  .subTitle {
    display: flex;
    justify-content: space-between;
  }
  img{
width:100%;
  }
}
</style>