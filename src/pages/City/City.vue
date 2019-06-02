<template>
  <div>
    <city-header></city-header>
    <city-list :hotCities="hotCities" :cities="cities" :letters="letters"></city-list>
    <city-alphabet :cities="cities" @change="changeHandle"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/CityHeader";
import CityList from "./components/CityList";
import CityAlphabet from "./components/CityAlphabet";
export default {
  components: {
    CityHeader,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      letters: ""
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "/api/city.json"
    })
      .then(this.requestCityDate)
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    //获取城市数据
    requestCityDate(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.hotCities = data.hotCities;
        this.cities = data.cities;
      }
    },
    //接收数据
    changeHandle(data) {
      this.letters = data;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
