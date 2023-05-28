const express = require('express')
const router = express.Router()
const { certificados, generarCertificado } = require('../controllers/certificadoController')

// router.get('/certificados', (req, res) => {
//     res.render('vistasCertificados/moduloCertificaciones.hbs')
// }) 

router.get('/certificados', certificados);
router.get('/download', generarCertificado);

module.exports =  router;
