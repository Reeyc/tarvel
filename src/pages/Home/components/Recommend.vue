<template>
  <div>
    <h2>热销推荐</h2>
    <div class="recommend" v-for="item of recommendList" :key="item.recommendId">
      <img :src="item.recommendImg" class="recommend-img">
      <div class="recommend-info">
        <div class="recommend-title">{{item.recommendTitle}}</div>
        <div class="recommend-desc">{{item.recommendDesc}}</div>
        <button class="recommend-btn">查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendList: [
        {
          recommendId: 1,
          recommendImg:
            "http://img1.qunarzz.com/sight/p0/1903/b6/b6255aaa6dd79ac6a3.img.jpg_200x200_f54c65bd.jpg",
          recommendTitle: "海口必游",
          recommendDesc: "自然天堂，舒心之地"
        },
        {
          recommendId: 2,
          recommendImg:
            "http://img1.qunarzz.com/sight/p0/1904/b6/b65ab11a5a5f0e3aa3.img.jpg_200x200_fe9a8b3d.jpg",
          recommendTitle: "小清新帆船出海",
          recommendDesc:
            "完整体验驾驶帆船出海的乐趣，感受不一样的海上休闲，体验无限驰骋的空间"
        },
        {
          recommendId: 3,
          recommendImg:
            "http://img1.qunarzz.com/sight/p0/201405/21/c836ce962bce74d933db6939a7ad2531.jpg_200x200_3c8a46ec.jpg",
          recommendTitle: "城会玩儿游艇大趴",
          recommendDesc:
            "想不想和小伙伴们来一场刺激又好玩的游艇旅行，这里有最具特色的游艇大趴"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend
  display: flex
  margin-bottom: 0.1rem
h2
  padding-left: 0.26rem
  line-height: 0.8rem
.recommend-img
  width: 1.7rem
  height: 1.7rem
  padding: 0.1rem
.recommend-info
  flex: 1
  background-color: #fff
  padding: 0.14rem 0.2rem 0.2rem 0.2rem
  min-width: 0 /*flex容器要设置min-width保证内容不允许超出父元素*/
.recommend-title
  font-size: 0.32rem
  line-height: 0.54rem
  ellipsis()
.recommend-desc
  font-size: 0.24rem
  line-height: 0.4rem
  ellipsis()
.recommend-btn
  height: 0.5rem
  line-height: 0.1rem
  margin-top: 0.16rem
  background-color: #ff9300
  padding: 0.2rem
  border-radius: 0.06rem
  color: #fff
</style>
