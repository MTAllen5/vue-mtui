<template>
  <div>
    <m-title type="1">Searchbar</m-title>

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
  mounted () {
    // setTimeout(() => {
    //   this.selected = ['2019-07-18', '2019-07-20']
    //   this.range = ['2019-07-19', '2019-07-24']
    //   this.events = [
    //     { date: '2019-07-09', event: {} },
    //     { date: '2019-07-19', event: {} }
    //   ]
    // }, 2000)
  },
  methods: {
    onSearch (kwd) {
      console.log(kwd)
    }
  }
}
</script>
