const express = require('express')
const router = express.Router()

const redirects = {
  '/should-redirect': '/',
  '/another-route': '/app'
}

Object.keys(redirects).forEach((key) => {
  router.get(key, (req, res) => {
    res.redirect(redirects[key])
  })
})

module.exports = router
