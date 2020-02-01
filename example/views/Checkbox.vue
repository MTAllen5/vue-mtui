<template>
  <div>
    <m-title type="1">Checkbox</m-title>

    <m-panel title="默认Checkbox">
      <m-cell>
        <m-checkbox v-model="checkbox1">选项一</m-checkbox>
        <m-checkbox v-model="checkbox2">选项二</m-checkbox>
      </m-cell>
      <m-cell>
        <m-checkbox v-model="checkbox1" theme="minor">选项一</m-checkbox>
        <m-checkbox v-model="checkbox2" theme="minor">选项二</m-checkbox>
      </m-cell>
      <m-cell>
        <m-checkbox v-model="checkbox1" theme="warn">选项一</m-checkbox>
        <m-checkbox v-model="checkbox2" theme="warn">选项二</m-checkbox>
      </m-cell>
      <m-cell>
        <m-checkbox v-model="checkbox1" theme="danger">选项一</m-checkbox>
        <m-checkbox v-model="checkbox2" theme="danger">选项二</m-checkbox>
      </m-cell>
    </m-panel>

    <m-panel title="按钮Radio">
      <m-cell>
        <m-checkbox v-model="checkbox1" type="button">选项一</m-checkbox>
        <m-checkbox v-model="checkbox2" type="button">选项二</m-checkbox>
        <m-checkbox v-model="checkbox3" type="button">选项三</m-checkbox>
      </m-cell>
    </m-panel>

    <m-panel title="不可用的">
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
