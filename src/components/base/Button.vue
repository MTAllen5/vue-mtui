<template>
  <button :class="classAry" :disabled="disabled || loading" @click.prevent="click">
    <i v-if="loading"></i>
    <label><slot></slot></label>
  </button>
</template>

<script>
export default {
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
    type: { // 按钮类型
      type: String,
      default: 'default'
    },
    text: { // 文本按钮
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      classAry: [
        'mtui-btn',
        'mtui-btn-' + this.type,
        { 'is-loading': this.loading },
        { 'is-disabled': this.disabled },
        { 'is-small': this.small },
        { 'is-round': this.round },
        { 'is-inline': this.inline },
        { 'is-plain': this.plain },
        { 'is-text': this.text }
      ]
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/variable.scss';
@import '../../common/css/mixins.scss';

.mtui-btn {
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  border: 1px solid $colorDefault;
  border-radius: 4px;
  font-size: $fontXMedium;
  @include text-overflow;
  cursor: pointer;
  outline: none;
  transition: all .2s;
  -webkit-appearance: none;

  &.is-inline {
    display: inline-block;
    width: auto;
  }

  &.is-round {
    border-radius: 44px;
  }

  &.is-small {
    height: 34px;
    font-size: $fontMedium;
  }

  &.is-disabled {
    opacity: .6;
  }

  &.is-plain {
    background-color: white;
    color: $black;
  }

  &.is-text {
    background-color: white;
    border-color: transparent;
  }

  &:active {
    opacity: .6;
  }
  // &.is-loading
  //   i
  //     display inline-block
  //     margin-right 6px
  //     width 1em
  //     height 1em
  //     background url($iconLoadingWhite) center center no-repeat
  //     background-size 100% 100%
  //     vertical-align middle
  //     animation rotate-loading 1s linear forwards infinite
  //     @keyframes rotate-loading
  //       0%
  //         transform rotate(0)
  //       100%
  //         transform rotate(360deg)
  &-default {
    background-color: white;
    color: $black;
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

  // &.text
  //   padding 0 16px
  //   font-size $fontMedium
  //   background-color transparent
  //   &:active
  //     background-color transparent
  //     opacity .7
  //   &.info
  //     color $gray
  //   &.primary
  //     color $mainColor
  //   &.warn
  //     color $warnColor
  //   &.success
  //     color $successColor
  //   &.blue
  //     color $linkColor
}
</style>

