const express = require('express');
const router = express.Router();
const connection = require('../database');
let id;

router.post('/editarNomina', (req, res) => {
    if(req.body.id){
        id = req.body.id;
    }else{
        connection.query('UPDATE contrato SET salario = ? WHERE id = ? ;', [req.body.id, id])
        res.redirect('/Nomina');
    }
})

router.get('/editarNomina', (req, res) => {
    connection.query('SELECT documento, nombre, foto FROM recurso_humano WHERE id = ?', [id], (err, rows) => {
        if (err){
            res.json(err)
        }
        res.render('nomina/editNomina.hbs', {rows})
    })
})
                                                                                

module.exports = router;
