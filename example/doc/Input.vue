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
            <td>String | Number</td>
            <td>''</td>
          </tr>
          <tr>
            <td>type</td>
            <td>输入框类型，可选项同原生input，['text', 'textarea', 'password', 'search', 'number']</td>
            <td>String</td>
            <td>'text'</td>
          </tr>
          <tr>
            <td>name</td>
            <td>name属性</td>
            <td>String</td>
            <td>-</td>
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
            <td>readonly</td>
            <td>是否只读</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>maxlength</td>
            <td>最大字符长度</td>
            <td>String | Number</td>
            <td>- / 200</td>
          </tr>
          <tr>
            <td>error</td>
            <td>是否错误高亮</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>clearable</td>
            <td>是否显示清空输入按钮</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>row</td>
            <td>textarea的默认行数</td>
            <td>Number</td>
            <td>3</td>
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
            <td>clear</td>
            <td>点击清空输入按钮触发</td>
            <td>-</td>
          </tr>
          <tr>
            <td>change</td>
            <td>更改输入值触发</td>
            <td>value: String</td>
          </tr>
          <tr>
            <td>focus</td>
            <td>输入框获得焦点触发</td>
            <td>event: Event</td>
          </tr>
          <tr>
            <td>blur</td>
            <td>输入框失去焦点触发</td>
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
            <td>默认插槽（textarea无效）</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
