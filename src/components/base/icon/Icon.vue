<template>
  <i :class="classList"></i>
</template>

<script>
export default {
  name: 'mtui-icon',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    classList () {
      return 'ion ' + this.type.split(' ').map((item) => 'ion-' + item).join(' ')
    }
  }
}
</script>

<style lang="sass">
@import '@/common/ionicons/css/ionicons.min.css'
</style>
