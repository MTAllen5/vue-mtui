<template>
  <transition name="fadeIn">
  <div class="confirm-container" v-if="showFlag">

    <!-- 弹窗主体 -->
    <div class="confirm-main">
      <!-- 弹窗标题 -->
      <div class="confirm-hd">
        <strong class="confirm-title">{{ title }}</strong>
        <span class="confirm-close" v-if="closeable" @click="hide"></span>
      </div>

      <!-- 弹窗内容 -->
      <div class="confirm-bd">{{ message }}</div>

      <!-- 弹窗按钮组 -->
      <div class="confirm-ft">
        <Button @click="cancel" class="primary plain" round>{{ cancelTxt }}</Button>
        <Button @click="confirm" class="primary" round>{{ confirmTxt }}</Button>
      </div>
    </div>

  </div>
  </transition>
</template>

<script>
import lzButton from '../Button'

export default {
  data () {
    return {
      showFlag: false,
      title: '',
      message: '',
      cancelTxt: '取消',
      confirmTxt: '确定',
      cancelFn: null,
      confirmFn: null,
      closeable: false
    }
  },
  components: {
    lzButton
  },
  methods: {
    hide () {
      this.showFlag = false
      this.dataReset()
    },
    show () {
      this.showFlag = true
    },
    confirm () {
      this.hide()
      this.confirmFn && this.confirmFn()
    },
    cancel () {
      this.hide()
      this.cancelFn && this.cancelFn()
    },
    dataReset () { // 关闭的时候重置默认数据，以防下次调用使用了旧数据
      this.showFlag = false
      this.title = ''
      this.message = ''
      this.cancelTxt = '取消'
      this.confirmTxt = '确定'
      this.cancelFn = null
      this.confirmFn = null
      this.closeable = false
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../../common/css/variable.scss'
@import '../../../common/css/mixins.scss'

.confirm-container
  mask(980)
  display flex
  align-items center
  justify-content center

  .confirm-main
    width 84%
    background-color white
    border-radius 8px
    overflow hidden
    font-size $fontXMedium
    text-align center
    animation zoomIn .15s ease forwards

    .confirm-hd
      padding 16px 20px
      overflow hidden

      .confirm-title
        font-weight 400
        word-break break-all

      .confirm-close
        float right
        margin 5px 0
        width 16px
        height 16px
        background url(../../../assets/icon_tc_close.png) center center no-repeat
        background-size contain

    .confirm-bd
      padding 0 20px
      font-size $fontXMedium
      word-break break-all

    .confirm-ft
      position relative
      margin 24px 0
      text-align center
      
      button
        position relative
        margin 0 10px
</style>

