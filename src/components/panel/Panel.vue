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
  name: 'm-panel',
  data () {
    return {
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

<style lang="scss" scoped>
.mtui-panel {
  @extend .mtui-common;
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
    padding: 10px 16px;
    color: lighten($black, 50%);
    font-size: $fontMedium;
    line-height: 1.4;
    &::after {
      @include border-bottom-line();
      left: 16px;
    }
    .ion {
      font-size: 16px;
    }
  }

  .mtui-panel-foot {
    padding: 10px 16px;
    color: lighten($black, 60%);
    font-size: $fontMedium;
    &::before {
      @include border-top-line();
      left: 16px;
    }

    .mtui-cell {
      padding: 0;
      font-size: $fontMedium;
      color: $colorMinor;
    }
  }
}
</style>
