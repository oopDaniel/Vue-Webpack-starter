<template lang="pug">
  div.signup
    h2.title Sign Up
    form.form-group
      .form-control
        label.label *User ID
        input.input(v-model.trim="user.id", required)
      .form-control
        label.label *First Name
        input.input(v-model.trim="user.firstName", required)
      .form-control
        label.label *Last Name
        input.input(v-model.trim="user.lastName", required)
      .form-control
        label.label Title
        input.input(v-model.trim="user.title")
      .form-control
        label.label Company
        input.input(v-model.trim="user.company")
    .error(v-show="hasError") Please fill the required fields
    button.submit(@click="submit") Submit
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    user: {
      id: '',
      firstName: '',
      lastName: '',
      title: '',
      company: '',
      isAdmin: false
    },
    hasError: false
  }),
  methods: {
    ...mapActions('user', ['addUser']),
    submit () {
      if (this.user.firstName && this.user.lastName && this.user.id) {
        this.addUser(this.user)
        this.$router.push({ name: 'dashboard' })
      } else {
        this.hasError = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.signup
  margin 4rem
.title
  color grey
.form-group
  height 360px
  // border 1px solid black
  display flex
  flex-direction column
  justify-content space-around
  padding 1rem
.form-control
  display flex
.label
  flex 0 0 160px
.input
  flex 0 0 200px
  margin-left 4rem
.submit
  width 200px
  margin 2rem 10rem
.error
  color red
  padding 0 1rem 1rem
</style>
