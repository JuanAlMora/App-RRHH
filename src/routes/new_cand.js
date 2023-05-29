const express = require('express')
const router = express.Router()
const pool = require('../database')

router.get('/NuevoCandidato', (req, res) => {
    res.render('recursoHumano/candidatos/nuevoCandidato.hbs')
})

router.post('/NuevoCandidato', async (req, res) => {
    const {nombre, correo, direcccion, documento, telefono, 
        copia_cedula, cv, libreta_militar, foto, certificado_pension, certificado_eps} = req.body
    
    const newCand = {
        nombre,
        correo,
        direcccion,
        documento,
        telefono,
        copia_cedula,
        cv,
        libreta_militar,
        foto,
        certificado_pension,
        certificado_eps
    }
})

module.exports = router;