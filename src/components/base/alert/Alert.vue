<template>
  <transition name="fadeIn">
  <div class="alert-container" v-if="showFlag">

    <!-- 弹窗主体 -->
    <div class="alert-main">
      <!-- 弹窗标题 -->
      <div class="alert-hd">
        <strong class="alert-title">{{ title }}</strong>
        <span class="alert-close" v-if="closeable" @click="hide"></span>
      </div>

      <!-- 弹窗内容 -->
      <div class="alert-bd">{{ message }}</div>

      <!-- 弹窗按钮组 -->
      <div class="alert-ft">
        <Button @click="alert" class="primary" round>{{ confirmTxt }}</Button>
      </div>
    </div>

  </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      showFlag: false,
      title: '',
      message: '',
      confirmTxt: '确定',
      confirmFn: null,
      closeable: false
    }
  },
  methods: {
    hide () {
      this.showFlag = false
      this.dataReset()
    },
    show () {
      this.showFlag = true
    },
    alert () {
      this.hide()
      this.confirmFn && this.confirmFn()
    },
    dataReset () { // 关闭的时候重置默认数据，以防下次调用使用了旧数据
      this.showFlag = false
      this.title = ''
      this.message = ''
      this.confirmTxt = '确定'
      this.confirmFn = null
      this.closeable = false
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../../common/css/variable.scss'
@import '../../../common/css/mixins.scss'

.alert-container
  mask(990)
  display flex
  align-items center
  justify-content center

  .alert-main
    width 84%
    background-color white
    border-radius 8px
    overflow hidden
    font-size $fontXMedium
    text-align center
    animation zoomIn .15s ease forwards

    .alert-hd
      padding 16px 20px
      overflow hidden

      .alert-title
        font-weight 400
        word-break break-all
      
      .alert-close
        float right
        margin 5px 0
        width 16px
        height 16px
        background url(../../../assets/icon_tc_close.png) center center no-repeat
        background-size contain

    .alert-bd
      padding 0 20px
      font-size $fontXMedium
      word-break break-all

    .alert-ft
      position relative
      margin 24px 0
      text-align center
</style>

