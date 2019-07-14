<template>
  <p :class="'mtui-h' + type"><slot></slot></p>
</template>

<script>
export default {
  name: 'mtui-title',
  props: {
    type: {
      type: String,
      default: '1'
    }
  }
}
</script>

<style lang="scss">
.mtui-h1,
.mtui-h2,
.mtui-h3,
.mtui-h4,
.mtui-h5,
.mtui-h6 {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
  font-weight: 400;
  line-height: 2;
}

.mtui-h1 { font-size: $fontXXLarge; }
.mtui-h2 { font-size: $fontXLarge; }
.mtui-h3 { font-size: $fontLarge; }
.mtui-h4 { font-size: $fontXMedium; }
.mtui-h5 { font-size: $fontMedium; }
.mtui-h6 { font-size: $fontSmall; }
</style>
