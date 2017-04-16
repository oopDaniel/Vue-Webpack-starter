<template lang="pug">
  div Hello Admin {{ user.lastName }}
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
export default {
  computed: mapGetters('user', ['user']),
  beforeRouteEnter (to, from, next) {
    const user = store.state.user.user
    if (user && user.isAdmin) next()
    else console.warn('unauthorized')
  }
}
</script>

<style lang="stylus">
</style>
