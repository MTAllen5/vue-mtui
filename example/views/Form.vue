<template>
  <div class="api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
      <m-title type="1">Form</m-title>
      <div>
        <m-form align="right">
          <m-form-item label="输入框" required>
            <m-input v-model="text" placeholder="请输入姓名" clearable></m-input>
          </m-form-item>
          <m-form-item label="单选框">
            <m-radio v-model="radio" label="1">选项一</m-radio>
            <m-radio v-model="radio" type="button" label="2">选项二</m-radio>
          </m-form-item>
          <m-form-item label="复选框">
            <m-checkbox v-model="checkbox1">选项一</m-checkbox>
            <m-checkbox v-model="checkbox2" type="button">选项一</m-checkbox>
          </m-form-item>
          <m-form-item label="选择器">
            <m-select v-model="select" placeholder="请选择" :options="selectOptions"></m-select>
          </m-form-item>
          <m-form-item label="开关按钮">
            <m-switch v-model="sch"></m-switch>
          </m-form-item>
          <m-form-item label="加减按钮">
            <m-counter v-model="counter"></m-counter>
          </m-form-item>
          <m-form-item label="文本域" block>
            <m-input type="textarea" v-model="textarea" placeholder="请输入文本域内容"></m-input>
          </m-form-item>
        </m-form>
      </div>
    </div>
  </div>
</template>

<script>
import Content from '../doc/Form'

export default {
  name: 'exp-form',
  components: { DocContent: Content },
  data () {
    return {
      text: '',
      sch: false,
      counter: 0,
      radio: '1',
      checkbox1: true,
      checkbox2: false,
      select: '',
      textarea: '',

      selectOptions: ['选项一', '选项二', '选项三']
    }
  }
}
</script>
