const express = require('express')
const router = express.Router()

router.get('/menuEmpleados', (req, res) => {
    res.render('recursoHumano/empleados/menuEmpleados.hbs')
    })

module.exports = router;