<template>
  <transition name="fadeIn">
  <div class="mtui-mask" @touchmove.prevent v-if="showFlag" @click.self.stop="hide"></div>
  </transition>
</template>

<script>
export default {
  name: 'm-mask',
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    hide () {
      this.showFlag = false
    },

    show () {
      this.showFlag = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/css/mixins.scss';

.mtui-mask {
  @include mask(9990, .6);
}
</style>
