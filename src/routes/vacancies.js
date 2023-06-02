const express = require('express')
const router = express.Router()
const connection = require('../database')

router.get('/vacantes', (req, res) => {
    connection.query('SELECT * FROM vacante', (error, rows) => {
        if(error){
            throw error
        }else{
            res.render('recursoHumano/candidatos/listaVacantes.hbs', {rows})
        }
    })
})

module.exports = router;