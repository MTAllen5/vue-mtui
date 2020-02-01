<template>
  <div class="mtui-search">
    <form
      :class="[
        'mtui-search-form',
        { clearable: clearable }
      ]"
      action="*"
      @submit.prevent="onSearch"
      @click="$refs.searcher.makeFocus()"
    >
      <m-icon class="mtui-search-icon" type="ios-search-strong"></m-icon>
      <m-input
        v-model="keyword"
        class="mtui-search-input"
        type="search"
        :clearable="clearable"
        :disabled="disabled"
        :maxlength="maxlength"
        :placeholder="placeholder"
        ref="searcher"
        @clear="clearKeyWord"
      />
    </form>
  </div>
</template>

<script>
import Icon from '../icon/Icon'
import Input from '../input/Input'

export default {
  name: 'm-search',
  components: {
    MIcon: Icon,
    MInput: Input
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    maxlength: { // 最大字数
      type: Number,
      default: 30
    },
    clearable: { // 是否可清除输入
      type: Boolean,
      default: false
    },
    disabled: Boolean, // 是否可用
    placeholder: {
      type: String,
      default: '请输入搜索关键字'
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
      this.$refs.searcher.makeBlur()
      this.$emit('on-search', this.keyword.trim())
    },

    clearKeyWord () {
      this.keyword = ''
      this.$refs.searcher.makeFocus()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
