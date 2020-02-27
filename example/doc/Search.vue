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
            <td>String</td>
            <td>''</td>
          </tr>
          <tr>
            <td>maxlength</td>
            <td>最大字符长度</td>
            <td>String | Number</td>
            <td>- / 200</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>输入框提示</td>
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
            <td>clearable</td>
            <td>是否显示清空输入按钮</td>
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
            <td>on-search</td>
            <td>搜索时触发</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
