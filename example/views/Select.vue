<template>
  <div class="api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
      <m-title type="1">Select</m-title>

      <m-panel title="默认用法">
        <m-box>
          <m-select v-model="select" placeholder="请选择" :options="options" @change="a"></m-select>
        </m-box>
      </m-panel>

      <m-panel title="禁用">
        <m-box>
          <m-select v-model="select" placeholder="请选择" :options="options" disabled></m-select>
        </m-box>
      </m-panel>
    </div>
  </div>
</template>

<script>
import Content from '../doc/Select'

export default {
  name: 'exp-select',
  components: { DocContent: Content },
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
  },
  methods: {
    a (val) {
      console.log(val)
    }
  }
}
</script>

<style>

</style>
