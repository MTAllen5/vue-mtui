<template>
  <div>
    <m-title type="1">Radio</m-title>

    <m-panel>
      <div slot="head">默认Radio</div>
      <m-cell>
        <m-radio v-model="radio" label="1">选项一</m-radio>
        <m-radio v-model="radio" label="2">选项二</m-radio>
      </m-cell>
    </m-panel>

    <m-panel>
      <div slot="head">不同颜色主题</div>
      <m-cell>
        <m-radio v-model="radio" label="1" theme="minor">选项一</m-radio>
        <m-radio v-model="radio" label="2" theme="minor">选项二</m-radio>
      </m-cell>
    </m-panel>

    <m-panel>
      <div slot="head">按钮Radio</div>
      <m-cell>
        <m-radio v-model="radio2" label="3" type="button">选项一</m-radio>
        <m-radio v-model="radio2" label="4" type="button">选项二</m-radio>
        <m-radio v-model="radio2" label="5" type="button">选项三</m-radio>
      </m-cell>
    </m-panel>

    <m-panel>
      <div slot="head">不可用的</div>
      <m-cell>
        <m-radio v-model="radio2" label="3" disabled>选项一</m-radio>
        <m-radio v-model="radio2" label="4" disabled>选项二</m-radio>
        <m-radio v-model="radio2" label="5" disabled>选项三</m-radio>
      </m-cell>
      <m-cell>
        <m-radio v-model="radio2" label="3" type="button" disabled>选项一</m-radio>
        <m-radio v-model="radio2" label="4" type="button" disabled>选项二</m-radio>
        <m-radio v-model="radio2" label="5" type="button" disabled>选项三</m-radio>
      </m-cell>
    </m-panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: 1,
      radio2: 3
    }
  },
  methods: {

  }
}
</script>
