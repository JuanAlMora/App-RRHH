const fs = require('fs');
const pdf = require('pdf-cretor-node');
const path = require('path');

const certificados = (req, res, next) => {
    res.render('vistasCertificados/moduloCertificaciones.hbs')
} 


module.exports = {
    certificados
}