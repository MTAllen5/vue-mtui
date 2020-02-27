<template>
  <div class="api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
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
  </div>
</template>

<script>
import Content from '../doc/Loading'

export default {
  name: 'exp-loading',
  components: { DocContent: Content },
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
