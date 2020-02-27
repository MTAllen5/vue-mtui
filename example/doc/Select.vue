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
            <td>选中值</td>
            <td>String | Number</td>
            <td>''</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>选择提示语</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>options</td>
            <td>选项列表</td>
            <td>Array: Option</td>
            <td>[]</td>
          </tr>
        </tbody>
      </table>

      <br>

      <m-title type="3">Option</m-title>
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
            <td>value</td>
            <td>选项值</td>
            <td>String | Number</td>
            <td>''</td>
          </tr>
          <tr>
            <td>label</td>
            <td>选项值文案</td>
            <td>String | Number</td>
            <td>value</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用选项</td>
            <td>Boolean</td>
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
            <td>change</td>
            <td>改变选项值时触发</td>
            <td>value: String</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
