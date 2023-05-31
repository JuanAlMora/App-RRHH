const express = require('express');
const router = express.Router();
const connection = require('../database');
let id;

router.post('/editarNomina', (req, res) => {
    if(req.body.id){
        id = req.body.id;
    }else{
        connection.query('UPDATE Nomina SET id =? WHERE id = ? ;', [req.body.id, id])
        res.redirect('/Nomina');
    }
})

module.exports = router;
