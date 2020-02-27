<template>
  <div class="api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
      <m-title type="1">标题H1</m-title>
      <m-title type="2">标题H2</m-title>
      <m-title type="3">标题H3</m-title>
      <m-title type="4">标题H4</m-title>
      <m-title type="5">标题H5</m-title>
      <m-title type="6">标题H6</m-title>
    </div>
  </div>
</template>

<script>
import Content from '../doc/Title'

export default {
  name: 'exp-title',
  components: { DocContent: Content }
}
</script>
