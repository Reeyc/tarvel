<template>
  <ul class="list">
    <li v-for="(item,key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    cities: Object
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  position: absolute
  right: 0
  bottom: 0
  top: 1.58rem
  width: 0.4rem
  text-align: center
  display: flex
  flex-direction: column
  justify-content: center
.list>li
  line-height: 0.4rem
  color: $bgColor
</style>
