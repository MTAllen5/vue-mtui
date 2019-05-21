<template>
  <span class="mtui-switch" :class="{'active': value}" @touchend.prevent="change"></span>
</template>

<script>
export default {
  name: 'mtui-switch',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change () {
      this.$emit('change', !this.value)
    }
  }
}
</script>

<style lang="scss">

.mtui-switch {
  position: relative;
  display: inline-block;
  margin: 2px 0;
  width: 50px;
  height: 28px;
  background-color: $colorBg;
  border-radius: 28px;
  transition: background-color .1s linear;

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
    transition: left .1s linear;
  }

  &.active {
    background-color: $colorPrimary;
    &:after {
      left: 24px;
    }
  }
}
</style>

