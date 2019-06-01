<template>
  <div>
    <Header :city="city"></Header>
    <Swiper :swiperList="swiperList"></Swiper>
    <Icons :iconList="iconList"></Icons>
    <Recommend :recommendList="recommendList"></Recommend>
    <Weekend :weekendList="weekendList"></Weekend>
  </div>
</template>
<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import Icons from "./components/Icons";
import Recommend from "./components/Recommend";
import Weekend from "./components/Weekend";
export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
  created() {
    this.$axios
      .get("/api/index.json")
      .then(res => {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.city = data.city;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  }
};
</script>
<style>
</style>
