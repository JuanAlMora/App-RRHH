const express = require('express')
const router = express.Router()

router.get('/menuPrincipal', (req, res) => {
    res.render('menuPrincipal/menuPrincipal.hbs')
})

module.exports = router;