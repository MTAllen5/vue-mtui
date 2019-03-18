<template>
  <div class="select-container" @click="handleClick">
    <input :disabled="disabled" :placeholder="placeholder" v-model="val" readonly>
    <i class="select-fold" :class="{'select-fold-active': showList}"></i>

    <transition name="slide">
    <div class="select-list" v-show="showList">
      <i class="select-arrow"></i>
      <slot></slot>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    placeholder: String,
    disabled: Boolean
  },
  data () {
    return {
      val: this.value,
      showList: false
    }
  },
  mounted () {
    this.$slots.default.forEach(item => {
      item.componentInstance.$on('change', (option) => {
        this.handleSelect(option)
      })
    })
  },
  methods: {
    handleClick () {
      this.showList = !this.showList
    },
    handleSelect (option) {
      this.val = option.label
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/variable.scss';

.select-container {
  position: relative;
  display: flex;
  flex: 1;
  height: 46px;
  background-color: $bgColor;
  border-radius: 8px;

  .select-fold {
    display: block;
    width: 40px;
    height: 46px;
    background: url(../../assets/icon_fold.png) center center no-repeat;
    background-size: 12px 8px;
    transition: transform .2s;
    &.select-fold-active {
      transform: rotate3d(0, 0, 1, -180deg);
    }
  }

  input {
    padding: 0 16px;
    flex: 1;
    width: 100px;
    height: 100%;
    background-color: transparent;
    border: 0;
    line-height: 46px;
    font-size: $fontXMedium;
    color: $gray;
    &::-webkit-input-placeholder {
      color: $gray;
    }
  }
  
  .select-list {
    position: absolute;
    left: 0;
    top: 46px;
    z-index: 10;
    margin-top: 12px;
    padding: 5px 0;
    width: 100%;
    background: white;
    border-radius: 8px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px rgba(0,0,0,.1);
    transform-origin: center top;

    .select-arrow {
      position: absolute;
      left: 10%;
      top: -6px;
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-top-width: 0;
      border-bottom-color: #ebeef5;
      &::after {
        content: '';
        position: absolute;
        top: 1px;
        left: -5px;
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-top-width: 0;
        border-bottom-color: white;
      }
    }
  }
}
</style>
