<template>
  <div class="api-content">
    <div class="api-code">
      <m-title type="1">API</m-title>

      <m-title type="3">Form Props</m-title>
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
            <td>action</td>
            <td>属性action</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>autocomplate</td>
            <td>自动完成， 可选值：['on', 'off']</td>
            <td>String</td>
            <td>'on'</td>
          </tr>
          <tr>
            <td>enctype</td>
            <td>表单的编码方式</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>method</td>
            <td>表单的提交方式</td>
            <td>String</td>
            <td>get</td>
          </tr>
          <tr>
            <td>name</td>
            <td>name属性</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>novalidate</td>
            <td>原生属性，是否验证表单</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>target</td>
            <td>目标打开方式</td>
            <td>String</td>
            <td>'_self'</td>
          </tr>
          <tr>
            <td>labelWidth</td>
            <td>标签的宽度</td>
            <td>Number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>labelAlign</td>
            <td>标签的对齐方式</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>align</td>
            <td>表单的对齐方式</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>block</td>
            <td>是否块级显示</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>

      <br>

      <m-title type="3">FormItem Props</m-title>
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
            <td>label</td>
            <td>标签文本</td>
            <td>String</td>
            <td>''</td>
          </tr>
          <tr>
            <td>labelWidth</td>
            <td>标签宽度</td>
            <td>Number</td>
            <td>80</td>
          </tr>
          <tr>
            <td>labelAlign</td>
            <td>标签对齐方式，可选值：['left', 'center', 'right']</td>
            <td>String</td>
            <td>'left'</td>
          </tr>
          <tr>
            <td>align</td>
            <td>表单项对齐方式，可选值：['left', 'center', 'right']</td>
            <td>String</td>
            <td>'left'</td>
          </tr>
          <tr>
            <td>block</td>
            <td>是否块级显示</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>required</td>
            <td>是否必填项</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>

      <br>

      <m-title type="3">Grid Slots</m-title>
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

      <br>

      <m-title type="3">Form Slots</m-title>
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

      <br>

      <m-title type="3">FormItem Slots</m-title>
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
          <tr>
            <td>foot</td>
            <td>自定义尾部</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
