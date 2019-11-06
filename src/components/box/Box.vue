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

<style lang="scss">
.mtui-box {
  @extend .mtui-common;
  padding: 15px;
  background-color: white;
}
</style>
