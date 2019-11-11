<template>
  <div :class="['mtui-cell', {'has-icon': icon !== ''}]" @click="toLink">
    <div class="mtui-cell-icon" v-if="icon !== ''">
      <m-icon :type="icon"></m-icon>
    </div>

    <div class="mtui-cell-body">
      <slot></slot>
    </div>

    <div class="mtui-cell-foot">
      <label>{{ footText }}</label>
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
    },
    footText: String
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

<style lang="scss" scoped>
.mtui-cell {
  @extend .mtui-common;
  @include flex-center();
  position: relative;
  padding: 13px 16px;
  font-size: $fontXMedium;
  line-height: 24px;
  overflow: hidden;

  &:not(:first-child)::before {
    @include border-top-line();
    left: 16px;
  }

  &.has-icon::before {
    left: 43px;
  }

  .mtui-cell-icon {
    margin-right: 10px;
    width: 18px;
    font-size: $fontXLarge;
    color: lighten($black, 50%);
    text-align: center;
  }

  .mtui-cell-body {
    flex: 1;
  }

  .mtui-cell-foot {
    display: flex;
    align-items: center;
    color: lighten($black, 60%);

    label {
      margin-left: 8px;
      font-size: 14px;
    }

    .ion {
      margin-left: 8px;
    }
  }
}
</style>
