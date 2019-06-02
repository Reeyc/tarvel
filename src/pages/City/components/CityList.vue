<template>
  <div class="list" ref="wrapper">
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 列表城市 -->
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="city of item" :key="city.id">
          <div class="item border-bottom">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    hotCities: Array,
    cities: Object,
    letters: String
  },
  mounted() {
    this.$nextTick(() => {
      //Dom更新之后初始化Better-Scroll
      this.scroll = new BScroll(this.$refs.wrapper);
    });
  },
  watch: {
    letters() {
      //scrollToElement()使列表加载到参数指定的Dom元素
      const element = this.$refs[this.letters][0];
      this.scroll.scrollToElement(element);
    }
  }
};
</script>

<style lang="stylus" scoped>
.border-bottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.list
  position: absolute
  top: 1.7rem
  bottom: 0
  width: 100%
  overflow: hidden
.title
  line-height: 0.54rem
  background-color: #eee
  font-size: 0.26rem
  color: #666
  padding-left: 0.2rem
.button-list
  padding: 0.1rem 0.6rem 0.1rem 0.1rem
  overflow: hidden
  background-color: #fff
.button-wrapper
  width: 33.3%
  float: left
.button
  margin: 0.1rem
  padding: 0.1rem 0
  text-align: center
  border: 0.02rem solid #ccc
  border-radius: 0.06rem
.item-list
  background-color: #fff
.item-list>.item
  line-height: 0.76rem
  padding-left: 0.2rem
</style>


