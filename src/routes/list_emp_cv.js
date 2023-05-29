const express = require('express')
const router = express.Router()

router.get('/ListaEmpleados', (req, res) => {
    res.render('recursoHumano/empleados/listaEmpleados.hbs')
    })

module.exports = router;