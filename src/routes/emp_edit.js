const express = require('express');
const router = express.Router();
const connection = require('../database');
let id;

router.post('/editarEmpleado', (req, res) => {
    if (req.body.id) {
        id = req.body.id;
    }else{
        connection.query('UPDATE recurso_humano SET nombre = ?, correo = ?, direccion = ?, documento = ?, telefono = ?, Nomina_id = ? WHERE id = ? ;', [req.body.nombre, req.body.correo, req.body.direccion, req.body.documento, req.body.telefono, parseInt(req.body.vacante), id])
        if(req.body.copia_cedula){
            connection.query('UPDATE recurso_humano SET copia_cedula = ? WHERE id = ? ;', [req.body.copia_cedula, id])            
        }
        if(req.body.cv){
            connection.query('UPDATE recurso_humano SET cv = ? WHERE id = ? ;', [req.body.cv, id])
        }
        if(req.body.libreta_militar){
            connection.query('UPDATE recurso_humano SET libreta_militar = ? WHERE id = ? ;', [req.body.libreta_militar, id])
        }
        if(req.body.foto){
            connection.query('UPDATE recurso_humano SET foto = ? WHERE id = ? ;', [req.body.foto, id])
        }
        if(req.body.certificado_pension){
            connection.query('UPDATE recurso_humano SET certificado_pension = ? WHERE id = ? ;', [req.body.certificado_pension, id])
        }
        res.redirect('/ListaEmpleados');
    } 
})    

router.get('/editarEmpleado', (req, res) => {
    connection.query('SELECT id, nombre, correo, direccion, documento, telefono, Nomina_id, copia_cedula, cv, libreta_militar, foto, certificado_pension, certificado_eps FROM recurso_humano WHERE id = ?', [id], (err, row) => {
        if (err) {
            res.json(err)
        }
        res.render('recursoHumano/empleados/editPerfilEmpleado.hbs', {row})
    })  
})

module.exports = router;