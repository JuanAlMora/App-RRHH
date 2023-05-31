const express = require('express');
const router = express.Router();
const connection = require('../database');


router.get('/eliminarEmpleado', (req, res) => {
    res.render('recursoHumano/empleados/listaEmpleados.hbs')
})

router.post('/eliminarEmpleado', (req, res) => {
    connection.query('DELETE FROM recurso_humano WHERE id = ?', [req.body.id]);
    res.redirect('/ListaEmpleados');
})

module.exports = router;