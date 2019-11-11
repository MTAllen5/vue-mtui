<template>
  <div>
    <m-title type="1">Form</m-title>
    <div>
      <m-form>
        <m-form-item label="输入框">
          <m-input v-model="text1" placeholder="请输入姓名" clearable></m-input>
        </m-form-item>
        <m-form-item label="开关按钮">
          <m-switch v-model="text2"></m-switch>
        </m-form-item>
        <m-form-item label="单选框">
          <m-radio v-model="radio" label="1">选项一</m-radio>
          <m-radio v-model="radio" label="2">选项二</m-radio>
        </m-form-item>
        <m-form-item label="单选按钮">
          <m-radio v-model="radio" type="button" label="1">选项一</m-radio>
          <m-radio v-model="radio" type="button" label="2">选项二</m-radio>
        </m-form-item>
        <m-form-item label="复选框">
          <m-checkbox v-model="checkbox1">选项一</m-checkbox>
          <m-checkbox v-model="checkbox2" label="2">选项二</m-checkbox>
        </m-form-item>
        <m-form-item label="复选按钮">
          <m-checkbox v-model="checkbox1" type="button">选项一</m-checkbox>
          <m-checkbox v-model="checkbox2" type="button" label="2">选项二</m-checkbox>
        </m-form-item>
        <m-form-item label="加减按钮">
          <m-counter v-model="text3"></m-counter>
        </m-form-item>
        <m-form-item label="选项">

        </m-form-item>
        <m-form-item>
          <m-input type="textarea" v-model="text4" placeholder="请输入文本域内容"></m-input>
        </m-form-item>
      </m-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text1: 0,
      text2: false,
      text3: '0',
      text4: '',
      radio: '1',
      checkbox1: true,
      checkbox2: false
    }
  }
}
</script>
