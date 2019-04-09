<template>
  <div class="mtui-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mtui-box'
}
</script>

<style lang="scss">
.mtui-box {
  @extend .mtui;
  padding: 15px;
  background-color: white;
}
</style>

