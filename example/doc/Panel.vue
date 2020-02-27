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
            <td>title</td>
            <td>标题</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>titleIcon</td>
            <td>标题图标</td>
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
            <td>自定义按钮文本</td>
          </tr>
          <tr>
            <td>headDesc</td>
            <td>自定义标题描述文本</td>
          </tr>
          <tr>
            <td>foot</td>
            <td>自定义脚步内容</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
