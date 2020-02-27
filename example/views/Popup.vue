<template>
  <div class="api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
      <m-title type="1">Popup</m-title>

      <m-panel title="默认弹出层">
        <m-box>
          <m-button @click="show1 = true">展示默认弹出层</m-button>
        </m-box>
      </m-panel>

      <m-panel title="内容位置">
        <m-button-group>
          <m-button type="primary" @click="show2 = true">顶部弹出</m-button>
          <m-button type="minor" @click="show3 = true">底部弹出</m-button>
          <m-button type="warn" @click="show4 = true">左边弹出</m-button>
          <m-button type="danger" @click="show5 = true">右边弹出</m-button>
        </m-button-group>
      </m-panel>

      <m-panel title="圆角弹窗">
        <m-button-group>
          <m-button @click="show6 = true">圆角弹窗</m-button>
        </m-button-group>
      </m-panel>

      <m-panel title="显示关闭按钮">
        <m-button-group>
          <m-button @click="show7 = true">默认关闭按钮</m-button>
        </m-button-group>
      </m-panel>

      <m-popup v-model="show1"></m-popup>
      <m-popup v-model="show2" position="top"></m-popup>
      <m-popup v-model="show3" position="bottom"></m-popup>
      <m-popup v-model="show4" position="left"></m-popup>
      <m-popup v-model="show5" position="right"></m-popup>
      <m-popup v-model="show6" position="bottom" round></m-popup>
      <m-popup v-model="show7" round :maskCloseable="false" closeable position="right"></m-popup>
    </div>
  </div>
</template>

<script>
import Content from '../doc/Popup'

export default {
  name: 'exp-popup',
  components: { DocContent: Content },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false
    }
  }
}
</script>
