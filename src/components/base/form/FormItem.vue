<template>
  <div class="mtui-form-item">
    <div class="mtui-form-item-hd">
      <label :style="{width: labelWidth + 'px', 'text-align': align}">{{ label }}</label>
    </div>
    <div class="mtui-form-item-bd">
      <slot></slot>
    </div>
    <div class="form-item-fd">

    </div>
  </div>
</template>

<script>
export default {
  name: 'mtui-form-item',
  props: {
    label: String,
    labelWidth: {
      type: Number,
      default: 100
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.mtui-form-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 15px;
  height: 46px;

  &:not(:first-child)::before {
    @include border-top-line();
  }

  &-hd {
    padding-right: 5px;
    font-size: $fontXMedium;

    label {
      display: flex;
    }
  }

  &-bd {
    flex: auto;
    // text-align: right;
  }
}
</style>
