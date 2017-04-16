<template lang="pug">
  div
    admin-header-bar
    router-view
</template>

<script>
  // import { mapState, mapActions } from 'vuex'
  import AdminHeaderBar from '@/components/shared/AdminHeaderBar'

  export default {
    components: { AdminHeaderBar }
  }
</script>

<style lang="stylus">
</style>
