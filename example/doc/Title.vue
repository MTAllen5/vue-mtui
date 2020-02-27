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
            <td>type</td>
            <td>标题类型，可选值为：['1', '2', '3', '4', '5', '6']</td>
            <td>String</td>
            <td>‘1’</td>
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
            <td>自定义标题内容</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
