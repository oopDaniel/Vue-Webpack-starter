<template lang="pug">
  nav.flex-center
    router-link.link(to="/", activeClass="active" exact) Home
    router-link.link(to="/user", activeClass="active") User
    router-link.link(to="/admin", activeClass="active") Admin
</template>

<script>

export default {
}
</script>

<style lang="stylus" scoped>
  nav
    justify-content flex-start

  .link
    position relative
    padding 0 1.5rem

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
