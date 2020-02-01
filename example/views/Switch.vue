<template>
  <div>
    <m-title type="1">Switch</m-title>

    <m-panel title="默认Swich">
      <m-box>
        <m-switch v-model="switch1"></m-switch>
      </m-box>
    </m-panel>

    <m-panel title="更多主题">
      <m-box>
        <m-switch v-model="switch1" type="minor"></m-switch>
        <m-switch v-model="switch1" type="warn"></m-switch>
        <m-switch v-model="switch1" type="danger"></m-switch>
      </m-box>
    </m-panel>

    <m-panel title="不可用">
      <div slot="head"></div>
      <m-box>
        <m-switch v-model="switch2" disabled></m-switch>
      </m-box>
    </m-panel>

    <m-panel title="小型Switch">
      <m-cell>
        <m-switch v-model="switch3" small></m-switch>
      </m-cell>
    </m-panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      switch1: true,
      switch2: true,
      switch3: true
    }
  }
}
</script>
