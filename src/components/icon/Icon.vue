<template>
  <i :class="classList"></i>
</template>

<script>
import '@/common/ionicons/css/ionicons.min.css'

export default {
  name: 'm-icon',
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
