<template>
  <div class="mtui-select">
    <label class="mtui-select-display">
      <select v-model="val" @change="onChange" :class="{ placeholder: val === '' }">
        <option value="" disabled style="display: none;">{{ placeholder }}</option>
        <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.label }}</option>
      </select>
    </label>
    <m-icon type="ios-arrow-forward"></m-icon>
  </div>
</template>

<script>
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
    placeholder: String,
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      val: this.options.find(opt => opt.value === this.value) ? this.value : ''
    }
  },
  watch: {
    value (val) {
      this.val = val
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
  position: relative;
  padding: 5px 0;
  height: 34px;
  font-size: $fontXMedium;
  line-height: 24px;
  overflow: hidden;

  &-display {
    flex: 1;

    select {
      display: block;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 24px;
      border: 0;
      font-size: $fontXMedium;
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
  }

  .ion {
    margin-left: 8px;
    color: $colorDisabled;
  }
}
</style>
