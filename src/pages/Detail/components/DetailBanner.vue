<template>
  <div>
    <div class="detail-banner" @click="clickHanlde">
      <img
        src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
      >
      <div class="detail-banner-info">
        <div class="detail-banner-title">海洋馆</div>
        <div class="detail-banner-number">
          <span class="iconfont detail-banner-icon">&#xe69d;</span>
          26
        </div>
      </div>
    </div>
    <Gallary :swiperImg="swiperImg" v-show="showGallary" @close="closeGallary"></Gallary>
  </div>
</template>

<script>
import Gallary from "common/gallary/Gallary";
export default {
  components: {
    Gallary
  },
  data() {
    return {
      swiperImg: [
        "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg",
        "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"
      ],
      showGallary: false
    };
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
