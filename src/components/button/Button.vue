<template>
  <button
    type="button"
    :class="[
      'mtui-btn',
      'mtui-btn-' + type,
      'mtui-btn-' + (['normal', 'mini', 'small', 'large'].includes(size) ? size : 'normal'),
      { 'is-inline': inline },
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-disabled': disabled || loading },
      { 'is-text': text },
      { 'is-loading': loading },
      { 'is-block': block },
      { 'is-icon-only': isIconOnly },
      { active }
    ]"
    :style="customStyle"
    :disabled="disabled || loading"
    @click.stop="handleClick"
    @touchstart.stop="handleTouchStart"
    @touchend.stop="handleTouchEnd"
  >
    <m-icon class="btn-icon-loading" type="load-c" v-if="loading && !isIconOnly" />
    <m-icon class="btn-icon" :type="icon" v-if="icon" />
    <label v-if="!isIconOnly"><slot></slot></label>
  </button>
</template>

<script>
import Icon from '../icon/Icon'

export default {
  name: 'm-button',
  components: { MIcon: Icon },
  props: {
    type: { // 按钮类型 可选值：['default', 'primary', 'minor', 'warn', 'danger']
      type: String,
      default: 'default'
    },
    size: { // 尺寸 可选值：['normal', 'mini', 'small', 'large']
      type: String,
      default: 'noraml'
    },
    icon: String, // 图标
    inline: Boolean, // 行内按钮
    plain: Boolean, // 平面按钮
    round: Boolean, // 圆角按钮
    disabled: Boolean, // 不可用
    text: Boolean, // 文本按钮
    loading: Boolean, // 加载状态
    block: Boolean, // 块状按钮
    color: String, // 自定义颜色
    link: String // 页面导航
  },
  data () {
    return {
      isIconOnly: false,
      active: false,
      customStyle: {}
    }
  },
  computed: {
    classAry () {
      return [
        'mtui-btn',
        'mtui-btn-' + this.type,
        'mtui-btn-' + ['normal', 'mini', 'small', 'large'].includes(this.size) ? this.size : 'normal',
        { 'is-inline': this.inline },
        { 'is-plain': this.plain },
        { 'is-round': this.round },
        { 'is-disabled': this.disabled || this.loading },
        { 'is-text': this.text },
        { 'is-loading': this.loading },
        { 'is-block': this.block }
      ]
    }
  },
  created () {
    if (
      !this.$slots.default || // 没有slot内容
      (this.$slots.default && this.$slots.default.length === 1 && this.$slots.default[0].componentOptions && this.$slots.default[0].componentOptions.tag === 'm-icon') // slot内容只有m-icon
    ) {
      this.isIconOnly = true
    }

    // 自定义颜色
    if (this.color) {
      if (this.plain || this.text) {
        this.customStyle = {
          borderColor: this.color,
          color: this.color
        }
      } else {
        this.customStyle = {
          backgroundColor: this.color,
          borderColor: this.color,
          color: 'white'
        }
      }
    }
  },
  methods: {
    handleClick () {
      if (this.disabled || this.loading) return

      if (this.link && this.$router) {
        this.$router.push(this.link)
      } else {
        this.$emit('click')
      }
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
@import './style.scss';
</style>
