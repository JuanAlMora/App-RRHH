const express = require('express')
const router = express.Router()

router.get('/menuCandidatos', (req, res) => {
    res.render('recursoHumano/candidatos/menuCandidatos.hbs')
    })

module.exports = router;