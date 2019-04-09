<template>
  <transition name="fadeIn">
  <div class="mtui-loadingbar-container" @touchmove.prevent v-if="showFlag">
    <div class="mtui-loadingbar-progress" :style="{'width': progress + '%'}"></div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'mtui-loadingbar',
  data () {
    return {
      showFlag: false,
      loadingFlag: true,
      progress: 0,
      loadingTimer: null
    }
  },
  methods: {
    start () {
      // 如果正在加载，则跳过
      if (this.isLoading()) {
        return
      }
      this.showFlag = true
      this.loadingFlag = true
      this.progress = 0
      this.loadingTimer = setTimeout(this.setProgress, 40)
    },
    finish () {
      this.showFlag = true
      this.loadingFlag = false
      this.progress = 100
      setTimeout(() => {
        this.showFlag = false
      }, 500)
    },
    setProgress () {
      if (this.loadingFlag && this.progress < 94) {
        this.progress += 2
        this.loadingTimer = setTimeout(this.setProgress, 40)
      } else {
        clearInterval(this.loadingTimer)
      }
    },
    isLoading () {
      return this.showFlag && this.loadingFlag
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-loadingbar-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  height: 2px;

  .mtui-loadingbar-progress {
    width: 0;
    height: 100%;
    background-color: $colorPrimary;
    transition: width .2s linear;
  }
}
</style>
