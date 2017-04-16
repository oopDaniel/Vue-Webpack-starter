// import Axios from 'axios'
// import Constants from '@/shared/Constants'

export const getUser = () => new Promise((resolve, reject) => {
  const mockUser = {
    id: ~~(Math.random() * 100000000),
    firstName: 'Jon',
    lastName: 'Snow',
    title: 'Lord Commander',
    company: 'Night\'s Watch',
    isAdmin: false
  }
  const hasSucceeded = Math.random() > 0.1

  if (hasSucceeded) setTimeout(() => resolve(mockUser), 1000)
  else reject(new Error('Not lucky enough'))
})

export default {
  get: getUser
}
