<template>
  <div class="api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
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
  </div>
</template>

<script>
import Content from '../doc/Counter'

export default {
  name: 'exp-content',
  components: { DocContent: Content },
  data () {
    return {
      counter1: 3
    }
  }
}
</script>
