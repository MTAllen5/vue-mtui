<template>
  <div>
    <m-title type="1">Loading</m-title>

    <m-panel title="默认加载">
      <m-box>
        <m-button @click="showLoading1">显示loading</m-button>
      </m-box>
    </m-panel>

    <m-panel title="加载文字">
      <m-box>
        <m-button @click="showLoading2">显示loading</m-button>
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
    },

    showLoading2 () {
      this.$loading.show('加载中加载中加载中加载中加载中加载中')
      setTimeout(() => {
        this.$loading.hide()
      }, 2000)
    }
  }
}
</script>
