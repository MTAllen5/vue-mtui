<template>
  <div class="mtui-select">
    <select v-model="val" @change="onChange" :class="{ placeholder: val === '' }">
      <option value="" disabled style="display: none;">{{ placeholder }}</option>
      <option v-for="(option, index) in opts" :key="index" :value="option.value">{{ option.label }}</option>
    </select>
    <m-icon type="ios-arrow-forward"></m-icon>
  </div>
</template>

<script>
/* eslint-disable */
import Icon from '../icon/Icon'

export default {
  name: 'm-select',
  components: { MIcon: Icon },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: '请选择'
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      val: this.options.find(opt => opt.value == this.value || opt == this.value) ? this.value : ''
    }
  },
  computed: {
    opts () {
      return this.options.map(opt => {
        if (Object.prototype.toString.call(opt) === '[object Object]' && opt !== null) {
          return opt
        } else if (typeof opt === 'number' || typeof opt === 'string' || typeof opt === 'boolean') {
          return {
            value: opt,
            label: opt
          }
        } else {
          throw new Error('请传入正确的参数')
        }
      })
    }
  },
  watch: {
    value (val) {
      this.val = this.opts.find(opt => opt.value == val || opt == val) ? val : ''
    }
  },
  methods: {
    onChange (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-select {
  @extend .mtui-common;
  @include flex-center();
  width: 100%;
  background-color: white;
  border-radius: 4px;

  select {
    flex: 1;
    padding: 5px 8px;
    min-width: 100px;
    height: 34px;
    line-height: 24px;
    background-color: transparent;
    border: 0;
    font-size: $fontXMedium;
    color: lighten($black, 20%);
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    outline: none;
    user-select: none;

    &.placeholder {
      color: lighten($black, 60%);
    }

    option {
      color: $black;
    }
  }

  .ion {
    margin-left: 8px;
    color: $colorDisabled;
  }
}
</style>
