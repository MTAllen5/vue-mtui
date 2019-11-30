# vue-mtui

一套基于vue2.0的ui组件库。

[查看Demo](https://mtallen5.github.io/vue-mtui/example/)

## Installation 如何安装
```
npm i vue-mtui -S
```

## Usage 使用方法
在项目入口文件加入
```javascript
// main.js
import Vue from 'vue'
import MTui from 'vue-mtui'
import 'vue-mtui/lib/vue-mtui.css'
 
Vue.use(MTui)
```

或导入指定的组件。

```javascript
// main.js
import { Button, Cell } from 'vue-mtui'
 
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
```
