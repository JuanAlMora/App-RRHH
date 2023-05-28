const express = require('express')
const router = express.Router()
const { certificados, generarCertificado } = require('../controllers/certificadoController')

// router.get('/certificados', (req, res) => {
//     res.render('vistasCertificados/moduloCertificaciones.hbs')
// }) 

router.get('/certificados', certificados);
router.get('/download', generarCertificado);

router.post('/certificados', (req, res) => {
    res.send("recieved")
});


module.exports =  router;
