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
  data() {
    return {
      swiperList: [
        {
          id: 1,
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/39/03048973b6839302.jpg_750x200_992c1cfc.jpg"
        },
        {
          id: 2,
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"
        },
        {
          id: 3,
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/667757f979fa38b12c4986f9930b6695.jpg_750x200_6cca7add.jpg"
        }
      ],
      swiperOption: {
        effect: "fade",
        pagination: ".swiper-pagination", //页码圆点类名
        autoplay: true, //自动播放
        speed: 2000, //播放速度
        loop: true //循环播放
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
  padding-bottom: 26.67%
  .swiper-img
    width: 100%
</style>

