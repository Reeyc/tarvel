<template>
  <div>
    <router-link to="/" tag="div" v-show="isShow">
      <div class="header-abs">
        <span class="iconfont detail-header-back">&#xe633;</span>
      </div>
    </router-link>
    <div class="header-fixed" v-show="!isShow" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont home-back">&#xe633;</span>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        this.isShow = false;
        let opacity = top / 140;
        opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
      } else {
        this.isShow = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position: absolute
  left: 0.2rem
  top: 0.2rem
  width: 0.8rem
  height: 0.8rem
  line-height: 0.8rem
  border-radius: 0.4rem
  background-color: rgba(0, 0, 0, 0.8)
  text-align: center
.detail-header-back
  color: #fff
.header-fixed
  background-color: $bgColor
  line-height: $headerHeight
  text-align: center
  color: #fff
  font-size: 0.32rem
  position: fixed
  top: 0
  width: 100%
.home-back
  position: absolute
  top: 0
  left: 0
  color: #fff
  width: 0.64rem
</style>
