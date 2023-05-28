const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');
const options = require('../helpers/options');
const data = require('../helpers/data');


const certificados = (req, res, next) => {
    res.render('vistasCertificados/moduloCertificaciones.hbs')
};


const generarCertificado = async (req, res, next) => {
    const html = fs.readFileSync(path.join(__dirname, '../views/vistascertificados/template.html'), 'utf-8');
    const filename = Math.random() + '_doc' + '.pdf';
    
    const document = {
        html: html,
        path: './src/docs/' + filename,
    }
    pdf.create(document, options)
        .then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
        
        const filepath = 'http://localhost:3000/docs/' + filename;

        res.render('vistascertificados/download.hbs', {
            path: filepath
        });
}


module.exports = {
    certificados,
    generarCertificado
}