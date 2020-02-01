<template>
  <div>
    <m-title type="1">Toast</m-title>

    <m-panel title="默认提示">
      <m-box>
        <m-button @click="showToast1">显示toast</m-button>
      </m-box>
    </m-panel>

    <m-panel title="不同位置提示">
      <m-button-group>
        <m-button inline type="primary" @click="showToast2">顶部提示</m-button>
        <m-button inline type="warn" @click="showToast3">中间提示</m-button>
        <m-button inline type="danger" @click="showToast1">底部提示</m-button>
      </m-button-group>
    </m-panel>

    <m-panel title="自定义显示时间">
      <m-box>
        <m-button @click="showToast4">显示toast</m-button>
      </m-box>
    </m-panel>

    <m-panel title="自定义图标提示">
      <div slot="head"></div>
      <m-box>
        <m-button @click="showToast5">显示toast</m-button>
      </m-box>
    </m-panel>

    <m-panel title="常用图标提示">
      <m-button-group>
        <m-button type="minor" inline  @click="showToast6">成功</m-button>
        <m-button type="warn" inline  @click="showToast7">警告</m-button>
        <m-button type="danger" inline  @click="showToast8">错误</m-button>
      </m-button-group>
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
        message: '我3秒后会消失',
        timeout: 3000,
        type: 'bottom'
      })
    },
    showToast5 () {
      this.$toast.center({
        icon: 'android-alarm-clock',
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
