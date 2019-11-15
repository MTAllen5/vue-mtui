<template>
  <div class="mtui-search">
    <form class="mtui-search-form" :class="{ clearable: clearable }" action="*" @submit.prevent="onSearch" @click="$refs.searcher.focus()">
      <m-icon class="mtui-search-icon" type="ios-search-strong"></m-icon>
      <!-- 输入框 -->
      <input class="mtui-search-input" type="search" v-model="keyword" :maxlength="maxlength" :placeholder="placeholder" ref="searcher">
      <!-- 清除按钮 -->
      <m-icon class="mtui-search-clear" type="close-circled" v-if="clearable" v-show="keyword !== ''" @click.native.stop="clearKeyWord"></m-icon>
    </form>
  </div>
</template>

<script>
import Icon from '../icon/Icon'

export default {
  name: 'm-search',
  components: { MIcon: Icon },
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
  background-color: white;

  &-form {
    position: relative;
    display: flex;
    background-color: $colorBg;
    border-radius: 4px;

    .mtui-search-icon {
      flex-shrink: 0;
      padding-top: 4px;
      padding-left: 8px;
      width: 20px;
      text-align: center;
      line-height: 30px;
      color: $colorDisabled;
      font-size: 20px;
    }

    .mtui-search-input {
      padding: 5px 8px;
      width: 100%;
      height: 34px;
      background-color: transparent;
      border: 0;
      outline: none;
      font-size: 16px;
      color: $black;
      -webkit-appearance:none;
      &::-webkit-search-cancel-button {
        display: none;
      }

      &::placeholder {
        color: #9b9b9b;
      }
    }

    .mtui-search-clear {
      flex-shrink: 0;
      padding-right: 8px;
      width: 20px;
      text-align: center;
      line-height: 34px;
      color: $colorDisabled;
      font-size: 16px;
    }
  }
}
</style>
