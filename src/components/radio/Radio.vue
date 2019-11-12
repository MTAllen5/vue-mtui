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
        return ['primary', 'minor'].indexOf(val) !== -1
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
.mtui-radio {
  @extend .mtui-common;
  position: relative;
  display: inline-block;
  color: lighten($black, 40%);
  -webkit-tap-highlight-color: transparent;

  &:not(:last-child) {
    margin-right: 10px;
  }

  // 隐藏真实checkbox
  .mtui-radio-input {
    input[type='radio'] {
      position: absolute;
      z-index: -1;
      margin: 0;
      width: 0;
      height: 0;
      opacity: 0;
      outline: none;
    }
  }

  &.is-default {
    .mtui-radio-input {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;

      .mtui-radio-input-inner {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        background-color: white;
        border: 1px solid lighten($black, 40%);
        border-radius: 50%;
        transition: all .1s;
        line-height: normal;
        text-align: center;
        font-size: 14px;

        &::after {
          content: '';
          position: absolute;
          left: 4px;
          top: 50%;
          transform: translateY(-50%) scale(0);
          width: 6px;
          height: 6px;
          background-color: white;
          border-radius: 50%;
          transition: all .1s;
        }
      }
    }

    .mtui-checkbox-label {
      display: inline-block;
      line-height: 30px;
    }

    &.is-checked {
      &.mtui-radio-primary {
        color: $colorPrimary;
        .mtui-radio-input-inner {
          background-color: $colorPrimary;
          border-color: $colorPrimary;
        }
      }
      &.mtui-radio-minor {
        color: $colorMinor;
        .mtui-radio-input-inner {
          background-color: $colorMinor;
          border-color: $colorMinor;
        }
      }
      .mtui-radio-input-inner::after {
        transform: translateY(-50%) scale(1);
      }
    }

    &.is-disabled {
      &.mtui-radio-primary,
      &.mtui-radio-minor {
        color: $colorDefaultAct;
      }

      .mtui-radio-input-inner {
        border-color: $colorDefaultAct;
      }

      &.is-checked {
        .mtui-radio-input-inner {
          background-color: $colorDisabled;
          border-color: $colorDisabled;
        }
      }
    }
  }

  &.is-button {
    padding: 0 8px;
    border: 1px solid lighten($black, 40%);
    border-radius: 4px;
    transition: all .1s;
    line-height: 28px;

    .mtui-radio-input {
      display: none;
    }
    &.is-checked {
      &.mtui-radio-primary {
        background-color: $colorPrimary;
        border-color: $colorPrimary;
        color: white;
      }
      &.mtui-radio-minor {
        background-color: $colorMinor;
        border-color: $colorMinor;
        color: white;
      }
    }

    &.is-disabled {
      background-color: $colorDefaultAct;
      border-color: $colorDefaultAct;
      color: white;
      cursor: not-allowed;

      &.is-checked {
        background-color: $colorDisabled;
        border-color: $colorDisabled;
      }
    }
  }
}
</style>
