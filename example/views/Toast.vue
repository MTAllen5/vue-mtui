<template>
  <div>
    <m-title type="1">Toast</m-title>
    <m-panel>
      <div slot="head">默认提示</div>
      <m-box>
        <m-button type="primary" @click="showToast1">显示toast</m-button>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">其他位置提示</div>
      <m-box>
        <m-button type="minor" @click="showToast2">显示toast</m-button>
        <m-button type="minor" plain @click="showToast3">显示toast</m-button>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">自定义显示时间</div>
      <m-box>
        <m-button type="primary" plain @click="showToast4">显示toast</m-button>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">带图标提示</div>
      <m-box>
        <m-button @click="showToast5">显示toast</m-button>
      </m-box>
    </m-panel>
  </div>
</template>

<script>
export default {
  methods: {
    showToast1 () {
      this.$toast('我是提示')
    },
    showToast2 () {
      this.$toast.top('我是提示')
    },
    showToast3 () {
      this.$toast.center('我是提示我是提示我是提示')
    },
    showToast4 () {
      this.$toast({
        message: '我是提示',
        timeout: 3000,
        type: 'bottom'
      })
    },
    showToast5 () {
      this.$toast.center({
        icon: 'android-done',
        message: '提交成功',
        timeout: 2000
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .mtui-btn:not(:last-child) {
  margin-bottom: 16px;
}
</style>
