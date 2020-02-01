<template>
  <div
    :class="[
      'mtui-select',
      { 'is-disabled': disabled }
    ]"
  >
    <select
      v-model="val"
      :class="{ placeholder: val === '' }"
      :disabled="disabled"
      @change="onChange"
    >
      <option value="" disabled style="display: none;">{{ placeholder }}</option>
      <option
        v-for="(option, index) in opts"
        :key="index"
        :value="option.value"
        :disabled="option.disabled"
      >{{ option.label }}</option>
    </select>
    <m-icon type="ios-arrow-forward" />
  </div>
</template>

<script>
/* eslint-disable */
import Icon from '../icon/Icon'

export default {
  name: 'm-select',
  components: { MIcon: Icon },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: Boolean,
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      val: this.options.find(opt => opt.value == this.value || opt == this.value) ? this.value : ''
    }
  },
  computed: {
    opts () {
      return this.options.map(opt => {
        if (Object.prototype.toString.call(opt) === '[object Object]' && opt !== null) {
          return opt
        } else if (typeof opt === 'number' || typeof opt === 'string' || typeof opt === 'boolean') {
          return {
            value: opt,
            label: opt
          }
        } else {
          throw new Error('请传入正确的参数')
        }
      })
    }
  },
  watch: {
    value (val) {
      this.val = this.opts.find(opt => opt.value == val) ? val : ''
    }
  },
  methods: {
    onChange (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
