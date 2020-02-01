<template>
  <div>
    <m-title type="1">LoadingBar</m-title>

    <m-panel title="默认加载进度条">
      <m-box>
        <m-button @click="showLoadingBar1">显示loadingbar</m-button>
      </m-box>
    </m-panel>

    <!-- <m-panel title="指定位置">
      <m-box>
        <m-button @click="showLoadingBar2">显示loadingbar</m-button>
      </m-box>
    </m-panel> -->
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
        }, 5000)
      }
    },

    showLoadingBar2 () {
      if (!this.$loadingbar.isLoading()) {
        this.$loadingbar.start()
        setTimeout(() => {
          this.$loadingbar.set(50)
        }, 1000)
      }
    }
  }
}
</script>
