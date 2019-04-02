<template>
  <transition name="fadeIn">
  <div class="mask" v-if="maskFlag">
    <p></p>
  </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      maskFlag: this.show
    }
  },
  methods: {
    hide () {
      this.maskFlag = false
    },
    show () {
      this.maskFlag = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/variable.scss'
@import '../../common/css/mixins.scss'

.mask 
  mask()
</style>
