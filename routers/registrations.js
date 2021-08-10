const express = require('express')
const router = express.Router({mergeParams: true})
const { User } = require('../models')
// require module 'bcryptjs'
const bcryptjs = require('bcryptjs')
const user = require('../models/user')
router.get('/new', (req, res) => {
  res.render('registrations/new')
})

router.post('/', async (req, res) => {
  user.create
  // Create a user with a hashed password using 'bcryptjs'
  // Then store the user id in the session
  // Then redirect to '/top-secret'
})

module.exports = router
