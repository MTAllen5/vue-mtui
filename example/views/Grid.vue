<template>
  <div>
    <m-title type="1">Grid</m-title>
    <m-panel>
      <div slot="head">默认Grid</div>
      <m-box>
        <m-grid>
          <m-grid-item>Grid</m-grid-item>
          <m-grid-item>Grid</m-grid-item>
          <m-grid-item>Grid</m-grid-item>
          <m-grid-item>Grid</m-grid-item>
          <m-grid-item>Grid</m-grid-item>
          <m-grid-item>Grid</m-grid-item>
        </m-grid>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">带icon的Grid</div>
      <m-box>
        <m-grid>
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
        </m-grid>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">自定义列数Grid</div>
      <m-box>
        <m-grid :col="4">
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
        </m-grid>
      </m-box>
      <m-box>
        <m-grid :col="2">
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
          <m-grid-item icon="image">Grid</m-grid-item>
        </m-grid>
      </m-box>
    </m-panel>
  </div>
</template>
