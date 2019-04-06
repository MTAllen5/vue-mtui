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
    font-size: $fontSmall;
    &::after {
      @include border-bottom-line();
    }
  }

}
</style>


