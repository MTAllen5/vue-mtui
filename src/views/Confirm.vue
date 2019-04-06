<template>
  <div>
    <m-tl type="1">Confirm</m-tl>
    <m-panel>
      <div slot="head">默认弹窗</div>
      <m-box>
        <m-button type="primary" @click="showConfirm1">显示confirm</m-button>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">可文本配置弹窗</div>
      <m-box>
        <m-button type="minor" @click="showConfirm2">显示confirm</m-button>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">绑定取消、确定处理函数</div>
      <m-box>
        <m-button type="primary" plain @click="showConfirm3">显示confirm</m-button>
      </m-box>
    </m-panel>
  </div>
</template>

<script>
export default {
  methods: {
    showConfirm1 () {
      this.$confirm('这是一条提示消息')
    },
    showConfirm2 () {
      this.$confirm({
        title: '这是提示标题',
        message: '这是提示内容',
        confirmTxt: '好了啦',
        cancelTxt: '不要啦',
      })
    },
    showConfirm3 () {
      this.$confirm({
        title: '这是提示标题',
        message: '这是提示内容',
        confirmTxt: '好了啦',
        cancelTxt: '不要啦',
        onConfirm () {
          this.$toast('点了确定')
        },
        onCancel () {
          this.$toast('点了取消')
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
