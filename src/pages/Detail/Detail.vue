<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from "./components/DetailBanner";
import DetailHeader from "./components/DetailHeader";
import DetailList from "./components/DetailList";
export default {
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  created() {
    this.$axios({
      method: "get",
      url: "/api/detail.json",
      params: {
        id: this.$route.params.id
      }
    }).then(this.getDetailSuc);
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: []
    };
  },
  methods: {
    getDetailSuc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    }
  }
};
</script>

<style lang="stylus" scoped></style>
