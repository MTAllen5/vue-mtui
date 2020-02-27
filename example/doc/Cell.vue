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
            <td>icon</td>
            <td>图标，参考Icon</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>标签</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>arrow</td>
            <td>是否显示箭头</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>desc</td>
            <td>描述信息</td>
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
            <td>点击按钮，没有设置属性link时触发</td>
            <td>event: Event</td>
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
            <td>自定义内容</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
