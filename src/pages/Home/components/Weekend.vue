<template>
  <div>
    <h2>周末去哪儿</h2>
    <div class="weekend" v-for="item of weekendList" :key="item.weekendId">
      <div class="weekend-img">
        <img :src="item.weekendImg">
      </div>
      <div class="weekend-info">
        <p class="weekend-title">{{item.weekendTitle}}</p>
        <p class="weekend-desc">{{item.weekendDesc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekendList: [
        {
          weekendId: 1,
          weekendImg:
            "http://img1.qunarzz.com/sight/source/1505/7c/a25a4a312c43e4.jpg_r_640x214_1dc90053.jpg",
          weekendTitle: "海口必游",
          weekendDesc: "自然天堂，舒心之地"
        },
        {
          weekendId: 2,
          weekendImg:
            "http://img1.qunarzz.com/sight/source/1505/3e/a588a413145dbe.jpg_r_640x214_b3729b6e.jpg",
          weekendTitle: "小清新帆船出海",
          weekendDesc:
            "完整体验驾驶帆船出海的乐趣，感受不一样的海上休闲，体验无限驰骋的空间"
        },
        {
          weekendId: 3,
          weekendImg:
            "http://img1.qunarzz.com/sight/source/1602/bf/a2ac57b8bfe7cd.jpg_r_640x214_406d4c7e.jpg",
          weekendTitle: "城会玩儿游艇大趴",
          weekendDesc:
            "想不想和小伙伴们来一场刺激又好玩的游艇旅行，这里有最具特色的游艇大趴"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.weekend
  margin-bottom: 0.1rem
h2
  padding-left: 0.26rem
  line-height: 0.8rem
.weekend-img>img
  display: inline-block
  width: 100%
.weekend-info
  background-color: #fff
  padding: 0.14rem 0.2rem 0.2rem 0.2rem
.weekend-title
  font-size: 0.28rem
  line-height: 0.48rem
  ellipsis()
.weekend-desc
  font-size: 0.24rem
  line-height: 0.42rem
  ellipsis()
</style>
