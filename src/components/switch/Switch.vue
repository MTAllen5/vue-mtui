<template>
  <span :class="[
    'mtui-switch',
    'mtui-switch-' + type,
    {
      active: value,
      'is-disabled': disabled,
      'is-small': small
    }
  ]" @touchend.prevent="change"></span>
</template>

<script>
export default {
  name: 'm-switch',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    type: {
      type: String, // 颜色类型，可选['primary', 'minor', 'wanr'， 'danger']
      default: 'primary'
    },
    small: Boolean // 是否小开关
  },
  methods: {
    change () {
      if (!this.disabled) {
        this.$emit('change', !this.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
