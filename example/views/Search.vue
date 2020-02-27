<template>
  <div class="api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
      <m-title type="1">Search</m-title>

      <m-panel>
        <div slot="head">默认</div>
        <m-search v-model="keyword" clearable @on-search="onSearch" placeholder="请输入姓名"></m-search>
      </m-panel>
    </div>
  </div>
</template>

<script>
import Content from '../doc/Search'

export default {
  name: 'exp-search',
  components: { DocContent: Content },
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    onSearch (kwd) {
      console.log(kwd)
    }
  }
}
</script>
