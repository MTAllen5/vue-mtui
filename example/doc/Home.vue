<template>
  <div class="api-content">
    <div class="logo">MTUI</div>
    <div class="logo-sub">（一个假想的LOGO）</div>
    <div class="api-code" style="margin: 40px auto;">
      <m-title type="1">Installation 如何安装</m-title>
      <pre>npm i vue-mtui -S</pre>
      <m-title type="1">Usage 使用方法</m-title>
      <p>在项目入口文件加入</p>
      <pre>
// main.js
import Vue from 'vue'
import MTui from 'vue-mtui'
import 'vue-mtui/lib/vue-mtui.css'

Vue.use(MTui)
      </pre>
      <p>或导入指定的组件。</p>
      <pre>
// main.js
import { Button, Cell } from 'vue-mtui'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
      </pre>
    </div>
  </div>
</template>
