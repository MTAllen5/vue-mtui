<template>
  <label :class="[
    'mtui-checkbox',
    'mtui-checkbox-' + theme,
    {
      'is-checked': value,
      'is-disabled': disabled
    },
    'is-' + type
  ]">
    <div class="mtui-radio-container">
      <!-- 虚拟checkbox input图标 -->
      <span class="mtui-checkbox-input">
        <span class="mtui-checkbox-input-inner">
          <m-icon type="android-done" v-show="value"></m-icon>
        </span>
        <input
          type="checkbox"
          :checked="value"
          :disabled="disabled"
          @change="handleChange"
        >
      </span>
      <!-- 选项文本 -->
      <span class="mtui-checkbox-label">
        <slot></slot>
      </span>
    </div>
  </label>
</template>

<script>
import Icon from '../icon/Icon'

export default {
  name: 'm-checkbox',
  components: { MIcon: Icon },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number, Boolean],
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    theme: {
      type: String,
      default: 'primary',
      validator: (val) => {
        return ['primary', 'minor', 'warn', 'danger'].indexOf(val) !== -1
      }
    }
  },
  methods: {
    handleChange (event) {
      this.$emit('change', event.target.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
