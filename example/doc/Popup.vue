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
            <td>是否显示弹窗</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>showMask</td>
            <td>是否显示遮罩层</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>maskCloseable</td>
            <td>是否允许点击遮罩关闭弹出层</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>position</td>
            <td>内容位置 可选值 ['center', 'top', 'right', 'left', 'bottom']</td>
            <td>String</td>
            <td>'center'</td>
          </tr>
          <tr>
            <td>round</td>
            <td>是否显示圆角</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>closeable</td>
            <td>是否显示关闭按钮</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>transition</td>
            <td>动画name属性</td>
            <td>String</td>
            <td>-</td>
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
            <td>默认插槽</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
