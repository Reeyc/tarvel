<template>
  <div class="icons">
    <swiper :options="swiperOption" class="icons-swiper">
      <!-- 轮播滑动效果是在分页上的，因此swiper-slide组件要遍历的是大数组[pages]来渲染分页 -->
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <!-- 取得小数组后渲染数据 -->
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.iconImg" class="icon-content-img">
          </div>
          <p class="icon-desc">{{item.iconDesc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination" //页码圆点类名
      },
      iconList: [
        {
          iconId: 1,
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          iconDesc: "热门景点"
        },
        {
          iconId: 2,
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          iconDesc: "一日游"
        },
        {
          iconId: 3,
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          iconDesc: "海口必游"
        },
        {
          iconId: 4,
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          iconDesc: "动植物园"
        },
        {
          iconId: 5,
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          iconDesc: "亲子乐园"
        },
        {
          iconId: 6,
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png",
          iconDesc: "探秘火山"
        },
        {
          iconId: 7,
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          iconDesc: "玩转长影"
        },
        {
          iconId: 8,
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png",
          iconDesc: "分界洲特价"
        },
        {
          iconId: 9,
          iconImg:
            "http://img1.qunarzz.com/piao/fusion/1805/3a/754b47f658e9c602.png",
          iconDesc: "琼中峡漂游"
        },
        {
          iconId: 9,
          iconImg:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3a0879f224e0aca97843bff78cabac3a.png",
          iconDesc: "海上观光"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8); //图标对应的页码
        if (!pages[page]) {
          pages[page] = []; //新的页码, 则在这页码上创建一个数组
        }
        pages[page].push(item); //添加元素
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.icons >>> .icons-swiper
  padding-top: 0.1rem
  height: 3.8rem
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
</style>
