<template>
  <div class="api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
      <m-title type="1">Input</m-title>

      <m-panel title="默认Input">
        <m-box>
          <m-input v-model="text1" placeholder="请输入" />
        </m-box>
      </m-panel>

      <m-panel title="不可用">
        <m-box>
          <m-input v-model="text2" placeholder="请输入" disabled />
        </m-box>
      </m-panel>

      <m-panel title="只读">
        <m-box>
          <m-input v-model="text3" placeholder="请输入" readonly />
        </m-box>
      </m-panel>

      <m-panel title="可清空的">
        <m-box>
          <m-input v-model="text4" placeholder="请输入" clearable @clear="clearHandler" />
        </m-box>
      </m-panel>

      <m-panel title="插入自定义内容">
        <m-cell>
          <m-input v-model="text6" type="tel" placeholder="请输入验证码" maxlength="4" clearable>
            <m-button type="minor" inline size="small" @click="sendCode">发送验证码</m-button>
          </m-input>
        </m-cell>
        <m-cell>
          <m-input v-model="text6" type="tel" placeholder="请输入您的身高" maxlength="4" clearable>
            <span class="customFoot">cm</span>
          </m-input>
        </m-cell>
      </m-panel>

      <m-panel title="错误提示">
        <m-box>
          <m-input v-model="text7" placeholder="请输入手机号" error />
        </m-box>
      </m-panel>

      <m-panel title="文本域">
        <m-box>
          <m-input v-model="text8" type="textarea" rows="5" maxlength="200" placeholder="请输入内容" @change="handlerChange" />
        </m-box>
      </m-panel>
    </div>
  </div>
</template>

<script>
import Content from '../doc/Input'

export default {
  name: 'exp-input',
  components: { DocContent: Content },
  data () {
    return {
      text1: '',
      text2: '文本框不可用',
      text3: 'readonly input 只读',
      text4: '',
      text5: '',
      text6: '',
      text7: '13000000000',
      text8: ''
    }
  },
  methods: {
    clearHandler () {
      this.$toast('清空了')
    },

    sendCode () {
      this.$toast('发送成功！')
    },

    handlerChange (val) {
      this.$toast(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.customFoot {
  margin-left: 5px;
  font-size: 12px;
  color: #bfbfbf;
}
</style>
