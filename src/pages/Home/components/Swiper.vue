<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination", //页码圆点类名
        autoplay: 3000, //播放且每页停留3秒
        autoplayDisableOnInteraction: false, //触摸后不停止
        speed: 500, //播放速度
        loop: true, //循环播放
        observer: true, //修改swiper子元素时自动初始化swiper
        observeParents: true //修改swiper父元素时自动初始化swiper
      }
    };
  },
  computed: {
    showSwiper() {
      return this.swiperList.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  width: 100%
  height: 0
  overflow: hidden
  padding-bottom: 31.25%
  .swiper-img
    width: 100%
</style>
