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
            <td>v-model</td>
            <td>输入值</td>
            <td>String | Number | Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>label</td>
            <td>显示文本</td>
            <td>String | Number | Boolean</td>
            <td>-</td>
          </tr>
          <tr>
            <td>type</td>
            <td>按钮类型，可选值：['default', 'button']</td>
            <td>String</td>
            <td>'default'</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>按钮主题，可选值：['primary', 'minor', 'warn', 'danger']</td>
            <td>String</td>
            <td>primary</td>
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
            <td>change</td>
            <td>改变值时触发</td>
            <td>value: String</td>
          </tr>
        </tbody>
      </table>

      <br>

      <m-title type="3">Slots</m-title>
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
            <td>默认插槽（textarea无效）</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
