<template lang="pug">
  .header-bar
    .brand.flex-center
      router-link(to="/")
        img.logo-img(src='~@/assets/logo.png')
      h3 Admin View
    nav-bar.nav

</template>

<script>
import NavBar from './NavBar'

export default {
  components: { NavBar }
}
</script>

<style lang="stylus" scoped>
  .header-bar
    height 64px
    display flex
    border-bottom 2px solid var(--accent)
    width 100%
  .brand
    padding 0 2rem

  .nav
    flex 1

  .logo-img
    height 36px
</style>
