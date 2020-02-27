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
            <td>$toast</td>
            <td>显示弹窗</td>
            <td>String | Options</td>
            <td>-</td>
          </tr>
          <tr>
            <td>$toast.top</td>
            <td>在顶部位置显示弹窗</td>
            <td>String | Options</td>
            <td>-</td>
          </tr>
          <tr>
            <td>$toast.center</td>
            <td>在中部位置显示弹窗</td>
            <td>String | Options</td>
            <td>-</td>
          </tr>
          <tr>
            <td>$toast.bottom</td>
            <td>在底部位置显示弹窗</td>
            <td>String | Options</td>
            <td>-</td>
          </tr>
          <tr>
            <td>$toast.success</td>
            <td>显示成功弹窗</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>$toast.warning</td>
            <td>显示警告弹窗</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>$toast.error</td>
            <td>显示错误弹窗</td>
            <td>String</td>
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
            <td>icon</td>
            <td>提示图标</td>
            <td>String</td>
            <td>''</td>
          </tr>
          <tr>
            <td>message</td>
            <td>提示内容</td>
            <td>String</td>
            <td>''</td>
          </tr>
          <tr>
            <td>timeout</td>
            <td>显示时间</td>
            <td>Number</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>type</td>
            <td>显示位置</td>
            <td>String</td>
            <td>'bottom'</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
