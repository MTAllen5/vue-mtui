<template>
  <div class="api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
      <m-title type="1">Panel</m-title>

      <m-title type="5">普通Panel</m-title>
      <m-panel>
        <m-box>我是内容</m-box>
      </m-panel>

      <m-title type="5">带头部Panel</m-title>
      <m-panel title="这是标题" title-icon="earth">
        <m-box>我是内容</m-box>
        <m-button-group type="right" slot="foot">
          <m-button inline size="small">取消</m-button>
          <m-button inline size="small" type="primary">确定</m-button>
        </m-button-group>
      </m-panel>

      <m-title type="5">带脚部Panel</m-title>
      <m-panel title="这是标题">
        <m-box>我是内容</m-box>
        <m-cell slot="foot" desc="查看更多" arrow></m-cell>
      </m-panel>
    </div>
  </div>
</template>

<script>
import Content from '../doc/Panel'

export default {
  name: 'exp-panel',
  components: { DocContent: Content }
}
</script>
