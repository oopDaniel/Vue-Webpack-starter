<template lang="pug">
  div
    header-bar
    router-view
</template>

<script>
  // import { mapState, mapActions } from 'vuex'
  import HeaderBar from '../shared/HeaderBar'

  export default {
    // data: () => ({
    //   columns: [
    //     { header: 'Work Email', property: 'email' },
    //     { header: '', property: 'pictureUrl' },
    //     { header: 'First Name', property: 'firstName' },
    //     { header: 'Last Name', property: 'LastName' }
    //   ],
    //   hasFetched: false
    // }),
    // computed: {
    //   ...mapState('user', ['user']),
    //   ...mapState('list', ['leads'])
    // },
    // methods: mapActions('list', ['fetchLeads']),
    components: { HeaderBar }
    // created () {
    //   this.fetchLeads()
    //     .then(() => (this.hasFetched = true))
    // }
  }
</script>

<style lang="stylus">
</style>
