<template>
  <div>
    <h2>周末去哪儿</h2>
    <div class="weekend" v-for="item of weekendList" :key="item.id">
      <div class="weekend-img">
        <img :src="item.imgUrl">
      </div>
      <div class="weekend-info">
        <p class="weekend-title">{{item.title}}</p>
        <p class="weekend-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weekendList: Array
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
