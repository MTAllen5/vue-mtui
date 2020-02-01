<template>
  <div class="mtui-counter">
    <div class="mtui-counter-main">
      <m-button
        inline
        size="small"
        icon="android-remove"
        :type="theme"
        :disabled="disabled || value <= min"
        @click="reduce"
      />

      <input
        v-if="type === 'input'"
        v-model="val"
        class="mtui-counter-ipt"
        type="tel"
        :disabled="disabled"
        @change="editValue"
      >
      <span
        v-if="type === 'span'"
        :class="[
          'mtui-counter-span',
          { 'is-disabled': disabled }
        ]">{{ value }}</span>

      <m-button
        inline
        size="small"
        icon="android-add"
        :type="theme"
        :disabled="disabled || value >= max"
        @click="increase"
      />
    </div>
  </div>
</template>

<script>
import Button from '../button/Button'

export default {
  name: 'm-counter',
  components: { MButton: Button },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [Number, String],
      default: 0,
      validator: (value) => {
        return !isNaN(Number(value))
      }
    },
    type: {
      type: String,
      default: 'span'
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 9
    },
    disabled: Boolean, // 是否可用
    small: Boolean,
    theme: { // 主题颜色 可选值['primary', 'minor', 'warn', 'danger']
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      val: this.value
    }
  },
  watch: {
    value (val) {
      this.val = val
    }
  },
  methods: {
    reduce () {
      let val = this.value
      this.$emit('change', --val)
    },

    increase () {
      let val = this.value
      this.$emit('change', ++val)
    },

    editValue (e) {
      let val = Number(e.target.value)

      if (isNaN(val)) {
        val = this.min
      } else if (val < this.min) {
        val = this.min
      } else if (val > this.max) {
        val = this.max
      }

      this.$emit('change', val)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
