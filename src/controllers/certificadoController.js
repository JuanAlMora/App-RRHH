const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');
const { body } = require('express-validator');

const options = {
    formate: 'A3',
    orientation: 'portrait',
    border: '2mm',
    header: {
        height: '15mm',
        contents: '<h4 style=" color: red;font-size:20;font-weight:800;text-align:center;">CUSTOMER INVOICE</h4>'
    },
    footer: {
        height: '20mm',
        contents: {
            first: 'Cover page',
            2: 'Second page',
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', 
            last: 'Last Page'
        }
    }
}

const certificados = (req, res, next) => {
    res.render('certificados/certificados_mod.hbs')
};


const generarCertificado = async (req, res, next) => {
    console.log(req.body)
    const htmlFile = fs.readFileSync(path.join(__dirname, '../views/certificados/template.html'), 'utf-8');
    const filename = Math.random() + '_doc' + '.pdf';
    
    const document = {
        html: htmlFile,
        path: './src/docs/' + filename,
        data: {
            name: req.body.Nombre,
            id: req.body.Documento,
            date: req.body.Fecha
        }
    }

    pdf.create(document, options)
    .then((result) => {
      // Set the appropriate headers for file download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

      // Stream the PDF file to the response
      fs.createReadStream(result.filename).pipe(res);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('An error occurred while generating the PDF');
    });
}


module.exports = {
    certificados,
    generarCertificado
}