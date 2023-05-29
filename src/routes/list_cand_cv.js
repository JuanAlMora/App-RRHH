const express = require('express')
const router = express.Router()
const connection = require('../database')

router.get('/ListaCandidatos', (req, res) => {
    connection.query('SELECT id, documento, nombre, correo, Nomina_id FROM recurso_humano WHERE empleado = 0', (err, rows) => {
        if (err) {
            res.json(err)
        }
        res.render('recursoHumano/candidatos/listaHojaVidaCandidato.hbs', {rows})
    })
})
        



module.exports = router;