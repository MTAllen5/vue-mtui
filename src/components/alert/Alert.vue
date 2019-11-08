<template>
  <m-dialog v-model="showFlag" :closeOnClickMask="false" :showCloseButton="closeable">
    <!-- 弹窗标题 -->
    <template slot="title" v-if="title !== ''">{{ title }}</template>

    <!-- 弹窗内容 -->
    <div>{{ message }}</div>

    <!-- 弹窗按钮组 -->
    <m-button type="minor" text no-radius @onClick="alert" slot="foot">{{ confirmTxt }}</m-button>
  </m-dialog>
</template>

<script>
import Dialog from '../dialog/Dialog'
import Button from '../button/Button'

export default {
  name: 'm-alert',
  components: {
    MDialog: Dialog,
    MButton: Button
  },
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
  watch: {
    showFlag (val) {
      if (!val) {
        this.dataReset()
      }
    }
  },
  methods: {
    hide () {
      this.showFlag = false
    },

    show () {
      this.showFlag = true
    },

    alert () {
      this.onConfirm && this.onConfirm()
      this.hide()
    },

    // 关闭的时候重置默认数据，以防下次调用使用了旧数据
    dataReset () {
      this.title = ''
      this.message = ''
      this.confirmTxt = '确定'
      this.onConfirm = null
      this.closeable = false
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-dialog {
  z-index: 990;
}
</style>
