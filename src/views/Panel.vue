<template>
  <div>
    <m-tl type="1">Panel</m-tl>
    <m-tl type="5">普通Panel</m-tl>
    <m-panel>
      <m-box>我是内容</m-box>
    </m-panel>
    <m-tl type="5">带头部Panel</m-tl>
    <m-panel>
      <div slot="head"><m-icon type="ios-cloud" style="margin-right: 10px;"></m-icon>我是头部</div>
      <m-box>我是内容</m-box>
    </m-panel>
    <m-tl type="5">带脚部Panel</m-tl>
    <m-panel>
      <div slot="head">我是头部</div>
      <m-box>我是内容</m-box>
      <div slot="foot">
        <m-cell arrow>查看更多</m-cell>
      </div>
    </m-panel>
  </div>
</template>

<style lang="scss" scoped>
.mtui-h5 {
  color: lighten($black, 50%);
}
</style>

