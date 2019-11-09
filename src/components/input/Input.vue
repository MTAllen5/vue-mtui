<template>
  <div :class="[
    'mtui-input',
    {
      'is-disabled': disabled,
      'is-readonly': readonly,
      'is-small': small
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
      @input="inputHandler"
      @change="changeHandler"
      @focus="focusHandler"
      @blur="blurHandler"
    >
    <m-icon class="mtui-input-clear" type="close-circled" v-if="clearable && !disabled && !readonly" v-show="value.length > 0" @click.native="clearHandler"></m-icon>
    <slot></slot>
  </div>

  <div :class="[
    'mtui-textarea',
    {
      'is-disabled': disabled,
      'is-readonly': readonly
    }
  ]" v-else>
    <textarea
      :value="value"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :rows="row"
      :maxlength="limit"
      @input="inputHandler"
      @change="changeHandler"
      @focus="focusHandler"
      @blur="blurHandler"
    >
    </textarea>
    <div class="mtui-textarea-counter">{{ value.length }}/{{ limit }}</div>
  </div>
</template>

<script>
import Icon from '../icon/Icon'

export default {
  name: 'm-input',
  components: { MIcon: Icon },
  props: {
    type: { // 输入框类型，可选项同原生input，['text', 'password', 'search', 'number', 'file']
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
    maxlength: String, // 最大字符宽度
    small: Boolean, // 是否小型输入框
    clearable: { // 是否可清除输入
      type: Boolean,
      default: false
    },
    row: { // textarea的默认行数
      type: Number,
      default: 3
    },
    limit: { // textarea的最大字符
      type: Number,
      default: 200
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

    focusHandler () {
      this.$emit('focus')
    },

    blurHandler () {
      this.$emit('blur')
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-input {
  @extend .mtui-common;
  @include flex-center();
  width: 100%;
  background-color: white;
  border-radius: 4px;

  &.is-disabled {
    background-color: $colorBg;
    cursor: not-allowed;

    input {
      color: lighten($black, 60%);
    }
  }

  &.is-readonly {
    input {
      color: lighten($black, 60%);
    }
  }

  &.is-small {
    input {
      height: 26px;
    }
  }

  input {
    flex: 1;
    padding: 5px 16px;
    min-width: 100px;
    height: 36px;
    background-color: transparent;
    border: 0;
    font-size: $fontXMedium;
    color: lighten($black, 20%);
    -webkit-tap-highlight-color: transparent;
    outline: none;
    &::-webkit-input-placeholder {
      color: lighten($black, 60%);
    }
  }

  &-clear {
    display: inline-block;
    width: 36px;
    line-height:  36px;
    text-align: center;
    font-size: $fontLarge;
    color: lighten($black, 60%);
  }
}

.mtui-textarea {
  @extend .mtui-input;
  padding: 8px 16px;
  height: auto;
  flex-direction: column;

  &.is-disabled {
    textarea {
      color: lighten($black, 60%);
    }
  }

  &.is-readonly {
    textarea {
      color: lighten($black, 60%);
    }
  }

  textarea {
    padding: 0;
    width: 100%;
    background-color: transparent;
    border: 0;
    font-size: $fontXMedium;
    font-family: $font;
    color: lighten($black, 20%);
    outline: none;
    resize: none;
    &::-webkit-input-placeholder {
      color: lighten($black, 60%);
    }
  }

  &-counter {
    flex: 1;
    box-sizing: border-box;
    width: 100%;
    text-align: right;
    line-height: 1.6;
    color: lighten($black, 60%);
  }
}
</style>
