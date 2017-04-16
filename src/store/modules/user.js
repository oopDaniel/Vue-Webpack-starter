import UserAPI from '../../services/api/user'
import * as types from '../mutation-types'

const state = {
  user: null,
  error: null,
  isFetching: false
}

const actions = {
  fetchUser
}

const getters = {
  user: state => state.user
}

const mutations = {
  [types.FETCH_USER_START] (state) {
    state.isFetching = true
  },
  [types.FETCH_USER_SUCCESS] (state, user) {
    state.user = user
    state.isFetching = false
  },
  [types.FETCH_USER_FAILURE] (state, error) {
    state.user = null
    state.error = new Error('Fetch user false')
    state.error.error = error
    state.isFetching = false
  }
}

async function fetchUser ({commit}) {
  commit(types.FETCH_USER_START)
  try {
    commit(types.FETCH_USER_SUCCESS, await UserAPI.get())
  } catch (e) {
    commit(types.FETCH_USER_FAILURE, e)
    console.error('Unable to fetch user', e)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
