<template>
  <div>
    <m-title type="1">Search</m-title>

    <m-panel>
      <div slot="head">默认</div>
      <m-search v-model="keyword" clearable @on-search="onSearch" placeholder="请输入姓名"></m-search>
    </m-panel>
  </div>
</template>

<script>
export default {
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
