<template>
  <div class="api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
      <m-title type="1">Dialog</m-title>

      <m-panel title="默认弹窗">
        <m-box>
          <m-button @click="showDialog1">显示dialog</m-button>
        </m-box>
      </m-panel>

      <m-panel title="带标题弹窗">
        <m-box>
          <m-button @click="showDialog2">显示dialog</m-button>
        </m-box>
      </m-panel>

      <m-panel title="自定义底部内容">
        <m-box>
          <m-button @click="showDialog3">显示dialog</m-button>
        </m-box>
      </m-panel>

      <m-dialog v-model="dialogShow1" closeable>
        这是一个默认弹窗这是一个默认弹窗这是一个默认弹窗这是一个默认弹窗这是一个默认弹窗
      </m-dialog>

      <m-dialog v-model="dialogShow2" title="这是标题" ref="dialog2">
        <div>这是绑定关闭事件的</div>
        <m-button slot="foot" type="primary" text @click="$refs.dialog2.close()">关闭</m-button>
      </m-dialog>

      <m-dialog v-model="dialogShow3" title="这是标题" title-align="left" icon="android-bulb" ref="dialog3">
        <div>这是显示关闭按钮的</div>
        <m-button-group type="right" slot="foot">
          <m-button inline size="small" @click="$refs.dialog3.close()">关闭</m-button>
          <m-button inline size="small" type="primary" @click="$refs.dialog3.close()">确定</m-button>
        </m-button-group>
      </m-dialog>
    </div>
  </div>
</template>

<script>
import Content from '../doc/Dialog'

export default {
  name: 'exp-dialog',
  components: { DocContent: Content },
  data () {
    return {
      dialogShow1: false,
      dialogShow2: false,
      dialogShow3: false
    }
  },
  methods: {
    showDialog1 () {
      this.dialogShow1 = true
    },
    showDialog2 () {
      this.dialogShow2 = true
    },
    showDialog3 () {
      this.dialogShow3 = true
    }
  }
}
</script>
