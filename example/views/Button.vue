<template>
  <div>
    <m-title type="1">Button</m-title>

    <m-panel title="普通按钮">
      <m-button-group type="column">
        <m-button>默认按钮</m-button>
        <m-button type="primary">主色按钮</m-button>
        <m-button type="minor">副色按钮</m-button>
        <m-button type="warn">警告按钮</m-button>
        <m-button type="danger">危险按钮</m-button>
      </m-button-group>
    </m-panel>

    <m-panel title="行内按钮">
      <m-button-group>
        <m-button inline type="primary">主色按钮</m-button>
        <m-button inline type="minor">副色按钮</m-button>
      </m-button-group>
    </m-panel>

    <m-panel title="平面按钮">
      <m-button-group>
        <m-button inline plain type="primary">主色按钮</m-button>
        <m-button inline plain type="minor">副色按钮</m-button>
      </m-button-group>
    </m-panel>

    <m-panel title="圆角按钮">
      <m-button-group>
        <m-button inline round type="primary">主色按钮</m-button>
        <m-button inline round type="minor">副色按钮</m-button>
      </m-button-group>
    </m-panel>

    <m-panel title="禁用按钮">
      <m-button-group>
        <m-button inline disabled type="primary">主色按钮</m-button>
        <m-button inline disabled type="minor">副色按钮</m-button>
      </m-button-group>
    </m-panel>

    <m-panel title="按钮尺寸">
      <m-button-group>
        <m-button inline size="large" type="primary">主色按钮</m-button>
        <m-button inline size="normal" type="minor">副色按钮</m-button>
        <m-button inline size="small" type="warn">警告按钮</m-button>
        <m-button inline size="mini" type="danger">危险按钮</m-button>
      </m-button-group>
    </m-panel>

    <m-panel title="文本按钮">
      <m-button-group>
        <m-button inline text type="primary">主色按钮</m-button>
        <m-button inline text type="minor">副色按钮</m-button>
      </m-button-group>
    </m-panel>

    <m-panel title="加载状态按钮">
      <m-button-group>
        <m-button inline loading type="primary">主色按钮</m-button>
        <m-button inline loading plain type="minor">副色按钮</m-button>
      </m-button-group>
    </m-panel>

    <m-panel title="图标按钮">
      <m-button-group>
        <m-button inline round icon="android-done" type="primary"></m-button>
        <m-button inline round icon="android-search"></m-button>
        <m-button inline plain round icon="android-delete" type="minor"></m-button>
        <m-button inline plain round icon="android-star" type="warn">收藏</m-button>
      </m-button-group>
    </m-panel>

    <m-panel title="块级按钮">
      <div>
        <m-button block size="large" type="primary" style="margin-bottom: 10px;">提交</m-button>
        <m-button block size="large" loading type="danger">保存</m-button>
      </div>
    </m-panel>

    <m-panel title="自定义按钮颜色">
      <m-button-group>
        <m-button inline color="#8b21ff">按钮</m-button>
        <m-button inline color="#ffdc33">按钮</m-button>
        <m-button inline plain color="#a16711">按钮</m-button>
      </m-button-group>
    </m-panel>

    <m-panel title="页面跳转">
      <m-button-group>
        <m-button type="minor" inline link="/">返回首页</m-button>
      </m-button-group>
    </m-panel>

    <m-panel title="按钮组（水平排列）">
      <m-button-group type="row">
        <m-button type="primary">主色按钮</m-button>
        <m-button type="danger" plain>危险按钮</m-button>
      </m-button-group>
    </m-panel>

    <m-panel title="按钮组（垂直排列）">
      <m-button-group type="column">
        <m-button type="primary">主色按钮</m-button>
        <m-button type="danger" plain>危险按钮</m-button>
      </m-button-group>
    </m-panel>
  </div>
</template>
