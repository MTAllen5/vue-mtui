<template>
  <button class="lz-btn" :class="{'is-loading': loading}" :disabled="disabled || loading" @click.prevent="click" :style="{'border-radius': round ? '24px' : '4px'}">
    <i v-if="loading"></i>
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  props: {
    round: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/variable.scss'

.lz-btn
  padding 0 24px
  min-width 100px
  height 46px
  line-height 46px
  border none
  text-align center
  font-size $fontXMedium
  transition all .2s
  color gray
  white-space nowrap
  &.long
    width 100%
  &:active
    background-color alpha($gray, .3)
  &.is-loading
    i
      display inline-block
      margin-right 6px
      width 1em
      height 1em
      background url($iconLoadingWhite) center center no-repeat
      background-size 100% 100%
      vertical-align middle
      animation rotate-loading 1s linear forwards infinite
      @keyframes rotate-loading
        0%
          transform rotate(0)
        100%
          transform rotate(360deg)
  &.primary
    background-color $mainColor
    color white
    &:active,
    &.is-loading
      background-color alpha($mainColor, .7)
  &.info
    background-color $gray
    color white
    &:active,
    &.is-loading
      background-color alpha($gray, .7)
  &.success
    background-color $successColor
    color white
    &:active,
    &.is-loading
      background-color alpha($successColor, .7)
  &.blue
    background-color $linkColor
    color white
    &:active,
    &.is-loading
      background-color alpha($linkColor, .7)
  &.warn
    background-color $warnColor
    color white
    &:active,
    &.is-loading
      background-color alpha($warnColor, .7)
  &[disabled]
    background-color $lightGray
    color white
    border-color $lightGray
    cursor not-allowed


  &.plain
    border 1px solid $lineColor
    background-color transparent
    &:active
      background-color transparent
      opacity .5
    &.is-loading
      background-color transparent
      i
        background-image url($iconLoading)
    &.info
      border-color $gray
      color $gray
    &.primary
      border-color $mainColor
      color $mainColor
    &.warn
      border-color $warnColor
      color $warnColor
    &.success
      border-color $successColor
      color $successColor
    &.blue
      border-color $linkColor
      color $linkColor
    &[disabled]
      opacity .5
      cursor not-allowed
  

  &.text
    padding 0 16px
    font-size $fontMedium
    background-color transparent
    &:active
      background-color transparent
      opacity .7
    &.info
      color $gray
    &.primary
      color $mainColor
    &.warn
      color $warnColor
    &.success
      color $successColor
    &.blue
      color $linkColor

</style>

