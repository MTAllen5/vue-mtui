<template>
  <form :class="['mtui-form', 'mtui-label-' + align]">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'mtui-form',
  props: {
    labelWidth: Number,
    align: String
  },
  created () {
    this.$slots.default.filter(item => {
      return item.componentOptions.tag === 'm-form-item'
    }).forEach(item => {
      if (this.labelWidth) {
        item.componentOptions.propsData.labelWidth = this.labelWidth
      }
      if (this.align) {
        item.componentOptions.propsData.align = this.align
      }
    })
  }
}
</script>

<style lang="scss">
.mtui-form {
  background: #fff;
}
</style>

