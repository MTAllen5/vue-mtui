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
        return ['primary', 'minor'].indexOf(val) !== -1
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
.mtui-checkbox {
  @extend .mtui-common;
  position: relative;
  display: inline-block;
  color: lighten($black, 40%);
  -webkit-tap-highlight-color: transparent;

  &:not(:last-child) {
    margin-right: 10px;
  }

  // 隐藏真实checkbox
  .mtui-checkbox-input {
    input[type='checkbox'] {
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
    .mtui-checkbox-input {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;

      .mtui-checkbox-input-inner {
        display: inline-block;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        background-color: white;
        border: 1px solid lighten($black, 40%);
        border-radius: 2px;
        transition: all .1s;
        line-height: normal;
        text-align: center;
        font-size: 14px;
        .ion {
          vertical-align: top;
        }
      }
    }

    .mtui-checkbox-label {
      display: inline-block;
      line-height: 30px;
    }

    &.is-checked {
      &.mtui-checkbox-primary {
        color: $colorPrimary;
        .mtui-checkbox-input-inner {
          background-color: $colorPrimary;
          border-color: $colorPrimary;
          color: white;
        }
      }
      &.mtui-checkbox-minor {
        color: $colorMinor;
        .mtui-checkbox-input-inner {
          background-color: $colorMinor;
          border-color: $colorMinor;
          color: white;
        }
      }
    }

    &.is-disabled {
      &.mtui-checkbox-primary,
      &.mtui-checkbox-minor {
        color: $colorDefaultAct;
      }

      .mtui-checkbox-input-inner {
        border-color: $colorDefaultAct;
      }

      &.is-checked {
        .mtui-checkbox-input-inner {
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

    .mtui-checkbox-input {
      display: none;
    }

    &.is-checked {
      &.mtui-checkbox-primary {
        background-color: $colorPrimary;
        border-color: $colorPrimary;
        color: white;
      }
      &.mtui-checkbox-minor {
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
