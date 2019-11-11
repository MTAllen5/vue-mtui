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
    <input
      type="radio"
      :checked="isChecked"
      :disabled="disabled"
      @change="handleChange"
    >
    <slot></slot>
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
  border-radius: 4px;
  color: lighten($black, 40%);
  text-align: center;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;

  &:not(:last-child) {
    margin-right: 10px;
  }

  input[type='radio'] {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    outline: none;
  }

  &.is-default {
    padding-left: 21px;
    line-height: 30px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      background-color: white;
      border: 1px solid lighten($black, 40%);
      border-radius: 50%;
      transition: all .1s;
    }

    &::after {
      content: '';
      position: absolute;
      left: 5px;
      top: 50%;
      transform: translateY(-50%) scale(0);
      width: 6px;
      height: 6px;
      background-color: white;
      border-radius: 50%;
      transition: all .1s;
    }

    &.is-checked {
      &.mtui-radio-primary {
        color: $colorPrimary;
        &::before {
          background-color: $colorPrimary;
          border-color: $colorPrimary;
        }
      }
      &.mtui-radio-minor {
        color: $colorMinor;
        &::before {
          background-color: $colorMinor;
          border-color: $colorMinor;
        }
      }
      &::after {
        transform: translateY(-50%) scale(1);
      }
    }

    &.is-disabled {
      &.mtui-radio-primary,
      &.mtui-radio-minor {
        color: $colorDefaultAct;
      }

      &::before {
        border: 1px solid $colorDisabled;
      }

      &.is-checked {
        &::before {
          background-color: $colorDisabled;
          border-color: $colorDisabled;
        }
        &::after {
          transform: translateY(-50%) scale(1);
        }
      }
    }
  }

  &.is-button {
    padding: 0 8px;
    border: 1px solid lighten($black, 50%);
    border-radius: 4px;
    transition: all .1s;
    line-height: 28px;

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
