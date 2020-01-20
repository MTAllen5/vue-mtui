<template>
  <div class="mtui-grid-item" :style="{width: colWidth, color: color}" @click.stop="toLink">
    <div :class="[
      'mtui-grid-item-content',
      {'mtui-grid-item-content-gap': gap !== 0},
      {clickable: link !== undefined},
      {'mtui-grid-item-border': border}
    ]" :style="{marginRight: gap + 'px', marginBottom: gap + 'px'}">
      <slot></slot>
      <m-icon class="mtui-grid-item-icon" :type="icon" v-if="icon"></m-icon>
      <p class="mtui-grid-item-label" v-if="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import Icon from '../icon/Icon'

export default {
  name: 'm-grid-item',
  components: { MIcon: Icon },
  props: {
    icon: String,
    text: String,
    link: String,
    color: String
  },
  data () {
    return {
      col: 3,
      gap: 0,
      border: true
    }
  },
  computed: {
    colWidth () {
      return 100 / this.col + '%'
    }
  },
  created () {
    let parent = this.$parent || this.$root
    let name = parent.$options.name

    while (parent && (!name || name !== 'm-grid')) {
      parent = parent.$parent

      if (parent) {
        name = parent.$options.name
      }
    }
    if (parent) {
      this.col = parent.col
      this.gap = parent.gap
      this.border = parent.border
    }
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
@import '@/common/css/variable.scss';
@import '@/common/css/mixins.scss';

.mtui-grid-item {
  font-size: $fontMedium;
  color: $colorPrimaryTxt;

  &-content {
    position: relative;
    @include flex-center();
    flex-direction: column;
    padding: 15px 8px;
    background-color: white;
    overflow: hidden;

    &.mtui-grid-item-border {
      &::before {
        @include border-right-line();
      }
      &::after {
        @include border-bottom-line();
      }

      &.mtui-grid-item-content-gap {
        &::before,
        &::after { display: none; }

        &::after {
          content: '';
          position: absolute;
          bottom: -50%;
          right: -50%;
          left: -50%;
          top: -50%;
          z-index: 1;
          display: block;
          width: auto;
          pointer-events: none;
          border: 1px solid $colorDivider;
          transform-origin: center;
          transform: scale(.5);
        }
      }
    }

    &.clickable:active {
      background-color: $colorBg;
    }
  }

  &-icon {
    font-size: $fontXXLarge;
  }

  &-label {
    margin-top: 8px;
    margin-bottom: 0;
  }
}
</style>
