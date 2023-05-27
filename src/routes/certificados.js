const express = require('express')
const router = express.Router()

router.get('/certificados', (req, res) => {
    res.render('vistasCertificados/moduloCertificaciones.hbs')
}) 

module.exports = router;