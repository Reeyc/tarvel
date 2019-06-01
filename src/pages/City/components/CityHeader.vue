<template>
  <div>
    <div class="header">
      <router-link :to="{name:'home'}">
        <span class="iconfont home-back">&#xe633;</span>
      </router-link>城市选择
    </div>
    <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  background-color: $bgColor
  line-height: $headerHeight
  text-align: center
  color: #fff
  font-size: 0.32rem
  position: relative
.home-back
  position: absolute
  top: 0
  left: 0
  color: #fff
  width: 0.64rem
.search
  background-color: $bgColor
  padding: 0.1rem
  height: 0.72rem
.search-input
  width: 100%
  line-height: 0.62rem
  border-radius: 0.06rem
  text-align: center
  color: #666
  padding: 0 0.1rem
  box-sizing: border-box
</style>
