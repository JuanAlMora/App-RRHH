const express = require('express');
const router = express.Router();
const connection = require('../database');
const pdfController = require('../controllers/desprendibleNomina.js');
const path = require('path');

router.get('/pagoNomina', async (req, res) => {
    try {
      const employees = await new Promise((resolve, reject) => {
        connection.query('SELECT recurso_humano.nombre, recurso_humano.documento, contrato.salario FROM recurso_humano, contrato WHERE recurso_humano.empleado = 1 AND recurso_humano.id = contrato.recurso_humano_id', (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
  
      const uniqueId = Date.now(); // Generate a unique identifier using timestamp
      const pdfPath = await pdfController.generatePDF(employees, uniqueId);
  
      // Set the response headers for download
      const filename = `employee_data_${uniqueId}.pdf`; // Unique filename
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Type', 'application/pdf');
  
      // Initiate the download
      res.download(pdfPath, filename);
    } catch (error) {
      console.error('PDF generation failed:', error);
      res.status(500).send('PDF generation failed.');
    }
  });

module.exports = router;