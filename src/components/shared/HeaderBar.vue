<template lang="pug">
  .header-bar
    .brand.flex-center
      router-link(to="/")
        img.logo-img(src="~@/assets/logo.png")
      h3 Vue App with Submodules
    nav-bar.nav
    user-btn

</template>

<script>
import NavBar from './NavBar'
import UserBtn from './UserBtn'

export default {
  components: { NavBar, UserBtn }
}
</script>

<style lang="stylus" scoped>
  .header-bar
    height 64px
    display flex
    border-bottom 2px solid var(--accent)
    width 100%
  .brand
    min-width 360px
    padding 0 2rem
    justify-content flex-start

  .nav
    flex 1

  .logo-img
    height 36px
</style>
