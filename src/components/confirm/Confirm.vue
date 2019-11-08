<template>
  <m-dialog v-model="showFlag" :closeOnClickMask="false" :showCloseButton="closeable">
    <!-- 弹窗标题 -->
    <template slot="title" v-if="title !== ''">{{ title }}</template>

    <!-- 弹窗内容 -->
    <div>{{ message }}</div>

    <!-- 弹窗按钮组 -->
    <template slot="foot">
      <m-button inline text no-radius @onClick="cancel">{{ cancelTxt }}</m-button>
      <m-button inline text type="minor" no-radius @onClick="confirm">{{ confirmTxt }}</m-button>
    </template>
  </m-dialog>
</template>

<script>
export default {
  name: 'm-confirm',
  data () {
    return {
      showFlag: false,
      title: '',
      message: '',
      cancelTxt: '取消',
      confirmTxt: '确定',
      onCancel: null,
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

    confirm () {
      this.onConfirm && this.onConfirm()
      this.hide()
    },

    cancel () {
      this.onCancel && this.onCancel()
      this.hide()
    },

    // 关闭的时候重置默认数据，以防下次调用使用了旧数据
    dataReset () {
      this.title = ''
      this.message = ''
      this.cancelTxt = '取消'
      this.confirmTxt = '确定'
      this.onCancel = null
      this.onConfirm = null
      this.closeable = false
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-dialog {
  z-index: 980;

  .mtui-dialog-foot .mtui-btn {
    position: relative;
    flex: 1;
    &:not(:first-child)::after {
      @include border-left-line();
      top: 50%;
      transform: scale(.5, .5) translateY(-50%);
    }
  }
}
</style>
