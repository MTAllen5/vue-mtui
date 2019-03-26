<template>
  <button :class="classAry" :disabled="disabled || loading" @click.prevent="click">
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
    plain: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      classAry: [
        'mtui-btn',
        'mtui-btn-' + this.type,
        { 'is-loading': this.loading },
        { 'is-disabled': this.disabled },
        { 'is-large': this.size === 'large' },
        { 'is-small': this.size === 'small' },
        { 'mtui-btn-round': this.round },
        { 'mtui-btn-inline': this.inline },
        { 'mtui-btn-plain': this.plain }
      ]
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
  border: 1px solid $colorLine;
  font-size: $fontXMedium;
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
    border-radius: 6px;
  }

  &.is-small {
    height: 34px;
    font-size: $fontMedium;
  }

  &.is-large {
    height: 54px;
    font-size: $fontXLarge;
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
  &-default {
    background-color: white;
    color: $black;
  }
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
  &-success {
    background-color: $colorSuccess;
    border-color: $colorSuccess;
    color: white;
    &:active,
    &.is-loading {
      background-color: transparentize($colorSuccess, .3);
    }
  }
  &-warn {
    background-color: $colorWarn;
    border-color: $colorWarn;
    color: white;
    &:active,
    &.is-loading {
      background-color: transparentize($colorWarn, .3);
    }
  }
  &.is-disabled {
    background-color: $colorDisabled!important;
    border-color: $colorDisabled!important;
    color: white;
    cursor: not-allowed!important;
  }

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

