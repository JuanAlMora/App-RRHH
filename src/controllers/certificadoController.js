const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');


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
    res.render('vistasCertificados/moduloCertificaciones.hbs')
};


const generarCertificado = async (req, res, next) => {
    const htmlFile = fs.readFileSync(path.join(__dirname, '../views/vistascertificados/template.html'), 'utf-8');
    const filename = Math.random() + '_doc' + '.pdf';
    
    const document = {
        html: htmlFile,
        path: './src/docs/' + filename,
        data: {
            name: 'John Doe',
            id: '1234567890',
            date: '2020-10-20'
        }
    }

    pdf.create(document, options)
    .then((result) => {
      // Set the appropriate headers for file download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=example.pdf');

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