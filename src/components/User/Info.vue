<template lang="pug">
  .info(v-if="user")
    .row
      .key Name
      .value {{ user.firstName }} {{ user.lastName }}
    .row 
      .key Title
      .value {{ user.title }}
    .row 
      .key Company
      .value {{ user.company }}
    .row
      .key Are you admin?
      .value
        span.form-control
          input(
            type="radio",
            :value="true",
            v-model="isAdmin"
          ) 
          label Yes
        span.form-control
          input(
            type="radio",
            :value="false",
            v-model="isAdmin"
          )
          label No

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('user', ['user']),
    isAdmin: {
      get () { return this.user.isAdmin },
      set (value) { this.updateUserPrivilege(value) }
    }
  },
  methods: mapActions('user', ['updateUserPrivilege'])
}
</script>

<style lang="stylus">
.info
  margin 4rem

.row
  display flex
  padding .5rem

.key
  flex 0 0 152px
  color steelblue

.form-control
  margin-right .5rem
</style>
