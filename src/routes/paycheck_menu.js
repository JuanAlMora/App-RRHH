const express = require('express');
const router = express.Router();

router.get('/Nomina', (req, res) => {
    res.render('nomina/');// Falta la view de nomina 
})

module.exports = router;