<template>
  <div>
    <m-title type="1">Checkbox</m-title>

    <m-panel>
      <div slot="head">默认Checkbox</div>
      <m-cell>
        <m-checkbox v-model="checkbox1">选项一</m-checkbox>
        <m-checkbox v-model="checkbox2" label="2">选项二</m-checkbox>
      </m-cell>
    </m-panel>

    <m-panel>
      <div slot="head">不同颜色主题</div>
      <m-cell>

      </m-cell>
    </m-panel>

    <m-panel>
      <div slot="head">按钮Radio</div>
      <m-cell>
        <m-checkbox v-model="checkbox1" type="button">选项一</m-checkbox>
        <m-checkbox v-model="checkbox2" type="button" label="2">选项二</m-checkbox>
        <m-checkbox v-model="checkbox3" type="button" label="3">选项二</m-checkbox>
      </m-cell>
    </m-panel>

    <m-panel>
      <div slot="head">不可用的</div>
      <m-cell>

      </m-cell>
      <m-cell>

      </m-cell>
    </m-panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkbox1: 1,
      checkbox2: 2,
      checkbox3: 3
    }
  },
  methods: {

  }
}
</script>
