<template>
  <div>
    <m-title type="1">Button</m-title>

    <m-panel>
      <div slot="head">普通按钮</div>
      <m-box>
        <m-button type="primary">主操作按钮</m-button>
        <m-button>辅助按钮</m-button>
        <m-button type="minor">警告按钮</m-button>
      </m-box>
    </m-panel>

    <m-panel>
      <div slot="head">禁用按钮</div>
      <m-box>
        <m-button disabled type="primary">primary</m-button>
        <m-button disabled>default</m-button>
        <m-button disabled type="minor">minor</m-button>
      </m-box>
    </m-panel>

    <m-panel>
      <div slot="head">平面按钮</div>
      <m-box>
        <m-button plain type="primary">primary</m-button>
        <m-button plain>default</m-button>
        <m-button plain type="minor">minor</m-button>
      </m-box>
    </m-panel>

    <m-panel>
      <div slot="head">行内按钮</div>
      <m-box>
        <m-button inline type="primary">primary</m-button>
        <m-button inline>default</m-button>
        <m-button inline type="minor">minor</m-button>
      </m-box>
    </m-panel>

    <m-panel>
      <div slot="head">小按钮</div>
      <m-box>
        <m-button inline small type="primary">primary</m-button>
        <m-button inline small>default</m-button>
        <m-button inline small type="minor">minor</m-button>
      </m-box>
    </m-panel>

    <m-panel>
      <div slot="head">圆角按钮</div>
      <m-box>
        <m-button inline small round type="primary">primary</m-button>
        <m-button inline small round>default</m-button>
        <m-button inline small round type="minor">minor</m-button>
      </m-box>
    </m-panel>

    <m-panel>
      <div slot="head">文本按钮</div>
      <m-box>
        <m-button inline text type="primary">primary</m-button>
        <m-button inline text>default</m-button>
        <m-button inline text type="minor">minor</m-button>
      </m-box>
    </m-panel>

    <m-panel>
      <div slot="head">加载状态按钮</div>
      <m-box>
        <m-button inline loading type="primary">primary</m-button>
        <m-button inline loading>default</m-button>
        <m-button inline loading plain type="minor">minor</m-button>
      </m-box>
    </m-panel>

    <m-panel>
      <div slot="head">纯图标按钮</div>
      <m-box>
        <m-button inline small round type="primary"><m-icon type="android-done"></m-icon></m-button>
        <m-button inline small round><m-icon type="android-search"></m-icon></m-button>
        <m-button inline small round type="minor"><m-icon type="android-delete"></m-icon></m-button>
      </m-box>
    </m-panel>

    <m-panel>
      <div slot="head">无圆角按钮（适合100%宽按钮）</div>
      <div style="padding: 20px 0;">
        <m-button no-radius type="primary">primary</m-button>
        <m-button no-radius>default</m-button>
        <m-button no-radius type="minor">minor</m-button>
      </div>
    </m-panel>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.mtui-btn {
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &.is-inline {
    margin-right: 10px;
    margin-bottom: 0;
  }
}
</style>
