<template>
  <label :class="[
    'mtui-radio',
    'mtui-radio-' + theme,
    {
      'is-checked': isChecked,
      'is-disabled': disabled
    },
    'is-' + type
  ]">
    <div class="mtui-radio-container">
      <!-- 虚拟radio input图标 -->
      <span class="mtui-radio-input">
        <span class="mtui-radio-input-inner"></span>
        <input
          type="radio"
          :checked="isChecked"
          :disabled="disabled"
          @change="handleChange"
        >
      </span>
      <!-- 选项文本 -->
      <span class="mtui-radio-label">
        <slot></slot>
      </span>
    </div>
  </label>
</template>

<script>
export default {
  name: 'm-radio',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean],
      required: true
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
  computed: {
    isChecked () {
      return this.value.toString() === this.label.toString()
    }
  },
  methods: {
    handleChange (event) {
      this.$emit('change', this.label)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
