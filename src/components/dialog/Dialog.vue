<template>
  <m-popup
    v-model="show"
    class="mtui-dialog"
    round
    :maskCloseable="maskCloseable"
    :closeable="closeable"
    transition="zoomIn"
    ref="popup"
  >
    <!-- 对话框主体 -->
    <div class="mtui-dialog-main">
      <!-- 弹窗标题 -->
      <div class="mtui-dialog-head" :class="'title-' + titleAlign" v-if="icon || title">
        <m-icon class="mtui-dialog-head-icon" :type="icon" v-if="icon"></m-icon>
        <label>{{ title }}</label>
      </div>

      <!-- 弹窗内容 -->
      <div class="mtui-dialog-body" :class="{'mtui-dialog-no-head': !title && !icon}">
        <slot></slot>
      </div>

      <!-- 弹窗按钮组 -->
      <div class="mtui-dialog-foot" v-if="$slots.foot">
        <slot name="foot"></slot>
      </div>
    </div>
  </m-popup>
</template>

<script>
import Popup from '../popup/Popup'
import Icon from '../icon/Icon'

export default {
  name: 'm-dialog',
  components: { MPopup: Popup, MIcon: Icon },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: Boolean,
    closeable: Boolean,
    maskCloseable: {
      type: Boolean,
      default: true
    },
    title: String,
    titleAlign: { // 标题排序方向 可选值：['center', 'left', 'right']
      type: String,
      default: 'center'
    },
    icon: String
  },
  data () {
    return {
      show: this.value
    }
  },
  watch: {
    value (val) {
      this.show = val
    },
    show (val) {
      this.$emit('change', val)
    }
  },
  methods: {
    close () {
      this.$refs.popup.close()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';
@import '@/common/css/mixins.scss';
@import '@/common/css/animate.scss';

.mtui-dialog {
  z-index: 9991;

  /deep/ .mtui-popup-container {
    width: 88%;
  }

  .mtui-dialog-main {
    position: relative;
    font-size: $fontMedium;
    line-height: 1.6;

    .mtui-dialog-head {
      position: relative;
      padding: 0 20px;
      word-break: break-all;
      color: $colorBlack;
      font-size: $fontXMedium;
      text-align: center;

      .mtui-dialog-head-icon { margin-right: 8px; }
      &.title-center { text-align: center; }
      &.title-left { text-align: left; }
      &.title-right { text-align: right; }
    }

    .mtui-dialog-body {
      padding: 12px 20px 20px 20px;
      word-break: break-all;
      color: $colorPrimaryTxt;

      &.mtui-dialog-no-head {
        padding-top: 6px;
      }
    }

    .mtui-dialog-foot {
      position: relative;
      color: $colorMinorTxt;
      &::before {
        @include border-top-line();
      }
    }
  }
}
</style>
