const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/Nomina', (req, res) => {
    connection.query('SELECT id, documento, nombre, correo FROM recurso_humano WHERE empleado = 1', (err, rows) => {
        if (err) {
            res.json(err)
        }
        res.render('nomina/Nomina_Empleados.hbs', {rows})
    })
})

module.exports = router;