<template lang="pug">
  div 
    | {{ user === null ? 'You havn\'t logged in yet' : `Hello ${user.firstName}`}}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters('user', ['user'])
}
</script>

</script>

<style lang="stylus">
</style>
