<template lang="pug">
  .container.flex-center
    button.name(
      @click='shouldShowMenu = !shouldShowMenu',
      @blur='hideMenu') {{ name }}
    .menu(v-if='shouldShowMenu === true')
      .menu-item.flex-center(v-if='this.user == null') Sign Up
      .menu-item.flex-center(v-if='this.user == null') Log In
      .menu-item.flex-center(v-else) Log Out

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    defaultName: 'User',
    shouldShowMenu: false
  }),
  computed: {
    ...mapGetters('user', ['user']),
    name () {
      return (this.user && this.user.firstName) || this.defaultName
    }
  },
  methods: {
    hideMenu () { this.shouldShowMenu = false }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position relative
  padding 1rem

.name
  width 108px
  height 20px
  cursor pointer
  transition color .2s
  &:hover
    color var(--light-blue)

.menu
  position absolute
  width 108px
  top 40px
  right 1rem
  background #fff

.menu-item
  height 32px
  border 1px solid lightgrey
  border-top none
  border-radius 4px
  border-collapse collapse
  cursor pointer
  transition background .2s, color .2s
  &:hover
    background var(--light-blue)
    color #fff

</style>
