<template>
  <div>
    <m-title type="1">Radio</m-title>

    <m-panel title="默认Radio">
      <m-cell>
        <m-radio v-model="radio" label="1">选项一</m-radio>
        <m-radio v-model="radio" label="2">选项二</m-radio>
      </m-cell>
      <m-cell>
        <m-radio v-model="radio" label="1" theme="minor">选项一</m-radio>
        <m-radio v-model="radio" label="2" theme="minor">选项二</m-radio>
      </m-cell>
      <m-cell>
        <m-radio v-model="radio" label="1" theme="warn">选项一</m-radio>
        <m-radio v-model="radio" label="2" theme="warn">选项二</m-radio>
      </m-cell>
      <m-cell>
        <m-radio v-model="radio" label="1" theme="danger">选项一</m-radio>
        <m-radio v-model="radio" label="2" theme="danger">选项二</m-radio>
      </m-cell>
    </m-panel>

    <m-panel title="按钮Radio">
      <m-cell>
        <m-radio v-model="radio2" label="3" type="button">选项一</m-radio>
        <m-radio v-model="radio2" label="4" type="button">选项二</m-radio>
        <m-radio v-model="radio2" label="5" type="button">选项三</m-radio>
      </m-cell>
    </m-panel>

    <m-panel title="不可用的">
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
