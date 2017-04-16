<template lang="pug">
  .container.flex-center
    button.name(
      @click="shouldShowMenu = !shouldShowMenu"
      ) {{ name }}
    .menu(v-if="shouldShowMenu")
      router-link.menu-item.flex-center(
        v-if="!this.user",
        :to="{ name: 'signup' }"
      ) Signup
      router-link.menu-item.flex-center(
        v-if="!this.user",
        :to="{ name: 'signin' }"
      ) Signin
      .menu-item.flex-center(
        v-else
        @click="signout"
      ) Signout

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    ...mapActions('user', ['updateUser']),
    signout () { this.updateUser(null) },
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
