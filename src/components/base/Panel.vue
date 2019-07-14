<template>
  <div class="mtui-panel">
    <div class="mtui-panel-head" v-if="hasHead">
      <slot name="head"></slot>
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
export default {
  name: 'mtui-panel',
  data () {
    return {
      hasTitle: false,
      hasHead: false,
      hasFoot: false
    }
  },
  created () {
    this.hasHead = !!this.$slots.head
    this.hasFoot = !!this.$slots.foot
  }
}
</script>

<style lang="scss">
.mtui-panel {
  @extend .mtui;
  position: relative;
  overflow: hidden;

  &:not(:first-child) {
    margin-top: 10px;
  }

  &:not(:first-child)::before {
    @include border-top-line();
  }
  &::after {
    @include border-bottom-line();
  }

  .mtui-panel-head,
  .mtui-panel-body,
  .mtui-panel-foot {
    position: relative;
    background: #fff;
  }

  .mtui-panel-head {
    padding: 10px 15px;
    color: lighten($black, 40%);
    font-size: $fontMedium;
    &::after {
      @include border-bottom-line();
      left: 15px;
    }
  }

  .mtui-panel-foot {
    padding: 10px 15px;
    color: lighten($black, 60%);
    font-size: $fontMedium;
    &::before {
      @include border-top-line();
      left: 15px;
    }

    .mtui-cell {
      padding: 0;
      font-size: $fontMedium;
      color: $colorMinor;
    }
  }
}
</style>
