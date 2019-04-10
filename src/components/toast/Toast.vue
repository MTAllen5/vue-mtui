<template>
  <div class="mtui-toast" :class="'mtui-toast-' + type">
    <m-icon :type="icon" v-if="icon !== ''"></m-icon>
    <div class="mtui-toast-content">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'mtui-toast',
  data () {
    return {
      icon: '',
      message: '',
      timeout: 1000,
      type: 'bottom'
    }
  }
}
</script>
<style lang="scss" scoped>
.mtui-toast {
  position: fixed;
  left: 50%;
  z-index: 999;
  padding: 10px 15px;
  min-width: 100px;
  max-width: 80%;
  background-color: transparentize($black, .2);
  border-radius: 4px;
  text-align: center;
  color: white;

  .ion {
    display: block;
    font-size: 100px;
    line-height: .8;
    &::before {
      line-height: inherit;
    }
  }

  .mtui-toast-content {
    font-size: $fontXMedium;
    word-break: break-all;
  }

  &.mtui-toast-top {
    top: 1%;
    transform: translate3d(-50%, 0, 0);
    animation: zoomIn-top .1s ease-out forwards;
  }
  &.mtui-toast-bottom {
    bottom: 8%;
    transform: translate3d(-50%, 0, 0);
    animation: zoomIn-bottom .1s ease-out forwards;
  }
  &.mtui-toast-center {
    top: 50%;
    transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
    animation: zoomIn-center .1s ease-out forwards;
  }
}

@keyframes zoomIn-center {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@keyframes zoomIn-top {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -150%, 0);
  }
  50% {
    opacity: 1;
  }
}
@keyframes zoomIn-bottom {
  0% {
    opacity: 0;
    transform: translate3d(-50%, 150%, 0);
  }
  50% {
    opacity: 1;
  }
}
</style>
