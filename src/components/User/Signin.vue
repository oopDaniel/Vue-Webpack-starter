<template lang="pug">
  div.signin
    h2 Sign In
    span Log in as 
    input(v-model="id")
    button.btn(@click="signin") Sign in
    .error(v-show="hasError") Unable to sign in
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    id: '',
    hasError: false
  }),
  methods: {
    ...mapActions('user', ['fetchUser']),
    signin () {
      if (this.id) {
        this.fetchUser(this.id)
          .then(isValid => {
            if (isValid) this.$router.push({ name: 'dashboard' })
            else this.hasError = true
          })
      } else {
        this.hasError = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.signin
  margin 2rem
.btn
  margin-left 1rem
.error
  color red
</style>
