<template>
  <m-dialog class="mtui-alert" v-model="showFlag" :maskCloseable="false" :title="title" ref="dialog">
    <!-- 弹窗内容 -->
    <div>{{ message }}</div>

    <m-button type="primary" text block slot="foot" @click="alert">{{ confirmTxt }}</m-button>
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
      title: '提示',
      message: '',
      confirmTxt: '确定',
      onConfirm: null
    }
  },
  methods: {
    hide () {
      this.$refs.dialog.close()
    },

    show () {
      this.showFlag = true
    },

    alert () {
      this.onConfirm && this.onConfirm()
      this.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-dialog {
  z-index: 9999;
}
</style>
