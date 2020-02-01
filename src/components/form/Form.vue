<template>
  <form
    class="mtui-form"
    :action="action"
    :autocomplete="autocomplete"
    :enctype="enctype"
    :method="method"
    :name="name"
    :novalidate="novalidate"
    :target="target"
  >
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'm-form',
  props: {
    action: String,
    autocomplete: {
      type: String,
      default: 'on'
    },
    enctype: String,
    method: String,
    name: String,
    novalidate: Boolean,
    target: {
      type: String,
      default: '_self'
    },
    labelWidth: Number,
    labelAlign: String,
    align: String,
    block: Boolean
  }
}
</script>
