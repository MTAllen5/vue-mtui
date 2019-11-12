<template>
  <div>
    <m-title type="1">Checkbox</m-title>

    <m-panel>
      <div slot="head">默认Checkbox</div>
      <m-cell>
        <m-checkbox v-model="checkbox1">选项一</m-checkbox>
        <m-checkbox v-model="checkbox2">选项二</m-checkbox>
      </m-cell>
    </m-panel>

    <m-panel>
      <div slot="head">不同颜色主题</div>
      <m-cell>
        <m-checkbox v-model="checkbox1" theme="minor">选项一</m-checkbox>
        <m-checkbox v-model="checkbox2" theme="minor">选项二</m-checkbox>
      </m-cell>
    </m-panel>

    <m-panel>
      <div slot="head">按钮Radio</div>
      <m-cell>
        <m-checkbox v-model="checkbox1" type="button">选项一</m-checkbox>
        <m-checkbox v-model="checkbox2" type="button">选项二</m-checkbox>
        <m-checkbox v-model="checkbox3" type="button">选项三</m-checkbox>
      </m-cell>
    </m-panel>

    <m-panel>
      <div slot="head">不可用的</div>
      <m-cell>
        <m-checkbox v-model="checkbox1" disabled>选项一</m-checkbox>
        <m-checkbox v-model="checkbox2" disabled>选项二</m-checkbox>
      </m-cell>
      <m-cell>
        <m-checkbox v-model="checkbox1" type="button" disabled>选项一</m-checkbox>
        <m-checkbox v-model="checkbox2" type="button" disabled>选项二</m-checkbox>
        <m-checkbox v-model="checkbox3" type="button" disabled>选项三</m-checkbox>
      </m-cell>
    </m-panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true
    }
  }
}
</script>
