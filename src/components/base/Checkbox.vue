<template>
  <label :class="['mtui-checkbox', {'is-checked': value}, 'is-' + type]">
    <input
      type="checkbox"
      :checked="value"
      @change="handleChange"
    >
    <m-icon type="ios-checkmark" class="mtui-checkbox-default-icon"></m-icon>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'mtui-checkbox',
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
    }
  },
  data () {
    return {

    }
  },
  computed: {
    checkboxIcon () {
      return this.value ? 'ios-checkbox' : 'ios-square-outline'
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
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 4px;
  line-height: 30px;
  color: lighten($black, 40%);
  text-align: center;
  overflow: hidden;

  &:not(:last-child) {
    margin-right: 20px;
  }

  input[type='checkbox'] {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    outline: none;
  }

  &-default-icon.ion {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    width: 14px;
    height: 14px;
    background-color: white;
    border: 1px solid lighten($black, 50%);
    border-radius: 2px;
    transition: all .15s;
    font-size: 22px;

    &::before {
      transform: scale(0);
      transition: all .12s;
    }
  }

  &.is-default {
    padding-left: 26px;
    line-height: 32px;

    .mtui-checkbox-default-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.is-checked {
      color: $colorPrimary;
      .mtui-checkbox-default-icon {
        background-color: $colorPrimary;
        border-color: $colorPrimary;
        color: white;
        &::before {
          transform: scale(1);
        }
      }
    }
  }

  &.is-button {
    padding: 0 8px;
    border: 1px solid lighten($black, 50%);
    border-radius: 4px;
    transition: all .15s;

    &.is-checked {
      background-color: $colorPrimary;
      border-color: $colorPrimary;
      color: white;
    }
  }
}
</style>
