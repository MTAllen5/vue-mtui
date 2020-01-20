<template>
  <div class="mtui-panel">
    <div class="mtui-panel-head" v-if="hasHead">
      <h3 class="mtui-panel-title">
        <m-icon :type="titleIcon" v-if="titleIcon"></m-icon>{{ title }}
      </h3>
      <div class="mtui-panel-head-desc">
        <slot name="headDesc"></slot>
      </div>
    </div>

    <div class="mtui-panel-body">
      <slot></slot>
    </div>

    <div class="mtui-panel-foot" v-if="hasFoot">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script>
import Icon from '../icon/Icon'

export default {
  name: 'm-panel',
  components: { MIcon: Icon },
  props: {
    title: String,
    titleIcon: String
  },
  data () {
    return {
      hasHead: false,
      hasFoot: false
    }
  },
  created () {
    this.hasHead = this.title || !!this.$slots.headDesc
    this.hasFoot = !!this.$slots.foot
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
