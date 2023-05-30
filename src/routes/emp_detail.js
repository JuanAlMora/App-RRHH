const express = require('express');
const router = express.Router();
const connection = require('../database');
let id;

router.post('/detallesEmpleado', (req, res) => {
    id = req.body.id;
})

router.get('/detallesEmpleado', (req, res) => {
    connection.query('SELECT id, nombre, correo, direccion, documento, telefono, Nomina_id, copia_cedula, cv, libreta_militar, foto, certificado_pension, certificado_eps FROM recurso_humano WHERE id = ?', [id], (err, row) => {
        if (err) {
            res.json(err)
        }
        res.render('recursoHumano/empleados/detallesEmpleado.hbs', {row})
    })
})

module.exports = router;