<template>
  <transition name="fadeIn">
  <div class="mtui-loading" @touchmove.prevent v-if="showFlag">
    <div class="mtui-loading-main">
      <m-icon class="mtui-loading-icon" type="load-c"></m-icon>
      <div v-if="tips.length > 0" class="mtui-loading-txt" v-html="tips"></div>
    </div>
  </div>
  </transition>
</template>

<script>
import Icon from '../icon/Icon'

export default {
  name: 'm-loading',
  components: { MIcon: Icon },
  data () {
    return {
      showFlag: false,
      tips: ''
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
.mtui-loading {
  @include mask(900, .6, white);
  @include flex-center();

  .mtui-loading-main {
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: transparentize($black, .2);
    border-radius: 8px;
    color: white;
    animation: zoomIn .1s ease forwards;

    .mtui-loading-icon {
      font-size: $fontXXLarge;
      animation: rotate-loading 1.6s linear forwards infinite;
      @keyframes rotate-loading {
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
      }
    }

    .mtui-loading-txt {
      margin-right: 10px;
      font-size: $fontMedium;
      max-width: 140px;
      @include text-overflow();
    }
  }
}
</style>
