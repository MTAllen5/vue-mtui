<template>
  <div :class="['mtui-input', {'is-disabled': disabled}]" v-if="type !== 'textarea'">
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
    <m-icon class="mtui-input-clear" type="ios-close-circle" v-if="clearable" v-show="value.length > 0" @click.native="clearHandler"></m-icon>
    <slot></slot>
  </div>

  <div :class="['mtui-textarea', {'is-disabled': disabled}]" v-else>
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

export default {
  name: 'mtui-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    name: String,
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    maxlength: String,
    clearable: {
      type: Boolean,
      default: false
    },
    row: {
      type: Number,
      default: 3
    },
    limit: {
      type: Number,
      default: 200
    }
  },
  methods: {
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: $fontXMedium * 2;
  background-color: white;
  border-radius: 6px;

  &.is-disabled {
    background-color: $colorBg;
    cursor: not-allowed;

    input {
      cursor: not-allowed;
      color: lighten($black, 70%);
      &::-webkit-input-placeholder {
        color: lighten($black, 70%);
      }
    }
  }

  input {
    padding: 0 16px;
    flex: 1;
    min-width: 100px;
    height: 100%;
    background-color: transparent;
    border: 0;
    border-radius: inherit;
    font-size: $fontXMedium;
    color: lighten($black, 50%);
    outline: none;
    &::-webkit-input-placeholder {
      color: lighten($black, 60%);
    }
  }

  &-clear.ion {
    display: inline-block;
    width: 40px;
    height: 100%;
    line-height:  $fontXMedium * 2;
    text-align: center;
    font-size: $fontXLarge;
    color: lighten($black, 60%);
  }
}

.mtui-textarea {
  @extend .mtui-input;
  height: auto;
  flex-direction: column;

  textarea {
    padding: 10px 15px;
    width: 100%;
    border: 0;
    border-radius: inherit;
    font-size: $fontXMedium;
    font-family: $font;
    color: lighten($black, 50%);
    outline: none;
    resize: none;
    &::-webkit-input-placeholder {
      color: lighten($black, 60%);
    }
  }

  &-counter {
    flex: 1;
    width: 100%;
    text-align: right;
    color: lighten($black, 50%);
  }
}
</style>
