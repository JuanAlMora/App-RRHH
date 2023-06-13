const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/Nomina', (req, res) => {
    connection.query('SELECT recurso_humano.id, recurso_humano.documento, recurso_humano.nombre, contrato.nombre_contrato, contrato.salario FROM recurso_humano, contrato WHERE empleado = 1 AND recurso_humano.id = contrato.Recurso_Humano_id', (err, rows) => {
        if (err) {
            res.json(err)
        }
        res.render('nomina/Nomina_Empleados.hbs', {rows})
    })
})

module.exports = router;