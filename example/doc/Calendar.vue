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
            <td>日期选择器类型: 单选: 'single'; 多选：'multi'; 起止：'fromto'</td>
            <td>String</td>
            <td>'single'</td>
          </tr>
          <tr>
            <td>events</td>
            <td>事件</td>
            <td>Array: EvtOptions</td>
            <td>[]</td>
          </tr>
          <tr>
            <td>v-model</td>
            <td>选中的日期</td>
            <td>String | Array</td>
            <td>'YYYY/MM/DD'(当天)</td>
          </tr>
          <tr>
            <td>range</td>
            <td>可选择范围: [start, end]</td>
            <td>Array</td>
            <td>[]</td>
          </tr>
          <tr>
            <td>showBack</td>
            <td>是否显示返回今天按钮</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>showHead</td>
            <td>是否显示头部</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁止选择日期</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>startAt</td>
            <td>startAt &lt; 0表示上月几号，start &gt; 0表示本月几号</td>
            <td>Number</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>

      <br>

      <m-title type="3">EvtOptions</m-title>
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
            <td>date</td>
            <td>事件日期</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>status</td>
            <td>事件状态标记，可选值：[1, 2]</td>
            <td>Number</td>
            <td>1</td>
          </tr>
          <tr>
            <td>event</td>
            <td>事件内容</td>
            <td>Object</td>
            <td>{}</td>
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
            <td>on-change</td>
            <td>改变选中日期时触发</td>
            <td>value: Array</td>
          </tr>
          <tr>
            <td>on-change-month</td>
            <td>改变月份时触发</td>
            <td>value: String</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
