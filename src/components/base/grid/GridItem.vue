<template>
  <a href="javascript:;" class="mtui-grid-item" :style="{width: colWidth}">
    <m-icon :type="icon" v-if="icon != ''"></m-icon>
    <p class="mtui-grid-item-label">
      <slot></slot>
    </p>
  </a>
</template>

<script>
export default {
  name: 'mtui-grid-item',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      col: 3
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

    while (parent && (!name || name !== 'mtui-grid')) {
      parent = parent.$parent

      if (parent) {
        name = parent.$options.name
      }
    }
    if (parent) {
      this.col = parent.col
    }
  }
}
</script>


<style lang="scss">
.mtui-grid-item {
  position: relative;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px 10px;
  box-sizing: border-box;
  text-decoration: none;
  color: $black;
  text-align: center;

  &::before {
    @include border-right-line();
  }
  &::after {
    @include border-bottom-line();
  }

  .ion {
    width: $fontXXLarge * 1.2;
    height: $fontXXLarge * 1.2;
    font-size: $fontXXLarge;
    line-height: $fontXXLarge * 1.2;
    text-align: center;
    color: lighten($black, 30%);
  }

  .mtui-grid-item-label {
    margin: 0;
    margin-top: 5px;
  }
}
</style>

