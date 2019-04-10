<template>
  <div>
    <m-tl type="1">Cell</m-tl>
    <m-panel>
      <div slot="head">普通单行列表</div>
      <m-cell>我是内容</m-cell>
      <m-cell>我是内容</m-cell>
    </m-panel>
    <m-panel>
      <div slot="head">带箭头单行列表</div>
      <m-cell arrow>我是内容</m-cell>
      <m-cell arrow foot-text="详细信息">我是内容</m-cell>
    </m-panel>
    <m-panel>
      <div slot="head">带图标单行列表</div>
      <m-cell icon="ios-moon" arrow>我是内容</m-cell>
      <m-cell icon="ios-moon" arrow>我是内容</m-cell>
    </m-panel>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>

