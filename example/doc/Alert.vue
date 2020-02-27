<template>
  <div class="api-content">
    <div class="api-code">
      <m-title type="1">API</m-title>

      <m-title type="3">方法</m-title>
      <table class="api-table">
        <thead>
          <tr>
            <th>方法名</th>
            <th>说明</th>
            <th>参数</th>
            <th>返回值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$alert</td>
            <td>显示弹窗</td>
            <td>String | Options</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <br>

      <m-title type="3">Options</m-title>
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
            <td>title</td>
            <td>弹窗标题</td>
            <td>String</td>
            <td>'提示'</td>
          </tr>
          <tr>
            <td>message</td>
            <td>弹窗内容</td>
            <td>String</td>
            <td>''</td>
          </tr>
          <tr>
            <td>confirmTxt</td>
            <td>确认按钮文案</td>
            <td>String</td>
            <td>'确定'</td>
          </tr>
          <tr>
            <td>onConfirm</td>
            <td>确认的回调函数</td>
            <td>Function</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
