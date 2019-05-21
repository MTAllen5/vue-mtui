<template>
  <div class="mtui-form-item">
    <div class="mtui-form-item-hd">
      <label v-if="typeof label !== 'undefined'" :style="{width: labelWidth + 'px', 'text-align': align}">{{ label }}</label>
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
      default: 110
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
  box-sizing: border-box;
  padding: 8px 15px;
  min-height: 48px;

  &:not(:first-child)::before {
    @include border-top-line();
  }

  &-hd {
    font-size: $fontXMedium;

    label {
      padding-right: 10px;
      display: flex;
      line-height: 1.5;
    }
  }

  &-bd {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;

    .mtui-input input {
      padding: 0;
    }
  }
}
</style>
