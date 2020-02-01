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
      this.tips = ''
    },
    show () {
      this.showFlag = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/css/variable.scss';
@import '@/common/css/mixins.scss';
@import '@/common/css/animate.scss';

.mtui-loading {
  @include mask(9992, .6, white);
  @include flex-center();

  .mtui-loading-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    min-width: 50px;
    min-height: 50px;
    background-color: rgba(0,0,0,0.7);
    border-radius: 8px;
    animation: zoomIn .1s ease forwards;
    color: white;

    .mtui-loading-icon {
      font-size: 40px;
      animation: turnRound 1.6s linear forwards infinite;
    }

    .mtui-loading-txt {
      margin-top: 5px;
      font-size: $fontMedium;
      max-width: 120px;
      @include text-overflow();
    }
  }
}
</style>
