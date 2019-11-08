<template>
  <transition name="fadeIn">
  <div class="mtui-dialog" v-if="value" @click.self="hide_mask">
    <!-- 弹窗主体 -->
    <div class="mtui-dialog-main">
      <!-- 关闭按钮 -->
      <m-button class="mtui-dialog-close" inline small text @onClick="hide" v-if="showCloseButton">
        <m-icon type="android-close"></m-icon>
      </m-button>

      <!-- 弹窗标题 -->
      <div class="mtui-dialog-head" v-if="$slots.title">
        <slot name="title"></slot>
      </div>

      <!-- 弹窗内容 -->
      <div class="mtui-dialog-body">
        <slot></slot>
      </div>

      <!-- 弹窗按钮组 -->
      <div class="mtui-dialog-foot">
        <slot name="foot"></slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import Button from '../button'

export default {
  name: 'm-dialog',
  components: { MButton: Button },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: Boolean,
    showCloseButton: Boolean,
    closeOnClickMask: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    hide () {
      this.$emit('change', false)
    },
    hide_mask () {
      if (this.closeOnClickMask) {
        this.hide()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-dialog {
  @include mask();
  @include flex-center();
  z-index: 900;

  .mtui-dialog-main {
    position: relative;
    width: 84%;
    background-color: white;
    border-radius: 4px;
    overflow: hidden;
    font-size: $fontXMedium;
    text-align: center;
    animation: zoomIn .15s ease forwards;

    .mtui-dialog-close {
      position: absolute;
      z-index: 901;
      right: 0;
      top: 0;
      font-size: 22px;
      color: #9b9b9b;
    }

    .mtui-dialog-head {
      position: relative;
      padding: 15px 20px 0 20px;
      overflow: hidden;
      font-size: $fontLarge;
      font-weight: 400;
      word-break: break-all;
    }

    .mtui-dialog-body {
      padding: 20px;
      font-size: $fontXMedium;
      word-break: break-all;
      line-height: 1.8;
      color: lighten($black, 25%);
    }

    .mtui-dialog-foot {
      position: relative;
      @include flex-center();
      &::before {
        @include border-top-line();
      }
    }
  }
}
</style>
