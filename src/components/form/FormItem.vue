<template>
  <div class="mtui-form-item" :class="{'is-block': cBlock}">
    <div class="mtui-form-item-hd">
      <label v-if="label" :style="{ width: lWidth + 'px', 'text-align': lAlign }">{{ label }}<i v-if="required">*</i></label>
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
    align: String,
    block: Boolean,
    required: Boolean
  },
  data () {
    return {
      lWidth: 85,
      lAlign: 'left',
      cAlign: 'left',
      cBlock: false
    }
  },
  created () {
    let parent = this.$parent || this.$root
    let name = parent.$options.name

    while (parent && (!name || name !== 'm-form')) {
      parent = parent.$parent

      if (parent) {
        name = parent.$options.name
      }
    }
    if (parent) {
      this.lWidth = this.labelWidth || parent.labelWidth || this.lWidth
      this.lAlign = this.labelAlign || parent.labelAlign || this.lAlign
      this.cAlign = this.align || parent.align || this.cAlign
      this.cBlock = this.block || parent.block || this.cBlock
    }
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
  background-color: #fff;

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

      i { color: #f5222d; }
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
        direction: rtl;
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

  &.is-block {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .mtui-form-item-hd,
    .mtui-form-item-bd {
      width: 100%;
    }
  }
}
</style>
