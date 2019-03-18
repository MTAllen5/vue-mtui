<template>
  <div class="input-container">
    <input :type="type" v-model="val" :placeholder="placeholder" :disabled="disabled" :maxlength="maxlength">
    <i class="input-clear" v-if="clearable" v-show="val.length > 0" @click="clear"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: String,
    placeholder: String,
    disabled: Boolean,
    maxlength: String,
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      val: ''
    }
  },
  methods: {
    clear () {
      this.val = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/variable.scss'

.input-container
  display flex
  flex 1
  height 46px
  background-color $bgColor
  border-radius 8px

  input
    padding 0 16px
    flex 1
    width 100px
    height 100%
    background-color $bgColor
    border 0
    border-radius 8px
    font-size $fontXMedium
    color $gray
    &::-webkit-input-placeholder
      color $gray

  .input-clear
    display block
    width 40px
    height 46px
    background url(../../assets/icon_tc_clear.png) center center no-repeat
    background-size 16px 16px
</style>

