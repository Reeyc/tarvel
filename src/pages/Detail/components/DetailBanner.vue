<template>
  <div>
    <div class="detail-banner" @click="clickHanlde">
      <img :src="bannerImg">
      <div class="detail-banner-info">
        <div class="detail-banner-title">{{sightName}}</div>
        <div class="detail-banner-number">
          <span class="iconfont detail-banner-icon">&#xe69d;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animated>
      <Gallary :swiperImg="gallaryImgs" v-show="showGallary" @close="closeGallary"></Gallary>
    </fade-animated>
  </div>
</template>

<script>
import Gallary from "common/gallary/Gallary";
import FadeAnimated from "common/fade/FadeAnimated";
export default {
  components: {
    Gallary,
    FadeAnimated
  },
  data() {
    return {
      showGallary: false
    };
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  methods: {
    clickHanlde() {
      this.showGallary = true;
    },
    closeGallary() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.detail-banner
  overflow: hidden
  height: 0
  padding-bottom: 55%
  position: relative
.detail-banner>img
  width: 100%
.detail-banner-info
  display: flex
  position: absolute
  left: 0
  right: 0
  bottom: 0
  line-height: 0.6rem
  color: #fff
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
.detail-banner-title
  flex: 1
  font-size: 0.32rem
  padding: 0 0.2rem
.detail-banner-number
  height: 0.32rem
  line-height: 0.34rem
  margin-top: 0.14rem
  padding: 0 0.4rem
  border-radius: 0.2rem
  background: rgba(0, 0, 0, 0.8)
  font-size: 0.24rem
.detail-banner-icon
  font-size: 0.24rem
</style>
