<template lang="pug">
  div
    header-bar
    router-view
</template>

<script>
  import HeaderBar from '../shared/HeaderBar'

  export default {
    components: { HeaderBar }
  }
</script>

<style lang="stylus">
</style>
