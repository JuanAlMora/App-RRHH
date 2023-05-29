const express = require('express')
const router = express.Router()
const connection = require('../database')

router.get('/ListaEmpleados', (req, res) => {
    connection.query('SELECT id, documento, nombre, correo, telefono FROM recurso_humano WHERE empleado = 1', (err, rows) => {
        if (err) {
            res.json(err)
        }
        res.render('recursoHumano/empleados/listaEmpleados.hbs', {rows})
    })
})

module.exports = router;