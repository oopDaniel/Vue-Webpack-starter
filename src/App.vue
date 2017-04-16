<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: mapActions('user', ['fetchUser']),
    created () {
      this.fetchUser()
    }
  }
</script>

<style lang="stylus">
  html
    box-sizing border-box

  *, *:before, *:after
    box-sizing inherit

  :root
    --accent wheat
    --standard-text #eee
    --light-blue #22c1ff

  a
    text-decoration none
    color steelblue

  body
    margin 0

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50
    height 100vh
    display flex
    flex-direction column

    > *:first-child
      height 50px
      flex-shrink 0

    > *:nth-child(2)
      flex 1

  .flex-center
    display flex
    align-items center
    justify-content center

</style>
