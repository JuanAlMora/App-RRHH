const express = require('express')
const router = express.Router()
const { certificados, generarCertificado } = require('../controllers/certificadoController')

router.get('/certificados', certificados);
router.post('/download', generarCertificado, (req, res) => {
    const {nombre,id,tipo} = req.body;
})

module.exports =  router
const express = require('express')
const router = express.Router()

router.get('/Certificados', (req, res) => {
    res.render('Certificados/Certificados_mod.hbs')
}) 

module.exports = router;