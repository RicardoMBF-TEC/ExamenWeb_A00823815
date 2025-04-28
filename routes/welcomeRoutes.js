const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`<h1>¡Hola, ${name}! Bienvenido al portal de SkyTech.</h1>`);
});

module.exports = router;