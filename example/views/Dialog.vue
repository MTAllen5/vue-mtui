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
        <m-button type="primary" @onClick="showDialog2">显示dialog</m-button>
      </m-box>
    </m-panel>
  </div>
</template>

<script>
export default {
  methods: {
    showDialog1 () {
      this.$dialog()
    },
    showDialog2 () {
      this.$dialog({
        closeOnClickMask: false
      })
    }
  }
}
</script>
