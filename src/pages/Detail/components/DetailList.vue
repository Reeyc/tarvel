<template>
  <div>
    <div
      class="item-title border-bottom"
      v-for="(item,index) of list"
      :key="index"
      @click.stop="handleClick"
    >
      <span class="item-title-icon"></span>
      {{item.title}}
      <transition name="show">
        <div v-if="item.children" class="item-leave-title" v-show="isShow">
          <detail-list :list="item.children"></detail-list>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  },
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    handleClick(e) {
      if (e.target.children.length <= 1) return;
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="stylus" scoped>
.item-title
  line-height: 0.8rem
  font-size: 0.32rem
  background-color: #fff
.item-leave-title .item-title
  padding-left: 0.3rem
  font-size: 0.28rem
.item-title-icon
  display: inline-block
  width: 0.36rem
  height: 0.36rem
  margin-right: 0.1rem
  background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
  background-size: 0.4rem 3rem
  position: relative
  top: 0.1rem
  left: 0.1rem
.show-enter-active, .show-leave-active
  transition: all 0.2s
.show-enter, .show-leave-active
  opacity: 0
</style>


