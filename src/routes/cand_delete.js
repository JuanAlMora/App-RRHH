const express = require('express');
const router = express.Router();
const connection = require('../database');


router.get('/eliminarCandidato', (req, res) => {
    res.render('recursoHumano/candidatos/listaHojaVidaCandidato.hbs')
})

router.post('/eliminarCandidato', (req, res) => {
    connection.query('DELETE FROM recurso_humano WHERE id = ?', [req.body.id]);
    res.redirect('/ListaCandidatos');
})

module.exports = router;