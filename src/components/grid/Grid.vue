<template>
  <div :class="[
    'mtui-grid',
    {'mtui-grid-gap': gap !== 0},
    {'mtui-grid-border': border}
  ]" :style="{paddingLeft: gap + 'px', paddingTop: gap + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-grid',
  props: {
    col: {
      type: Number,
      default: 3
    },
    gap: {
      type: Number,
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/css/mixins.scss';

.mtui-grid {
  position: relative;
  display: flex;
  flex-flow: row wrap;

  &-border {
    &::before {
      @include border-top-line();
      z-index: 1;
    }
    &::after {
      @include border-left-line();
      z-index: 1;
    }

    &-gap {
      &::before,
      &::after { display: none; }
    }
  }
}
</style>
