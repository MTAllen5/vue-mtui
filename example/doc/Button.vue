<template>
  <div class="api-content">
    <div class="api-code">
      <m-title type="1">API</m-title>

      <m-title type="3">Props</m-title>
      <table class="api-table">
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>类型，可选值为：['default', 'primary', 'minor', 'warn', 'danger']</td>
            <td>String</td>
            <td>default</td>
          </tr>
          <tr>
            <td>size</td>
            <td>尺寸，可选值：['normal', 'mini', 'small', 'large']</td>
            <td>String</td>
            <td>normal</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>图标，参考Icon</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>inline</td>
            <td>是否行内按钮</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>plain</td>
            <td>是否简单按钮</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>round</td>
            <td>是否圆形按钮</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>block</td>
            <td>是否块级按钮</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>text</td>
            <td>是否文本按钮</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>是否加载状态</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>color</td>
            <td>自定义按钮颜色</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>link</td>
            <td>页面导航</td>
            <td>String</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <br>

      <m-title type="3">Events</m-title>
      <table class="api-table">
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>click</td>
            <td>点击按钮，且按钮状态不为加载或禁用时触发</td>
            <td>event: Event</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
