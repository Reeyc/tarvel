<template>
  <div class="shade" @click="clickHandle">
    <div class="wrapper">
      <swiper :options="swiperOption" class="gallary-swiper">
        <swiper-slide v-for="(item,index) of swiperImg" :key="index">
          <img :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        autopaly: false,
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observer: true,
        observeParents: true
      }
    };
  },
  props: {
    swiperImg: Array
  },
  methods: {
    clickHandle() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="stylus" scoped>
.shade
  background-color: #000
  position: fixed
  left: 0
  top: 0
  bottom: 0
  z-index: 99
  width: 100%
.wrapper
  width: 100%
  position: absolute
  top: 50%
  transform: translate(0, -50%)
.gallary-swiper
  overflow: inherit
.wrapper img
  width: 100%
.swiper-pagination
  color: #fff
  bottom: -1rem
</style>
