<template>
  <div>
    <Header></Header>
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
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      leaveCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getCityDate() {
      this.$axios
        .get(`/api/index.json`)
        .then(res => {
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
            this.swiperList = data.swiperList;
            this.iconList = data.iconList;
            this.recommendList = data.recommendList;
            this.weekendList = data.weekendList;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getCityDate();
    this.leaveCity = this.city;
  },
  activated() {
    if (this.city !== this.leaveCity) {
      this.getCityDate();
      this.leaveCity = this.city;
    }
  }
};
</script>
<style>
</style>








