<template>
  <div>
    <m-title type="1">Textarea</m-title>
    <m-panel>
      <div slot="head">文本域</div>
      <m-box>
        <m-input v-model="text1" rows="5" type="textarea" placeholder="请输入内容" @change="handlerChange"></m-input>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">禁用的</div>
      <m-box>
        <m-input v-model="text2" rows="5" type="textarea" disabled placeholder="请输入内容"></m-input>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">只读的</div>
      <m-box>
        <m-input v-model="text3" rows="5" type="textarea" readonly placeholder="请输入内容"></m-input>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">限制字数</div>
      <m-box>
        <m-input v-model="text4" rows="5" type="textarea" :limit="50" placeholder="请输入内容"></m-input>
      </m-box>
    </m-panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text1: '',
      text2: '不可用的',
      text3: '只读的',
      text4: ''
    }
  },
  methods: {
    handlerChange (val) {
      this.$toast(val)
    }
  }
}
</script>
