const express = require('express')
const { restart } = require('nodemon')
const router = express.Router()
const pool = require('../database')

router.get('/login', (req, res) => {
    res.render('login/login.hbs')
    })

router.post('/login', async (req, res) => {
    const {username, password} = req.body
})

module.exports = router;