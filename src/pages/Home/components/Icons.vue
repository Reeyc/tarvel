<template>
  <div>
    <div class="icons">
      <swiper :options="swiperOption" class="icons-swiper">
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img :src="item.imgUrl" class="icon-content-img">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <ul class="location border-top">
      <li class="border-right">
        <span class="iconfont location-icon">&#xe61f;</span>
        定位失败
      </li>
      <li>
        <span class="iconfont location-icon">&#xe719;</span>
        必游榜单
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination" //页码圆点类名
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .icons-swiper
  padding-top: 0.1rem
  height: 3.8rem
  background-color: #fff
.icons >>> .swiper-pagination-bullet
  width: 6px
  height: 6px
.icon
  width: 25%
  height: 1.5rem
  padding-top: 0.1rem
  float: left
.icon-img
  text-align: center
.icon-content-img
  width: 1.1rem
.icon-desc
  text-align: center
  color: $darkTextColor
  margin-top: 0.1rem
  font-size: 0.28rem
  ellipsis()
.location
  display: flex
  background-color: #fff
.location>li
  line-height: 0.98rem
  text-align: center
  flex: 1
  ellipsis()
.location-icon
  margin-right: 0.05rem
  font-size: 0.32rem
.border-top::before, .border-right::before
  border-color: #ccc
</style>
