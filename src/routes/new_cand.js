const express = require('express')
const router = express.Router()
const connection = require('../database')

router.get('/NuevoCandidato', (req, res) => {
    res.render('recursoHumano/candidatos/nuevoCandidato.hbs')
})

router.post('/NuevoCandidato', async (req, res) => {
    const {nombre, correo, direccion, documento, telefono, vacante, copia_cedula, cv, libreta_militar, foto, certificado_pension, certificado_eps} = req.body;
    const empleado = 0;
    const Nomina_id = parseInt(vacante);
    const Usuario_Gestor_id = 1;
    const Usuario_Gestor_Administrador_id = 1;

    const newCand = {
        nombre,
        empleado,
        documento,
        copia_cedula,
        correo,
        telefono,
        direccion,
        foto,
        cv,
        certificado_pension,
        libreta_militar,
        certificado_eps,
        Nomina_id,
        Usuario_Gestor_id,
        Usuario_Gestor_Administrador_id
    }

    connection.query('INSERT INTO recurso_humano set ?', [newCand]);
    res.redirect('/NuevoCandidato');
})

module.exports = router;