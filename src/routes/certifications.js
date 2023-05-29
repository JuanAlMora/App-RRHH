const express = require('express')
const router = express.Router()
const { certificados, generarCertificado } = require('../controllers/certificadoController')

router.get('/Certificados', certificados);
router.post('/download', generarCertificado, (req, res) => {

})

module.exports = router;