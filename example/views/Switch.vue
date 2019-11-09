<template>
  <div>
    <m-title type="1">Switch</m-title>
    <m-panel>
      <div slot="head">默认Swich</div>
      <m-cell>
        <m-switch v-model="switch1"></m-switch>
        <m-switch v-model="switch1" type="minor"></m-switch>
        <m-switch v-model="switch1" type="default"></m-switch>
      </m-cell>
    </m-panel>
    <m-panel>
      <div slot="head">不可用</div>
      <m-box>
        <m-switch v-model="switch2" disabled></m-switch>
        <m-switch v-model="switch2" disabled type="minor"></m-switch>
        <m-switch v-model="switch2" disabled type="default"></m-switch>
      </m-box>
    </m-panel>
    <m-panel>
      <div slot="head">小型Switch</div>
      <m-cell>
        <m-switch v-model="switch2" small></m-switch>
        <m-switch v-model="switch2" small type="minor"></m-switch>
        <m-switch v-model="switch2" small type="default"></m-switch>
      </m-cell>
    </m-panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      switch1: true,
      switch2: true
    }
  },
  methods: {

  }
}
</script>
