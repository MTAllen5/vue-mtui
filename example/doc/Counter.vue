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
            <td>计数值</td>
            <td>Number | String</td>
            <td>0</td>
          </tr>
          <tr>
            <td>type</td>
            <td>计数器类型，可选值：['span', 'input']</td>
            <td>String</td>
            <td>'span'</td>
          </tr>
          <tr>
            <td>min</td>
            <td>计数器最小值</td>
            <td>Number</td>
            <td>0</td>
          </tr>
          <tr>
            <td>max</td>
            <td>计数器最大值</td>
            <td>Number</td>
            <td>9</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>small</td>
            <td>是否小尺寸</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>按钮主题，可选值：['primary', 'minor', 'warn', 'danger']</td>
            <td>String</td>
            <td>'primary'</td>
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
            <td>value: Number</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
