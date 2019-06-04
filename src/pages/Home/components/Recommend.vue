<template>
  <div>
    <h2>热销推荐</h2>
    <div class="recommend" v-for="item of recommendList" :key="item.id">
      <router-link to="/detail" tag="img" :src="item.imgUrl" class="recommend-img"></router-link>
      <div class="recommend-info">
        <div class="recommend-title">{{item.title}}</div>
        <div class="recommend-desc">{{item.desc}}</div>
        <router-link to="/detail" tag="button" class="recommend-btn">查看详情</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommendList: Array
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
  min-width: 0
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
