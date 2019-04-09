<template>
  <div :class="['mtui-cell', {'has-icon': icon !== ''}]" @click="toLink">
    <div class="mtui-cell-icon" v-if="icon !== ''">
      <m-icon :type="icon"></m-icon>
    </div>
    <div class="mtui-cell-body">
      <slot></slot>
    </div>
    <div class="mtui-cell-arrow" v-if="arrow">
      <m-icon type="ios-arrow-forward"></m-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mtui-cell',
  props: {
    icon: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    arrow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toLink () {
      if (this.link) {
        this.$router.push(this.link)
      }
    }
  }
}
</script>

<style lang="scss">
.mtui-cell {
  @extend .mtui;
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  font-size: $fontXMedium;
  line-height: 1.6;
  overflow: hidden;

  &:not(:first-child)::before {
    @include border-top-line();
  }

  &.has-icon::before {
    left: 48px;
  }

  .mtui-cell-icon {
    margin-right: 15px;
    width: 18px;
    font-size: $fontXLarge;
    color: $colorPrimary;
    text-align: center;
    line-height: $fontXMedium * 1.6;
  }

  .mtui-cell-body {
    flex: 1;
  }

  .mtui-cell-arrow {
    color: lighten($black, 60%);
    text-align: center;
  }
}
</style>
