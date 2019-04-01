<template>
  <span class="lz-switch" :class="{'active': value}" @click.prevent="change"></span>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change () {
      this.$emit('change')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/variable.scss';

.lz-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 28px;
  background-color: $lightGray;
  border-radius: 28px;
  transition: background-color .15s linear;
  &:after {
    content: '';
    position: absolute;
    left: 2px;
    top: 2px;
    display: block;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 3px 5px rgba(0,0,0,.3);
    transition: left .15s linear;
  }
  &.active {
    background-color: $mainColor;
    &:after {
      left: 34px;
    }
  }
}
</style>

