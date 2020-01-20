<template>
  <p :class="'mtui-h' + type"><slot></slot></p>
</template>

<script>
export default {
  name: 'm-title',
  props: {
    type: {
      type: String,
      default: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-h1,
.mtui-h2,
.mtui-h3,
.mtui-h4,
.mtui-h5,
.mtui-h6 {
  @extend .mtui-common;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0 15px;
  font-weight: 400;
  line-height: 1.8;
}

.mtui-h1 { color: lighten($black, 10%); font-size: $fontXXLarge; }
.mtui-h2 { color: lighten($black, 20%); font-size: $fontXLarge; }
.mtui-h3 { color: lighten($black, 30%); font-size: $fontLarge; }
.mtui-h4 { color: lighten($black, 40%); font-size: $fontXMedium; }
.mtui-h5 { color: lighten($black, 50%); font-size: $fontMedium; }
.mtui-h6 { color: lighten($black, 60%); font-size: $fontSmall; }
</style>
