<template>
  <div>
    <m-title type="1">Dialog</m-title>
    <m-panel>
      <div slot="head">默认弹窗</div>
      <m-box>
        <m-button type="primary" @onClick="showDialog1">显示dialog</m-button>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">遮罩不可关闭</div>
      <m-box>
        <m-button type="default" @onClick="showDialog2">显示dialog</m-button>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">显示关闭按钮</div>
      <m-box>
        <m-button type="minor" @onClick="showDialog3">显示dialog</m-button>
      </m-box>
    </m-panel>

    <m-dialog v-model="dialogShow1">
      这是一个默认弹窗
    </m-dialog>
    <m-dialog v-model="dialogShow2" :closeOnClickMask="false">
      <div slot="title">这是标题</div>
      <p>这是绑定关闭事件的</p>
      <m-button type="minor" text @onClick="close2" slot="foot">关闭</m-button>
    </m-dialog>
    <m-dialog v-model="dialogShow3" showCloseButton>
      <div slot="title">这是标题</div>
      <p>这是显示关闭按钮的</p>
    </m-dialog>
  </div>
</template>

<script>
export default {
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
    },
    close2 () {
      this.dialogShow2 = false
    }
  }
}
</script>
