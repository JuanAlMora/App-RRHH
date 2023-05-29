const express = require('express')
const router = express.Router()

router.get('/ListaCandidatos', (req, res) => {
    res.render('recursoHumano/candidatos/listaHojaVidaCandidato.hbs')
})

module.exports = router;