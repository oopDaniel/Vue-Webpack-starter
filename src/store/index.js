import Vue from 'vue'
import Vuex from 'vuex'

// import list from './modules/list'
// import user from './modules/user'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const storeConfig = {
  state: {},
  getters,
  mutations,
  actions,
  modules: {
    // list,
    // user
  },
  strict: process.env.NODE_ENV === 'development'
}

export default new Vuex.Store(storeConfig)
export { storeConfig }
