<template>
  <div>
    <m-title type="1">Select</m-title>

    <m-panel title="默认用法">
      <m-box>
        <m-select v-model="select" placeholder="请选择" :options="options"></m-select>
      </m-box>
    </m-panel>

    <m-panel title="禁用">
      <m-box>
        <m-select v-model="select" placeholder="请选择" :options="options" disabled></m-select>
      </m-box>
    </m-panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select: 0,
      options: [
        {
          value: 1,
          label: '选项一'
        },
        {
          value: 2,
          label: '选项二',
          disabled: true
        },
        {
          value: 3,
          label: '选项三'
        },
        {
          value: 4,
          label: '选项四'
        }
      ]
    }
  }
}
</script>

<style>

</style>
