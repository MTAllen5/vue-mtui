<template>
  <div class="mtui-select">
    <label class="mtui-select-display">
      <!-- <input class="mtui-select-display-input" v-model="displayText" :placeholder="placeholder" readonly> -->
      <select v-model="displayText" :placeholder="placeholder">
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
  props: {
    placeholder: String,
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      displayText: 1
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
    }
  }

  .ion {
    // width: 20px;
    margin-left: 8px;
    color: $colorDisabled;
  }
}
</style>
