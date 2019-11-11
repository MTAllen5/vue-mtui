<template>
  <div>
    <m-title type="1">Counter</m-title>

    <m-panel>
      <div slot="head">默认Counter</div>
      <m-cell>
        <m-counter v-model="counter1" style="margin-right: 8px;"></m-counter>
        <m-counter v-model="counter1" theme="minor"></m-counter>
      </m-cell>
    </m-panel>

    <m-panel>
      <div slot="head">可编辑的</div>
      <m-cell>
        <m-counter v-model="counter1" type="input" style="margin-right: 8px;"></m-counter>
        <m-counter v-model="counter1" type="input" theme="minor"></m-counter>
      </m-cell>
    </m-panel>

    <m-panel>
      <div slot="head">不可用的</div>
      <m-cell>
        <m-counter v-model="counter1" disabled style="margin-right: 8px;"></m-counter>
        <m-counter v-model="counter1" type="input" disabled theme="minor"></m-counter>
      </m-cell>
    </m-panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter1: 3
    }
  },
  methods: {

  }
}
</script>
