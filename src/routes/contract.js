const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/Contratacion', (req, res) => {
    connection.query('SELECT id, documento, nombre, correo, telefono FROM recurso_humano WHERE empleado = 0', (err, rows) => {
        if (err) {
            res.json(err)
        }
        res.render('contratacion/listaCandidatos', {rows})
    })
})

router.post('/Contratacion', (req, res) => {
    connection.query('UPDATE recurso_humano SET empleado = 1 WHERE id = ?', [req.body.id], (err, rows) => {
        if (err) {
            res.json(err)
        }
        res.redirect('/Contratacion')
    })
})

module.exports = router;