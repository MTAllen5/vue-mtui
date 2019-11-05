<template>
  <div>
    <m-tl type="1">Loading</m-tl>
    <m-panel>
      <div slot="head">默认加载</div>
      <m-box>
        <m-button @click="showLoading1">显示loading</m-button>
      </m-box>
    </m-panel>
  </div>
</template>

<script>
export default {
  methods: {
    showLoading1 () {
      this.$loading.show()
      setTimeout(() => {
        this.$loading.hide()
      }, 2000)
    }
  }
}
</script>
