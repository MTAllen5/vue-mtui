<template>
  <!-- 添加taouchstart事件是为了解决ios下:active无效的bug -->
  <button
    :class="[
      classAry,
      { 'is-icon-only': isIconOnly },
      { active }
    ]"
    :disabled="disabled || loading"
    @click="click"
    @touchstart.stop="handleTouchStart"
    @touchend.stop="handleTouchEnd"
  >
    <m-icon type="load-c" v-if="loading && !isIconOnly"></m-icon>
    <label><slot></slot></label>
  </button>
</template>

<script>
import Icon from '../icon/Icon'

export default {
  name: 'm-button',
  components: { MIcon: Icon },
  props: {
    round: { // 圆角按钮
      type: Boolean,
      default: false
    },
    loading: { // 正在加载
      type: Boolean,
      default: false
    },
    disabled: { // 不可用
      type: Boolean,
      default: false
    },
    inline: { // 行内按钮
      type: Boolean,
      default: false
    },
    plain: { // 平面按钮
      type: Boolean,
      default: false
    },
    small: { // 尺寸
      type: Boolean,
      default: false
    },
    big: {
      type: Boolean,
      default: false
    },
    type: { // 按钮类型 可选值：['default', 'primary', 'minor']
      type: String,
      default: 'default'
    },
    text: { // 文本按钮
      type: Boolean,
      default: false
    },
    noRadius: { // 无圆角
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isIconOnly: false,
      active: false
    }
  },
  computed: {
    classAry () {
      return [
        'mtui-btn',
        'mtui-btn-' + this.type,
        { 'is-loading': this.loading },
        { 'is-disabled': this.disabled || this.loading },
        { 'is-small': this.small },
        { 'is-big': this.big },
        { 'is-round': this.round },
        { 'is-inline': this.inline },
        { 'is-plain': this.plain },
        { 'is-text': this.text },
        { 'no-radius': this.noRadius }
      ]
    }
  },
  created () {
    if (this.$slots.default.length === 1 && this.$slots.default[0].componentOptions && this.$slots.default[0].componentOptions.tag === 'm-icon') {
      this.isIconOnly = true
    }
  },
  methods: {
    click () {
      if (this.disabled || this.loading) return

      this.$emit('onClick')
    },
    handleTouchStart () {
      if (this.disabled || this.loading) return

      this.active = true
    },
    handleTouchEnd () {
      this.active = false
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-btn {
  @extend .mtui-common;
  padding-left: 15px;
  padding-right: 15px;
  display: block;
  width: 100%;
  min-width: 46px;
  height: 46px;
  border: 1px solid $colorLine;
  border-radius: 4px;
  font-size: $fontXMedium;
  @include text-overflow;
  cursor: pointer;
  outline: none;
  transition: all .1s;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  user-select: none;

  &.is-inline {
    display: inline-block;
    width: auto;
  }

  &.is-round {
    border-radius: 46px;
  }

  &.is-small {
    min-width: 34px;
    height: 34px;
    font-size: $fontMedium;
  }
  &.is-big {
    min-width: 54px;
    height: 54px;
    font-size: $fontLarge;
  }

  &.is-disabled {
    opacity: .3;
  }

  &.is-plain {
    background-color: white;
  }

  &.is-text {
    background-color: transparent;
    border-color: transparent;
  }

  &.is-icon-only {
    padding: 0;
    font-size: $fontXLarge;
    &.is-small {
      font-size: $fontXMedium;
    }
  }

  &.no-radius {
    border: none;
    border-radius: 0;
  }

  &.active {
    transform: scale(.95);
    opacity: .6;
  }

  &.is-loading {
    >.ion {
      margin-right: 6px;
      animation: rotate-loading 1s linear forwards infinite;
      @keyframes rotate-loading {
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
      }
    }
  }

  &-default {
    background-color: white;
    color: lighten($black, 20%);
  }
  &-primary {
    background-color: $colorPrimary;
    border-color: $colorPrimary;
    color: white;
    &.is-plain,
    &.is-text {
      color: $colorPrimary;
    }
  }
  &-minor {
    background-color: $colorMinor;
    border-color: $colorMinor;
    color: white;
    &.is-plain,
    &.is-text {
      color: $colorMinor;
    }
  }

  label,
  .ion {
    pointer-events: none;
  }
}
</style>
