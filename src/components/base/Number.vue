<template>
  <div class="mtui-number">
    <div class="mtui-number-ctn">
      <m-button inline type="primary" :disabled="value <= 0" @on-click="reduce"><m-icon type="ios-remove"></m-icon></m-button>
      <input v-if="type === 'input'" class="mtui-number-ipt" type="tel" v-model="value" readonly>
      <span v-if="type === 'span'" class="mtui-number-span">{{ value }}</span>
      <m-button inline type="primary" :disabled="value >= max" @on-click="increase"><m-icon type="ios-add"></m-icon></m-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mtui-number',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'span'
    },
    max: {
      type: Number,
      default: 9
    }
  },
  data () {
    return {

    }
  },
  methods: {
    reduce () {
      let value = this.value
      this.$emit('change', --value)
    },
    increase () {
      let value = this.value
      this.$emit('change', ++value)
    }
  }
}
</script>

<style lang="scss" scoped>

.mtui-number {
  display: inline-block;
  height: 28px;

  &-ctn {
    display: flex;
    align-items: center;

    .mtui-number-span {
      display: inline-block;
      min-width: 28px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      font-size: $fontMedium;
    }
    .mtui-number-ipt {
      margin: 0 3px;
      padding: 0 3px;
      width: 30px;
      height: 28px;
      border: 1px solid $colorLine;
      border-radius: 4px;
      text-align: center;
      font-size: $fontMedium;
    }

    .mtui-btn {
      width: 28px;
      min-width: auto;
      height: 28px;
    }
  }
}
</style>
