<template>
  <transition name="fadeIn">
  <div class="loading-container" @touchmove.prevent v-if="showFlag">
    <div class="loading">
      <div class="loading-icon"></div>
      <div v-if="title.length > 0" class="loading-txt" v-html="title"></div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      showFlag: false,
      title: ''
    }
  },
  methods: {
    hide () {
      this.showFlag = false
    },
    show () {
      this.showFlag = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../common/css/variable.scss'
@import '../../../common/css/mixins.scss'

.loading-container
  mask(900, .6, 'white')
  display flex
  align-items center
  justify-content center

  .loading
    display flex
    padding 14px 14px
    background-color rgba(40, 40, 40, .8)
    align-items center
    border-radius 8px
    color white
    animation zoomIn .1s ease forwards

    .loading-icon
      width 28px
      height 28px
      background url($iconLoading) no-repeat
      background-size 28px 28px
      animation rotate-loading 1s linear forwards infinite
      @keyframes rotate-loading
        0%
          transform rotate(0)
        100%
          transform rotate(360deg)

    .loading-txt
      margin-right 10px
      font-size $fontMedium
      max-width 140px
      overflow hidden
      white-space nowrap
      text-overflow ellipsis

</style>

