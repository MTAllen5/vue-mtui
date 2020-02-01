<template>
  <div :class="[
    'mtui-input',
    {
      'is-disabled': disabled,
      'is-readonly': readonly,
      'is-error': error
    }
  ]" v-if="type !== 'textarea'">
    <input
      :type="type"
      :value="value"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      ref="input"
      @input="inputHandler"
      @change="changeHandler"
      @focus="focusHandler"
      @blur="blurHandler"
    >
    <m-icon
      v-if="clearable && !disabled && !readonly"
      v-show="value.length > 0"
      class="mtui-input-clear"
      type="close-circled"
      @click.native.stop="clearHandler" />
    <slot></slot>
  </div>

  <div :class="[
    'mtui-textarea',
    {
      'is-disabled': disabled,
      'is-readonly': readonly,
      'is-error': error
    }
  ]" v-else>
    <textarea
      :value="value"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :rows="row"
      :maxlength="maxlength"
      ref="input"
      @input="inputHandler"
      @change="changeHandler"
      @focus="focusHandler"
      @blur="blurHandler"
    >
    </textarea>
    <div class="mtui-textarea-counter">{{ value.length }}/{{ maxLen }}</div>
  </div>
</template>

<script>
import Icon from '../icon/Icon'

export default {
  name: 'm-input',
  components: { MIcon: Icon },
  props: {
    type: { // 输入框类型，可选项同原生input，['text', 'password', 'search', 'number']
      type: String,
      default: 'text'
    },
    value: { // 输入值
      type: [String, Number],
      default: ''
    },
    name: String, // input的name
    placeholder: String, // 提示文本
    disabled: Boolean, // 是否可用
    readonly: Boolean, // 是否只读
    maxlength: [String, Number], // 最大字符宽度
    error: Boolean, // 是否错误提示
    clearable: { // 是否可清除输入
      type: Boolean,
      default: false
    },
    row: { // textarea的默认行数
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      maxLen: 200
    }
  },
  watch: {
    maxlength (val) {
      if (this.type === 'textarea') {
        this.maxLen = val
      }
    }
  },
  created () {
    if (this.type === 'textarea') {
      this.maxLen = this.maxlength || this.maxLen
    }
  },
  methods: {
    // 清空输入内容
    clearHandler () {
      this.$emit('input', '')
      this.$emit('clear')
    },

    inputHandler (event) {
      this.$emit('input', event.target.value)
    },

    changeHandler (event) {
      this.$emit('change', event.target.value)
    },

    focusHandler (event) {
      this.$emit('focus', event)
    },

    blurHandler (event) {
      this.$emit('blur', event)
    },

    makeFocus () {
      this.$refs.input.focus()
    },

    makeBlur () {
      this.$refs.input.blur()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
