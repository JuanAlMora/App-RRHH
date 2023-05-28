const express = require('express')
const router = express.Router()
const { certificados, generarCertificado } = require('../controllers/certificadoController')

// router.get('/certificados', (req, res) => {
//     res.render('vistasCertificados/moduloCertificaciones.hbs')
// }) 

router.get('/certificados', certificados);
router.post('/download', generarCertificado, (req, res) => {
    const {nombre,id,tipo} = req.body;
    const newCertificado = {
        nombre,
        id,
        tipo
    };
});



module.exports =  router
