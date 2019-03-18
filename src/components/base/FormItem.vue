<template>
  <div class="form-item" :class="{'form-item-inline': inline}">
    <label class="form-item-label" :style="{width: labelWidth, 'text-align': align}">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  },
  data () {
    return {
      labelWidth: '40px',
      inline: false,
      align: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/variable.scss'

.form-item
  margin-bottom 10px
  line-height 46px
  .form-item-label
    padding-right 16px
    font-size $fontXMedium
  
  &.form-item-inline
    margin-bottom 18px
    .form-item-label
      float left
</style>

