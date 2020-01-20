<template>
  <div :class="[
    'mtui-cell',
    {'has-icon': icon},
    {'clickable': arrow}
  ]" @click.stop="toLink">
    <div class="mtui-cell-head">
        <m-icon class="mtui-cell-icon" :type="icon" v-if="icon"></m-icon>
        <label v-if="label">{{ label }}</label>
    </div>

    <div class="mtui-cell-body">
      <slot></slot>
    </div>

    <div class="mtui-cell-foot">
      <label v-if="desc">{{ desc }}</label>
      <m-icon type="ios-arrow-forward" v-if="arrow"></m-icon>
    </div>
  </div>
</template>

<script>
import Icon from '../icon/Icon'

export default {
  name: 'm-cell',
  components: { MIcon: Icon },
  props: {
    icon: String,
    label: String,
    link: String,
    arrow: Boolean,
    desc: String
  },
  methods: {
    toLink () {
      if (this.link) {
        this.$router.push(this.link)
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
