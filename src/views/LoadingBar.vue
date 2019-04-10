<template>
  <div>
    <m-tl type="1">LoadingBar</m-tl>
    <m-panel>
      <div slot="head">默认加载进度条</div>
      <m-box>
        <m-button @click="showLoadingBar1">显示loadingbar</m-button>
      </m-box>
    </m-panel>
  </div>
</template>

<script>
export default {
  methods: {
    showLoadingBar1 () {
      if (!this.$loadingbar.isLoading()) {
        this.$loadingbar.start()
        setTimeout(() => {
          this.$loadingbar.finish()
        }, 1000)
      }
    }
  }
}
</script>

