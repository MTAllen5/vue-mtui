<template>
  <i :class="classList"></i>
</template>

<script>
  export default {
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

<style lang="sass" scoped>
@import 'ionicons/css/ionicons.min.css'
</style>

