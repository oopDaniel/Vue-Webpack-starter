<template lang="pug">
  nav.flex-center
    router-link.link(to="/", activeClass="active" exact) Home
    router-link.link(to="/user", activeClass="active") User
    router-link.link(
      to="/admin",
      activeClass="active",
      :class="{ inactive: !isAdmin }"
    ) Admin
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('user', ['user']),
    isAdmin () {
      return this.user && this.user.isAdmin
    }
  }
}
</script>

<style lang="stylus" scoped>
  nav
    justify-content flex-start

  .link
    position relative
    padding 0 1.5rem
    transition color .2s
    &:hover
      color lightblue
  
  .inactive
    color lightgrey
    &:hover
      color grey

  .active
    &:before
      content ''
      position absolute
      border-top 6px solid transparent
      border-bottom 6px solid transparent
      border-left 8px solid var(--accent)
      top 4px
      left 8px

</style>
