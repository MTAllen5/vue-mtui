<template>
  <m-dialog class="mtui-confirm" v-model="showFlag" :maskCloseable="false" :title="title" ref="dialog">
    <!-- 弹窗内容 -->
    <div>{{ message }}</div>

    <div class="mtui-confirm-btns" slot="foot">
      <m-button text @click="cancel">{{ cancelTxt }}</m-button>
      <m-button text type="primary" @click="confirm">{{ confirmTxt }}</m-button>
    </div>
  </m-dialog>
</template>

<script>
import Dialog from '../dialog/Dialog'
import Button from '../button/Button'

export default {
  name: 'm-confirm',
  components: {
    MDialog: Dialog,
    MButton: Button
  },
  data () {
    return {
      showFlag: false,
      title: '',
      message: '',
      cancelTxt: '取消',
      confirmTxt: '确定',
      onCancel: null,
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

    confirm () {
      this.onConfirm && this.onConfirm()
      this.hide()
    },

    cancel () {
      this.onCancel && this.onCancel()
      this.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/css/mixins.scss';

.mtui-dialog {
  z-index: 9998;

  .mtui-confirm-btns {
    display: flex;

    .mtui-btn {
      position: relative;
      flex: 1;
      &:not(:first-child)::before {
        @include border-left-line();
      }
    }
  }
}
</style>
