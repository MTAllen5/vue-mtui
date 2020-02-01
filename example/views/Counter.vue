<template>
  <div>
    <m-title type="1">Counter</m-title>

    <m-panel title="默认Counter">
      <m-box>
        <m-counter v-model="counter1"></m-counter>
      </m-box>
    </m-panel>

    <m-panel title="可编辑的">
      <m-box>
        <m-counter v-model="counter1" type="input"></m-counter>
      </m-box>
    </m-panel>

    <m-panel title="不可用的">
      <m-box>
        <m-counter v-model="counter1" disabled style="margin-right: 8px;"></m-counter>
        <m-counter v-model="counter1" type="input" disabled theme="danger"></m-counter>
      </m-box>
    </m-panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter1: 3
    }
  }
}
</script>
