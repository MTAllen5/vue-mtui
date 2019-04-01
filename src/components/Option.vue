<template>
  <div class="option" @click="handleClick">
    {{ label ? label : value }}
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    label: String
  },
  methods: {
    handleClick () {
      // this.$parent.handleSelect({
      //   value: this.value,
      //   label: this.label
      // })
      this.$emit('change', {
        value: this.value,
        label: this.label
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/variable.scss'

.option
  padding 0 20px
  line-height 34px
  font-size $fontXMedium
  &:hover 
    background-color $bgColor
</style>

