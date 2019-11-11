<template>
  <span :class="[
    'mtui-switch',
    'mtui-switch-' + type,
    {
      active: value,
      'is-disabled': disabled,
      'is-small': small
    }
  ]" @touchend.prevent="change"></span>
</template>

<script>
export default {
  name: 'm-switch',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    type: {
      type: String, // 颜色类型，可选['primary', 'minor']
      default: 'primary'
    },
    small: Boolean // 是否小开关
  },
  methods: {
    change () {
      if (!this.disabled) {
        this.$emit('change', !this.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;
  background-color: $colorDefaultAct;
  border-radius: 30px;
  transition: background-color .1s linear;

  &:after {
    content: '';
    position: absolute;
    left: 2px;
    top: 2px;
    display: block;
    width: 26px;
    height: 26px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 3px 5px rgba(0,0,0,.3);
    transition: left .1s linear;
  }

  &.active {
    background-color: $colorDisabled;
    &:after {
      left: 22px;
    }
  }

  &-primary.active { background-color: $colorPrimary; }
  &-minor.active { background-color: $colorMinor; }

  &.is-small {
    width: 40px;
    height: 24px;
    border-radius: 24px;

    &:after {
      width: 20px;
      height: 20px;
      box-shadow: 0 2px 3px rgba(0,0,0,.3);
    }

    &.active {
      &:after {
        left: 18px;
      }
    }
  }

  &.is-disabled {
    opacity: .4;
  }
}
</style>
