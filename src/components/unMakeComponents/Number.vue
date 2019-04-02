<template>
  <div class="number-ctn">
    <button class="number-btn number-btn-reduce" :class="{'disabled': counter <= 0}" :disabled="counter <= 0" v-show="counter > 0" @click="reduce"></button>
    <input v-if="type === 'input'" v-show="counter > 0" class="number-ipt" type="tel" v-model="counter" maxlength="4" readonly>
    <span v-if="type === 'span'" v-show="counter > 0" class="number-span">{{ counter }}</span>
    <button class="number-btn number-btn-increase" @click="increase"></button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'span'
    }
  },
  data () {
    return {
      counter: this.value
    }
  },
  methods: {
    increase () {
      this.counter++
      this.$emit('update:value', this.counter)
    },
    reduce () {
      this.counter--
      this.$emit('update:value', this.counter)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/variable.scss'
@import '../../common/css/mixins.scss'

.number-ctn
  display inline-block

  .number-span
    display inline-block
    min-width 28px
    height 28px
    line-height 28px
    vertical-align middle
    text-align center
    font-size $fontMedium
  .number-ipt
    padding 3px
    width 36px
    height 28px
    border 1px solid $lineColor
    border-radius 4px
    text-align center
    vertical-align middle
    font-size $fontMedium

  .number-btn
    position relative
    width 28px
    height 28px
    background-color $mainColor
    border none
    border-radius 4px
    vertical-align middle
    &::before,
    &::after
      content ''
      position absolute
      left 50%
      top 50%
      transform translate3d(-50%, -50%, 0)
      width 50%
      height 2px
      background-color white
      border-radius 2px
    
    &.number-btn-reduce
      margin-right 5px
    
    &.number-btn-increase
      margin-left 5px

    &.number-btn-increase::after
      transform translate3d(-50%, -50%, 0) rotate(90deg)
    
    &.disabled
      background-color $lightGray
</style>
