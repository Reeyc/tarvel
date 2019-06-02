<template>
  <div>
    <div class="header">
      <router-link :to="{name:'home'}">
        <span class="iconfont home-back">&#xe633;</span>
      </router-link>城市选择
    </div>
    <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="showList">找不到匹配内容</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  },
  computed: {
    showList() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) clearTimeout(this.timer);
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let key in this.cities) {
          this.cities[key].forEach(e => {
            if (
              e.spell.indexOf(this.keyword) !== -1 ||
              e.name.indexOf(this.keyword) !== -1
            ) {
              result.push(e);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  }
};
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
  font-family: none
.search-content
  position: absolute
  top: 1.7rem
  bottom: 0
  z-index: 1
  width: 100%
  overflow: hidden
  background-color: #ccc
.search-item
  line-height: 0.62rem
  padding-left: 0.2rem
  color: #666
  background-color: #fff
</style>
