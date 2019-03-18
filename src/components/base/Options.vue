<template>
  <div class="options-container" v-if="showFlag">
    <div class="options-main">
      <div class="options-hd">
        <strong class="options-title">{{ title }}</strong>
      </div>
      <div class="options-bd">{{ text }}</div>
      <div class="options-ft">
        <slot></slot>
        <Button @click="close" class="long">{{ closeTxt }}</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '请选择'
    },
    text: {
      type: String,
      default: '内容'
    },
    closeTxt: {
    	type: String,
      default: '关闭'
    }
  },
  data () {
    return {
      showFlag: false
    }
  },
  methods:{
    hide () {
      this.showFlag = false;
    },
    show () {
      this.showFlag = true;
    },
    close () {
      this.hide()
      this.$emit('close')
    },
  }
}
</script>
<style lang="scss" scoped>
@import '../../common/css/variable.scss'
@import '../../common/css/mixins.scss'

.options-container
  mask(970)
  display flex
  align-items center
  justify-content center

  .options-main
    width 70%
    background-color $darkWhite
    border-radius 8px
    overflow hidden
    font-size $fontXMedium
    text-align center
    animation zoomIn .15s ease forwards

    .options-hd
      padding 10px 20px

      .options-title
        font-weight 400
        word-break break-all

    .options-bd
      padding 0 20px
      font-size $fontMedium
      color gray
      word-break break-all

    .options-ft
      position relative
      margin-top 14px
      &::after
        top-line()

      button
        position relative
        &:not(:first-child)::after
          top-line()
</style>

