<template>
  <div class="mtui-search">
    <form class="mtui-search-form" :class="{ clearable: clearable }" action="*" @submit.prevent="onSearch" @click="$refs.searcher.focus()">
      <m-icon class="mtui-search-icon" type="search"></m-icon>
      <!-- 输入框 -->
      <input class="mtui-search-input" type="search" v-model="keyword" :maxlength="maxlength" :placeholder="placeholder" ref="searcher">
      <!-- 清除按钮 -->
      <i class="mtui-search-clear" v-if="clearable" v-show="keyword !== ''" @click.stop="clearKeyWord"></i>
    </form>
  </div>
</template>

<script>
export default {
  name: 'm-search',
  props: {
    value: {
      type: String,
      default: ''
    },
    maxlength: { // 最大字数
      type: Number,
      default: 30
    },
    clearable: { // 是否可以清除
      type: Boolean
    },
    placeholder: {
      type: String,
      default: '请输入'
    }
  },
  data () {
    return {
      keyword: ''
    }
  },
  watch: {
    value (val) {
      this.keyword = val
    },
    keyword (kw) {
      this.$emit('input', kw)
    }
  },
  methods: {
    onSearch () {
      if (this.keyword.trim() === '') {
        this.$tooltip.show('下属姓名不能为空')
        return
      }

      this.$refs.searcher.blur()
      this.$emit('on-search', this.keyword.trim())
    },

    clearKeyWord () {
      this.keyword = ''
      this.$refs.searcher.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-search {
  padding: 10px 16px;
  background-color: #fff;

  &-form {
    position: relative;
    display: flex;
    background-color: $colorBg;
    border-radius: 2px;

    .mtui-search-icon {
      width: 30px;
      text-align: center;
      line-height: 34px;
      color: $colorDisabled;
    }

    &.clearable { padding-right: 24px; }

    .mtui-search-input {
      padding: 5px 8px;
      width: 100%;
      height: 34px;
      background-color: transparent;
      border: 0;
      outline: none;
      font-size: 14px;
      color: #333;
      -webkit-appearance:none;
      &::-webkit-search-cancel-button {
        display: none;
      }

      &::placeholder {
        color: #9b9b9b;
      }
    }

    .search-clear {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      background-color: #d7d7d7;
      border-radius: 50%;

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -5px;
        margin-top: -1px;
        width: 10px;
        height: 2px;
        background-color: #9b9b9b;
      }
      &::before { transform: rotate(45deg); }
      &::after { transform: rotate(-45deg); }
    }
  }
}
</style>
