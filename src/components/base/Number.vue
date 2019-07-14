<template>
  <div class="mtui-number">
    <div class="mtui-number-ctn">
      <m-button inline type="primary" :disabled="value <= min" @click="reduce"><m-icon type="ios-remove"></m-icon></m-button>
      <input v-if="type === 'input'" class="mtui-number-ipt" type="tel" v-model="value" readonly>
      <span v-if="type === 'span'" class="mtui-number-span">{{ value }}</span>
      <m-button inline type="primary" :disabled="value >= max" @click="increase"><m-icon type="ios-add"></m-icon></m-button>
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
    min: {
      type: Number,
      default: 0
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

  &-ctn {
    display: flex;
    align-items: center;
    height: 32px;

    .mtui-number-span {
      display: inline-block;
      min-width: 32px;
      line-height: 100%;
      text-align: center;
      font-size: $fontMedium;
    }
    .mtui-number-ipt {
      margin: 0 3px;
      padding: 0 3px;
      width: 32px;
      height: 100%;
      border: 1px solid $colorLine;
      border-radius: 4px;
      text-align: center;
      font-size: $fontMedium;
    }

    .mtui-btn {
      width: 32px;
      min-width: auto;
      height: 100%;
    }
  }
}
</style>
