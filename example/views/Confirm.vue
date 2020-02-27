<template>
  <div class="api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
      <m-title type="1">Confirm</m-title>

      <m-panel title="默认弹窗">
        <m-box>
          <m-button @click="showConfirm1">显示confirm</m-button>
        </m-box>
      </m-panel>

      <m-panel title="可文本配置弹窗">
        <m-box>
          <m-button @click="showConfirm2">显示confirm</m-button>
        </m-box>
      </m-panel>

      <m-panel title="绑定取消、确定处理函数">
        <m-box>
          <m-button @click="showConfirm3">显示confirm</m-button>
        </m-box>
      </m-panel>
    </div>
  </div>
</template>

<script>
import Content from '../doc/Confirm'

export default {
  name: 'exp-confirm',
  components: { DocContent: Content },
  data () {
    return {
      bbb: '1234'
    }
  },
  methods: {
    showConfirm1 () {
      this.$confirm('这是一条提示消息')
    },

    showConfirm2 () {
      this.$confirm({
        title: '这是提示标题',
        message: '这是提示内容',
        confirmTxt: '好了啦',
        cancelTxt: '不要啦'
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
