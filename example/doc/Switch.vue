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
            <td>当前值</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>type</td>
            <td>颜色类型，可选['primary', 'minor', 'wanr'， 'danger']</td>
            <td>String</td>
            <td>'primary'</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>small</td>
            <td>是否小按钮</td>
            <td>Boolean</td>
            <td>false</td>
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
            <td>value: Boolean</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
