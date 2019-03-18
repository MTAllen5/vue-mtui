<template>
  <div class="toast" :class="'toast-' + type">
    <div class="content">{{ message }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      timeout: 1000,
      type: 'bottom'
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../common/css/variable.scss"
@import '../../../common/css/mixins.scss'

.toast
  position fixed
  left 50%
  z-index 999
  padding 10px 15px
  min-width 130px
  max-width 80%
  background rgba(40, 40, 40, .8)
  border-radius 4px
  text-align center
  color white
  .content
    font-size $fontMedium
    word-break break-all

  &.toast-top
    top 8%
    transform translate3d(-50%, 0, 0)
    animation zoomIn-top .1s ease-out forwards
  &.toast-bottom
    bottom 8%
    transform translate3d(-50%, 0, 0)
    animation zoomIn-bottom .1s ease-out forwards
  &.toast-center
    top 50%
    transform translate3d(-50%, -50%, 0) scale3d(1, 1, 1)
    animation zoomIn-center .1s ease-out forwards

@keyframes zoomIn-center
  0%
    opacity 0
    transform translate3d(-50%, -50%, 0) scale3d(0.3, 0.3, 0.3)
  50%
    opacity 1
@keyframes zoomIn-top
  0%
    opacity 0
    transform translate3d(-50%, -150%, 0)
  50%
    opacity 1
@keyframes zoomIn-bottom
  0%
    opacity 0
    transform translate3d(-50%, 150%, 0)
  50%
    opacity 1
</style>

