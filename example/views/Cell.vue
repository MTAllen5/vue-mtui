<template>
  <div>
    <m-title type="1">Cell</m-title>
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
      <m-cell icon="social-android" arrow>我是内容</m-cell>
      <m-cell icon="social-apple" arrow>我是内容</m-cell>
    </m-panel>
  </div>
</template>
