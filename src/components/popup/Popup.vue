<template>
  <div class="mtui-popup" v-if="value">
    <transition name="fadeIn">
    <div
      class="mtui-popup-mask"
      v-show="show"
      v-if="showMask"
      @click.self.stop="onClickMask">
    </div>
    </transition>

    <transition :name="comTransition">
    <div
      v-show="show"
      :class="[
        'mtui-popup-container',
        'position-' + position,
        { 'is-round': round }
      ]"
    >
      <span v-if="closeable" class="mtui-popup-close" @click.stop="close"><m-icon type="android-close"></m-icon></span>
      <slot></slot>
    </div>
    </transition>
  </div>
</template>

<script>
import Icon from '../icon/Icon'

export default {
  name: 'm-popup',
  components: { MIcon: Icon },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: Boolean,
    showMask: { // 是否显示遮罩层
      type: Boolean,
      default: true
    },
    maskCloseable: { // 是否允许点击遮罩关闭弹出层
      type: Boolean,
      default: true
    },
    position: { // 内容位置 可选值 ['center', 'top', 'right', 'left', 'bottom']
      type: String,
      default: 'center'
    },
    round: Boolean, // 是否显示圆角
    closeable: Boolean, // 是否显示关闭按钮
    transition: String // 动画name属性
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    comTransition () {
      let transition = 'fadeIn'

      if (this.transition) {
        transition = this.transition
      } else {
        switch (this.position) {
          case 'top': transition = 'slideDown'; break
          case 'bottom': transition = 'slideUp'; break
          case 'left': transition = 'slideRight'; break
          case 'right': transition = 'slideLeft'; break
        }
      }

      return transition
    }
  },
  watch: {
    value (val) {
      this.$nextTick(() => {
        this.show = val
      })
    }
  },
  methods: {
    onClickMask () {
      if (this.maskCloseable) {
        this.close()
      }
    },

    close () {
      this.show = false
      setTimeout(() => {
        this.$emit('change', false)
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/css/animate.scss';
@import './style.scss';
</style>
