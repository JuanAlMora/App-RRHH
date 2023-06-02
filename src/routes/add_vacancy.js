const express = require('express')
const router = express.Router()
const connection = require('../database')

router.get('/nuevaVacante', (req, res) => {
    res.render('recursoHumano/candidatos/nuevaVacante.hbs')
})

router.post('/nuevaVacante', (req, res) => {
    const {nombre, salario, horas_semana, detalles} = req.body;
    const newVac = {
        nombre,
        salario,
        horas_semana,
        detalles
    }

    connection.query('INSERT INTO vacante SET ?', [newVac]);
    res.redirect('/vacantes');
})

module.exports = router;