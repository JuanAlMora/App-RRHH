const express = require('express')
const router = express.Router()

router.get('/Afiliaciones', (req, res) => {
    res.render('afiliaciones/moduloAfiliaciones.hbs')
    })

module.exports = router;