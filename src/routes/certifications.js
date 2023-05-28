const express = require('express')
const router = express.Router()

router.get('/Certificados', (req, res) => {
    res.render('Certificados/Certificados_mod.hbs')
}) 

module.exports = router;