<template>
  <div class="home api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
      <m-title type="1">MTUI</m-title>

      <p class="mtui-p" style="margin-bottom: 40px;">一套基于vue2.0的移动端UI组件库，组件设计参考了<a class="mtui-link" target="_blank" href="https://weui.io/">weui</a>、<a class="mtui-link" target="_blank" href="https://youzan.github.io/vant/#/zh-CN/">vant</a>、<a class="mtui-link" target="_blank" href="https://github.com/ElemeFE/mint-ui">mint-ui</a>、<a class="mtui-link" target="_blank" href="https://github.com/didi/cube-ui">cube-ui</a>、<a class="mtui-link" target="_blank" href="https://ant.design/index-cn">ant design设计规范</a></p>

      <m-title type="5">Basic 基础组件</m-title>
      <m-panel>
        <div>
          <m-cell link="/buttons" arrow>Button 按钮</m-cell>
          <m-cell link="/icons" arrow>Icon 图标</m-cell>
          <m-cell link="/cells" arrow>Cell 单行列表</m-cell>
          <m-cell link="/titles" arrow>Title 标题</m-cell>
          <m-cell link="/panels" arrow>Panel 面板</m-cell>
          <m-cell link="/grids" arrow>Grid 网格</m-cell>
          <m-cell link="/popups" arrow>Popup 弹出层</m-cell>
        </div>
      </m-panel>

      <m-title type="5">Message 消息组件</m-title>
      <m-panel>
        <div>
          <m-cell link="/dialogs" arrow>Dialog 对话窗</m-cell>
          <m-cell link="/alert" arrow>Alert 提示窗</m-cell>
          <m-cell link="/confirm" arrow>Confirm 确认窗</m-cell>
          <m-cell link="/toast" arrow>Toast 消息提示</m-cell>
          <m-cell link="/loading" arrow>Loading 加载提示</m-cell>
          <m-cell link="/loadingbar" arrow>LoadingBar 页面加载进度条</m-cell>
        </div>
      </m-panel>

      <m-title type="5">Form 表单组件</m-title>
      <m-panel>
        <div>
          <m-cell link="/inputs" arrow>Input 输入框</m-cell>
          <m-cell link="/radios" arrow>Radio 单选框</m-cell>
          <m-cell link="/checkboxes" arrow>Checkbox 复选框</m-cell>
          <m-cell link="/selects" arrow>Select 选择框</m-cell>
          <m-cell link="/switchs" arrow>Switch 转换开关</m-cell>
          <m-cell link="/counters" arrow>Counter 计数器</m-cell>
          <m-cell link="/form" arrow>Form 表单</m-cell>
        </div>
      </m-panel>

      <m-title type="5">Other 其他组件</m-title>
      <m-panel>
        <div>
          <m-cell link="/calendars" arrow>Calendar 日历</m-cell>
          <m-cell link="/searchs" arrow>Search 搜索框</m-cell>
        </div>
      </m-panel>
    </div>
  </div>
</template>

<script>
import Content from '../doc/Home'

export default {
  name: 'exp-home',
  components: { DocContent: Content }
}
</script>

<style lang="scss" scoped>
@import '@/common/css/global.scss';
</style>
