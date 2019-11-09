<template>
  <div class="mtui-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-box'
}
</script>

<style lang="scss" scoped>
.mtui-box {
  @extend .mtui-common;
  padding: 16px;
  background-color: white;
}
</style>
