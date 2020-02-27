<template>
  <div class="api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
      <m-title type="1">Cell</m-title>

      <m-panel title="普通单行列表">
        <m-cell>我是内容</m-cell>
        <m-cell>我是内容</m-cell>
      </m-panel>

      <m-panel title="带箭头单行列表">
        <m-cell arrow>我是内容</m-cell>
        <m-cell arrow desc="详细信息">我是内容</m-cell>
      </m-panel>

      <m-panel title="带标题单行列表">
        <m-cell label="我是标题" arrow>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</m-cell>
        <m-cell label="我是标题" arrow>我是内容</m-cell>
      </m-panel>

      <m-panel title="带图标单行列表">
        <m-cell label="我是标题" icon="social-android" arrow>我是内容</m-cell>
        <m-cell label="我是标题" icon="social-apple" arrow>我是内容</m-cell>
      </m-panel>
    </div>
  </div>
</template>

<script>
import Content from '../doc/Cell'

export default {
  name: 'exp-cell',
  components: { DocContent: Content }
}
</script>
