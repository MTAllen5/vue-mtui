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
      <div slot="head">自定义图标提示</div>
      <m-box>
        <m-button @click="showToast5">显示toast</m-button>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">常用图标提示</div>
      <m-box>
        <m-button @click="showToast6" type="primary" inline style="margin-right: 10px;">成功</m-button>
        <m-button @click="showToast7" inline style="margin-right: 10px;">警告</m-button>
        <m-button @click="showToast8" type="minor" inline>错误</m-button>
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
    },
    showToast6 () {
      this.$toast.success('保存成功')
    },
    showToast7 () {
      this.$toast.warning('保存失败')
    },
    showToast8 () {
      this.$toast.error('系统异常')
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .mtui-btn:not(:last-child) {
  margin-bottom: 16px;
}
</style>
