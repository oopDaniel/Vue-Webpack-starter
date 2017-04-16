// import Axios from 'axios'
// import Constants from '@/shared/Constants'

const mockUser = {
  id: 'test1234',
  firstName: 'Jon',
  lastName: 'Snow',
  title: 'Lord Commander',
  company: 'Night\'s Watch',
  isAdmin: false
}

const users = {
  test1234: mockUser
}

export const makeUser = () => new Promise((resolve, reject) => {
  const hasSucceeded = Math.random() > 0.3

  if (hasSucceeded) {
    users[mockUser.id] = mockUser
    setTimeout(() => resolve(mockUser), 1000)
  } else {
    reject(new Error('Not lucky enough'))
  }
})

export const addUser = user => new Promise((resolve, reject) => {
  if (users[user.id] === undefined) {
    users[user.id] = user
    resolve()
  } else {
    reject(new Error('Duplicated'))
  }
})

export const getUser = id => new Promise((resolve, reject) => {
  if (users[id]) {
    resolve(users[id])
  } else {
    reject(new Error('Not exist'))
  }
})

export default {
  make: makeUser,
  add: addUser,
  get: getUser
}
