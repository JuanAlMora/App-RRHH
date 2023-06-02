const express = require('express')
const {restart} = require('nodemon')
const router = express.Router()
const connection = require('../database')

router.get('/login', (req, res) => {
    res.render('login/login.hbs')
    })

router.post('/login', async (req, res) => {
    const {User, Password} = req.body
    connection.query('SELECT * FROM usuario_gestor WHERE nombre = ? AND contraseña = ?', [User, Password], (error, results) => {
        if(results.length > 0){
            res.redirect('/menuPrincipal')
        }else{
            res.redirect('/login')
        }
    })
})

module.exports = router;