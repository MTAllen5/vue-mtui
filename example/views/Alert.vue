<template>
  <div>
    <m-title type="1">Alert</m-title>
    <m-panel>
      <div slot="head">默认弹窗</div>
      <m-box>
        <m-button type="primary" @onClick="showAlert1">显示alert</m-button>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">可文本配置弹窗</div>
      <m-box>
        <m-button type="default" @onClick="showAlert2">显示alert</m-button>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">绑定确定处理函数</div>
      <m-box>
        <m-button type="minor" plain @onClick="showAlert3">显示alert</m-button>
      </m-box>
    </m-panel>
  </div>
</template>

<script>
export default {
  methods: {
    showAlert1 () {
      this.$alert('这是一条提示消息')
    },
    showAlert2 () {
      this.$alert({
        title: '这是提示标题',
        message: '这是提示内容',
        confirmTxt: '这是自定义确定按钮'
      })
    },
    showAlert3 () {
      this.$alert({
        title: '这是提示标题',
        message: '这是提示内容',
        confirmTxt: '这是自定义确定按钮',
        onConfirm () {
          this.$toast('点了确定')
        }
      })
    }
  }
}
</script>
