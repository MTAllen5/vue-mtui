<template>
  <button :class="[classAry, {'is-icon-only': isIconOnly}]" :disabled="disabled || loading" @click.prevent="click">
    <icon type="ios-sync" v-if="loading && !isIconOnly"></icon>
    <label><slot></slot></label>
  </button>
</template>

<script>
import Icon from './icon/Icon'

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
    },
    noRadius: {
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
        { 'is-disabled': this.disabled || this.loading },
        { 'is-small': this.small },
        { 'is-round': this.round },
        { 'is-inline': this.inline },
        { 'is-plain': this.plain },
        { 'is-text': this.text },
        { 'no-radius': this.noRadius }
      ],
      isIconOnly: false
    }
  },
  mounted () {
    if (this.$slots.default.length === 1 && this.$slots.default[0].elm.nodeName.toUpperCase() === 'I') {
      this.isIconOnly = true
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
.mtui-btn {
  padding-left: 15px;
  padding-right: 15px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-width: 44px;
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
  }

  &.is-text {
    background-color: white;
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
    border-radius: 0;
  }

  &:active {
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
}
</style>
