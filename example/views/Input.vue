<template>
  <div>
    <m-title type="1">Input</m-title>
    <m-panel>
      <div slot="head">默认Input</div>
      <m-box>
        <m-input v-model="text1" placeholder="请输入"></m-input>
        <m-input v-model="text2" placeholder="请输入" disabled></m-input>
        <m-input v-model="text3" placeholder="请输入" readonly></m-input>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">可清空的</div>
      <m-box>
        <m-input v-model="text4" placeholder="请输入" clearable @clear="clearHandler"></m-input>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">带按钮的</div>
      <m-box>
        <m-input v-model="text5" type="tel" placeholder="请输入验证码" maxlength="5" clearable>
          <m-button type="minor" inline text @click="sendCode">发送验证码</m-button>
        </m-input>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">文本域</div>
      <m-box>
        <m-input v-model="text6" rows="5" type="textarea" placeholder="请输入内容" clearable></m-input>
      </m-box>
    </m-panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      switcher: false,
      text1: '',
      text2: '',
      text3: 'readonly input 只读',
      text4: '',
      text5: '',
      text6: ''
    }
  },
  methods: {
    clearHandler () {
      this.$toast('清空了')
    },
    sendCode () {
      this.$toast('发送成功！')
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .mtui-input:not(:last-child) {
  margin-bottom: 15px;
}
</style>
