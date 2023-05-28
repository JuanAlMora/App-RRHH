const fs = require('fs');
const pdf = require('pdf-cretor-node');
const path = require('path');

const certificados = (req, res, next) => {
    res.render('vistasCertificados/moduloCertificaciones.hbs')
} 


const generarCertificado = async (req, res, next) => {
    const html = fs.readFileSync(path.join(__dirname, '../views/vistasCertificados/template.html'), 'utf-8');
    const filename = Math.random() + '_doc' + '.pdf';
}

module.exports = {
    certificados
}