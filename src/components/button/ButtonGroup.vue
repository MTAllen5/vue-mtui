<template>
  <div
    :class="[
      'mtui-btn-group',
      'mtui-btn-group-' + this.type
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-button-group',
  props: {
    type: { // 按钮的排列形式 可选值：['left', 'right', 'row', 'column']
      type: String,
      default: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-btn-group {
  display: flex;
  align-items: flex-start;
  padding: 15px;

  .mtui-btn:not(:last-child) {
    margin-right: 10px;
  }

  &-left {
    flex-direction: row;
    justify-content: flex-start;
  }
  &-right {
    flex-direction: row;
    justify-content: flex-end;
  }
  &-row {
    flex-direction: row;
    justify-content: space-between;
  }
  &-column {
    flex-direction: column;
    justify-content: space-between;

    .mtui-btn:not(:last-child) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
}
</style>
