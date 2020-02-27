<template>
  <div class="api-content">
    <div class="api-code">
      <m-title type="1">API</m-title>

      <m-title type="3">Grid Props</m-title>
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
            <td>col</td>
            <td>列数</td>
            <td>Number</td>
            <td>3</td>
          </tr>
          <tr>
            <td>gap</td>
            <td>间隙</td>
            <td>Number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>border</td>
            <td>是否显示边框</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>

      <br>

      <m-title type="3">GridItem Props</m-title>
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
            <td>icon</td>
            <td>图标</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>text</td>
            <td>文本</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>link</td>
            <td>页面导航</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>color</td>
            <td>自定义文本和图标的颜色（用于选中状态）</td>
            <td>String</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <br>

      <m-title type="3">GridItem Events</m-title>
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
            <td>点击按钮，没有设置属性link时触发</td>
            <td>event: Event</td>
          </tr>
        </tbody>
      </table>

      <br>

      <m-title type="3">Grid Slots</m-title>
      <table class="api-table">
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>默认插槽</td>
          </tr>
        </tbody>
      </table>

      <br>

      <m-title type="3">GridItem Slots</m-title>
      <table class="api-table">
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>默认插槽</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
