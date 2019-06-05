<template>
  <ul class="list">
    <!-- 字母表 -->
    <li
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="letterHandle"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @tuochend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false, //touch拖拽标识
      startY: "", //字母表顶部到定位父元素顶部距离
      timer: null //处理touchmove事件节流
    };
  },
  updated() {
    //在数据更新之后再获取offsetTop, 避免重复获取造成Reflow&Repaint
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters() {
      //将字母表转换成一个数组
      const letters = Object.keys(this.cities);
      return letters; // [A B C D E F...]
    }
  },
  methods: {
    letterHandle(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          /**
           * e.touches[0].clientY => 手指滑动处到屏幕顶部的距离
           * this.startY => 字母表顶部到屏幕顶部的距离
           * touchY => 相减得出手指滑动处到字母表顶部的距离
           * 20 => 每个字母的高度, 除以20得出手指滑动处元素的索引, 从而得出字母, 然后传值
           * 16 => 处理touchmove事件节流
           */
          const touchY = e.touches[0].clientY - this.startY;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
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






