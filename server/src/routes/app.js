const express = require('express');
const router = express.Router();

const services = require('../services/users')

router.get('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('This is response from nodejs server');
});

module.exports = router;
