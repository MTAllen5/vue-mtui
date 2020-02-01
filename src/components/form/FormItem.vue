<template>
  <div :class="['mtui-form-item', {'is-block': cBlock}]">
    <div class="mtui-form-item-hd">
      <label
        v-if="label"
        :style="{ width: lWidth + 'px', 'text-align': lAlign }"
      >{{ label }}<i v-if="required">*</i></label>
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
      lWidth: 80,
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
@import './style.scss';
</style>
