<template>
  <transition :name="'toast' + type">
  <div :class="['mtui-toast', 'mtui-toast-' + type, {'has-icon': icon}]">
    <m-icon class="mtui-toast-icon" :type="icon" v-if="icon !== ''"></m-icon>
    <div class="mtui-toast-content">{{ message }}</div>
  </div>
  </transition>
</template>

<script>
import Icon from '../icon/Icon'

export default {
  name: 'm-toast',
  components: { MIcon: Icon },
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
@import './style.scss';
</style>
