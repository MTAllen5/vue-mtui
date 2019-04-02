<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  props: {
    inline: Boolean,
    labelWidth: String,
    align: String
  },
  mounted () {
    this.$slots.default.filter(item => {
      return item.componentOptions.tag === 'FormItem'
    }).forEach(item => {
      item.componentInstance.$data.labelWidth = this.labelWidth
      item.componentInstance.$data.inline = this.inline
      item.componentInstance.$data.align = this.align
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/variable.scss'

</style>

