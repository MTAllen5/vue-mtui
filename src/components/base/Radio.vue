<template>
  <label :class="['mtui-radio', {'is-checked': isChecked}, 'is-' + type]">
    <input
      type="radio"
      :checked="isChecked"
      @change="handleChange"
    >
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'mtui-radio',
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
    }
  },
  data () {
    return {

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

<style lang="scss">
.mtui-radio {
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
    padding-left: 26px;
    line-height: 32px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      background-color: white;
      border: 1px solid lighten($black, 50%);
      border-radius: 50%;
      transition: all .1s;
    }

    &::after {
      content: '';
      position: absolute;
      left: 7px;
      top: 50%;
      transform: translateY(-50%) scale(0);
      width: 4px;
      height: 4px;
      background-color: white;
      border-radius: 50%;
      transition: all .15s;
    }

    &.is-checked {
      color: $colorPrimary;
      &::before {
        background-color: $colorPrimary;
        border-color: $colorPrimary;
      }
      &::after {
        transform: translateY(-50%) scale(1);
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
