<template>
  <button class="mtui-btn" :class="classObj" :disabled="disabled || loading" @click.prevent="click">
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
    },
    inline: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    primary: {
      type: Boolean,
      defautl: false
    }
  },
  data () {
    return {
      classObj: {
        'is-loading': this.loading,
        'mtui-btn-round': this.round,
        'mtui-btn-inline': this.inline,
        'mtui-btn-border': this.outline,
        'mtui-btn-primary': this.primary
      }
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
@import '../../common/css/variable.scss';
@import '../../common/css/mixins.scss';

.mtui-btn {
  margin-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  background-color: white;
  border: 1px solid $colorLine;
  line-height: 44px;
  font-size: $fontXMedium;
  color: $black;
  @include text-overflow;
  cursor: pointer;
  outline: none;
  transition: all .2s;

  &-inline {
    margin-left: 10px;
    margin-right: 10px;
    display: inline-block;
    width: auto;
  }

  &-round {
    border-radius: 4px;
  }

  &:active {
    background-color: transparentize($colorDefault, .7);
  }
  // &.is-loading
  //   i
  //     display inline-block
  //     margin-right 6px
  //     width 1em
  //     height 1em
  //     background url($iconLoadingWhite) center center no-repeat
  //     background-size 100% 100%
  //     vertical-align middle
  //     animation rotate-loading 1s linear forwards infinite
  //     @keyframes rotate-loading
  //       0%
  //         transform rotate(0)
  //       100%
  //         transform rotate(360deg)
  &-primary {
    background-color: $colorPrimary;
    border-color: $colorPrimary;
    color: white;
    &:active,
    &.is-loading {
      background-color: transparentize($colorPrimary, .3);
    }
  }
  &-error {
    background-color: $colorError;
    border-color: $colorError;
    color: white;
    &:active,
    &.is-loading {
      background-color: transparentize($colorError, .3);
    }
  }
  // &.info
  //   background-color $gray
  //   color white
  //   &:active,
  //   &.is-loading
  //     background-color alpha($gray, .7)
  // &.success
  //   background-color $successColor
  //   color white
  //   &:active,
  //   &.is-loading
  //     background-color alpha($successColor, .7)
  // &.warn
  //   background-color $warnColor
  //   color white
  //   &:active,
  //   &.is-loading
  //     background-color alpha($warnColor, .7)
  // &[disabled]
  //   background-color $lightGray
  //   color white
  //   border-color $lightGray
  //   cursor not-allowed


  // &.plain
  //   border 1px solid $lineColor
  //   background-color transparent
  //   &:active
  //     background-color transparent
  //     opacity .5
  //   &.is-loading
  //     background-color transparent
  //     i
  //       background-image url($iconLoading)
  //   &.info
  //     border-color $gray
  //     color $gray
  //   &.primary
  //     border-color $mainColor
  //     color $mainColor
  //   &.warn
  //     border-color $warnColor
  //     color $warnColor
  //   &.success
  //     border-color $successColor
  //     color $successColor
  //   &.blue
  //     border-color $linkColor
  //     color $linkColor
  //   &[disabled]
  //     opacity .5
  //     cursor not-allowed
  

  // &.text
  //   padding 0 16px
  //   font-size $fontMedium
  //   background-color transparent
  //   &:active
  //     background-color transparent
  //     opacity .7
  //   &.info
  //     color $gray
  //   &.primary
  //     color $mainColor
  //   &.warn
  //     color $warnColor
  //   &.success
  //     color $successColor
  //   &.blue
  //     color $linkColor
}
</style>

