<template>
  <transition name="fadeIn">
  <div class="mtui-dialog-container mtui-mask" v-if="showFlag">

    <!-- 弹窗主体 -->
    <div class="mtui-dialog-main">
      <!-- 弹窗标题 -->
      <div class="mtui-dialog-head" v-if="title !== ''">
        <strong class="mtui-dialog-title">{{ title }}</strong>
      </div>

      <!-- 弹窗内容 -->
      <div class="mtui-dialog-body">{{ message }}</div>

      <!-- 弹窗按钮组 -->
      <div class="mtui-dialog-foot">
        <m-button type="primary" no-radius @click="alert">{{ confirmTxt }}</m-button>
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
      onConfirm: null,
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
      this.onConfirm && this.onConfirm()
      this.hide()
    },
    dataReset () { // 关闭的时候重置默认数据，以防下次调用使用了旧数据
      this.title = ''
      this.message = ''
      this.confirmTxt = '确定'
      this.onConfirm = null
      this.closeable = false
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/common/css/mtui-dialog.scss';

.mtui-dialog-container {
  z-index: 990;
}
</style>

