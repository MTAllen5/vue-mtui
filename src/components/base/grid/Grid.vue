<template>
  <div class="mtui-grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mtui-grid',
  props: {
    col: {
      type: Number,
      default: 3
    }
  }
}
</script>

<style lang="scss">
.mtui-grid {
  position: relative;
  display: flex;
  flex-flow: row wrap;

  &::before {
    @include border-top-line();
  }
  &::after {
    @include border-left-line();
  }
}
</style>

