<template>
  <div class="mtui-counter">
    <div class="mtui-counter-main" :class="{'is-small': small}">
      <m-button inline :type="color" :small="small" :disabled="disabled || value <= min" @onClick="reduce"><m-icon type="android-remove"></m-icon></m-button>

      <input v-if="type === 'input'" class="mtui-counter-ipt" type="tel" v-model="val" :disabled="disabled" @change="editValue">
      <span v-if="type === 'span'" class="mtui-counter-span">{{ value }}</span>

      <m-button inline :type="color" :small="small" :disabled="disabled || value >= max" @onClick="increase"><m-icon type="android-add"></m-icon></m-button>
    </div>
  </div>
</template>

<script>
import Button from '../button/Button'
import Icon from '../icon/Icon'

export default {
  name: 'm-counter',
  components: {
    MButton: Button,
    MIcon: Icon
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [Number, String],
      default: 0,
      validator: (value) => {
        return !isNaN(Number(value))
      }
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
    },
    disabled: Boolean, // 是否可用
    small: Boolean,
    color: { // 主题颜色 可选值['primary', 'minor', 'default']
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      val: this.value
    }
  },
  watch: {
    value (val) {
      this.val = val
    }
  },
  methods: {
    reduce () {
      let val = this.value
      this.$emit('change', --val)
    },

    increase () {
      let val = this.value
      this.$emit('change', ++val)
    },

    editValue (e) {
      let val = Number(e.target.value)

      if (isNaN(val)) {
        val = this.min
      } else if (val < this.min) {
        val = this.min
      } else if (val > this.max) {
        val = this.max
      }

      this.$emit('change', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-counter {
  display: inline-block;

  &-main {
    @include flex-center();
    height: 46px;

    .mtui-counter-span {
      display: inline-block;
      margin: 0 3px;
      min-width: 40px;
      line-height: 46px;
      border: 1px solid transparent;
      border-radius: 4px;
      text-align: center;
      font-size: $fontXMedium;
    }
    .mtui-counter-ipt {
      margin: 0 3px;
      padding: 0 3px;
      width: 32px;
      height: 44px;
      border: 1px solid $colorLine;
      border-radius: 4px;
      text-align: center;
      font-size: $fontXMedium;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      outline: none;
    }

    &.is-small {
      height: 34px;

      .mtui-counter-span {
        min-width: 30px;
        line-height: 34px;
      }
      .mtui-counter-ipt {
        width: 22px;
        height: 32px;
      }
    }
  }
}
</style>
