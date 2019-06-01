<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe633;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe615;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display: flex
  line-height: 0.86rem
  background-color: $bgColor
  color: #fff
  text-align: center
.header-left
  width: 0.64rem
  float: left
.header-search
  flex: 1
  color: #ccc
  border-radius: 0.1rem
  background-color: #fff
  margin-top: 0.12rem
  margin-left: 0.2rem
  height: 0.64rem
  line-height: 0.64rem
  text-align: left
  padding-left: 0.2rem
.header-right
  width: 1.24rem
  float: right
.header-right>span
  font-size: 0.24rem
</style>

