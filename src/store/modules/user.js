import UserAPI from '../../services/api/user'
import * as types from '../mutation-types'

const state = {
  user: null,
  error: null,
  isFetching: false
}

const actions = {
  fetchUser,
  updateUserPrivilege,
  addUser,
  updateUser
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
    state.error = new Error('Fetch user failed')
    state.error.error = error
    state.isFetching = false
  },
  [types.ADD_USER_START] (state) {
    state.isFetching = true
  },
  [types.ADD_USER_SUCCESS] (state, user) {
    state.isFetching = false
  },
  [types.ADD_USER_FAILURE] (state, error) {
    state.error = new Error('Add user failed')
    state.error.error = error
    state.isFetching = false
  },
  [types.UPDATE_USER] (state, user) {
    state.user = user
  },
  [types.UPDATE_USER_PRIVILEGE] (state, isAdmin) {
    if (state.user === null) return
    state.user.isAdmin = isAdmin
  }
}

async function fetchUser ({commit}, payload) {
  commit(types.FETCH_USER_START)
  const API = payload === undefined
    ? UserAPI.make
    : UserAPI.get
  try {
    commit(types.FETCH_USER_SUCCESS, await API(payload))
    return true
  } catch (e) {
    commit(types.FETCH_USER_FAILURE, e)
    console.error('Unable to fetch user', e)
    return false
  }
}

async function addUser ({commit}, payload) {
  commit(types.ADD_USER_START)
  try {
    await UserAPI.add(payload)
    commit(types.ADD_USER_SUCCESS)
    commit(types.UPDATE_USER, payload)
  } catch (e) {
    commit(types.ADD_USER_FAILURE, e)
    console.error('Unable to add user', e)
  }
}

function updateUserPrivilege ({commit}, payload) {
  commit(types.UPDATE_USER_PRIVILEGE, payload)
}

function updateUser ({commit}, payload) {
  commit(types.UPDATE_USER, payload)
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
