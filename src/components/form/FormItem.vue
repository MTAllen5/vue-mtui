<template>
  <div class="mtui-form-item">
    <div class="mtui-form-item-hd">
      <label v-if="label" :style="{ width: lWidth + 'px', 'text-align': lAlign }">{{ label }}</label>
    </div>

    <div class="mtui-form-item-bd" :class="['align-' + cAlign]">
      <slot></slot>
    </div>

    <div class="form-item-fd">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-form-item',
  props: {
    label: String,
    labelWidth: Number,
    labelAlign: String,
    align: String
  },
  data () {
    return {
      lWidth: 85,
      lAlign: 'left',
      cAlign: 'left'
    }
  },
  created () {
    this.lWidth = this.labelWidth || this.$parent.labelWidth || this.lWidth
    this.lAlign = this.labelAlign || this.$parent.labelAlign || this.lAlign
    this.cAlign = this.align || this.$parent.align || this.cAlign
  }
}
</script>

<style lang="scss" scoped>
.mtui-form-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 8px 16px;
  min-height: 50px;

  &:not(:first-child)::before {
    @include border-top-line();
  }

  &-hd {
    flex-shrink: 0;
    font-size: $fontXMedium;

    label {
      display: inline-block;
      margin: 5px 0;
      padding-right: 10px;
      line-height: 1.5;
    }
  }

  &-bd {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;

    &.align-center {
      justify-content: center;
      text-align: center;

      /deep/ .mtui-input input { text-align: center; }
      /deep/ .mtui-select select {
        text-align: center;
        text-align-last: center;
      }
    }
    &.align-right {
      justify-content: flex-end;
      text-align: right;

      /deep/ .mtui-input input { text-align: right; }
      /deep/ .mtui-select select {
        text-align: right;
        text-align-last: right;
      }
    }

    /deep/ .mtui-input input,
    /deep/ .mtui-select select,
    /deep/ .mtui-cell,
    /deep/ .mtui-textarea {
      padding-left: 0;
      padding-right: 0;
    }
    /deep/ .mtui-cell {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
}
</style>
