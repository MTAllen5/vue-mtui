<template>
  <div>
    <m-tl type="1">Form</m-tl>
    <div>
      <m-form>
        <m-form-item label="输入框">
          <m-input v-model="text1" placeholder="请输入姓名"></m-input>
        </m-form-item>
        <m-form-item label="开关按钮">
          <m-switch v-model="text2"></m-switch>
        </m-form-item>
        <m-form-item label="单选框">

        </m-form-item>
        <m-form-item label="单选按钮">

        </m-form-item>
        <m-form-item label="复选框">

        </m-form-item>
        <m-form-item label="复选按钮">

        </m-form-item>
        <m-form-item label="加减按钮">
          <m-number v-model="text1"></m-number>&nbsp;&nbsp;
          <m-number v-model="text3" type="input"></m-number>
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
      text4: ''
    }
  }
}
</script>

