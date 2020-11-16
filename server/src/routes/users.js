const express = require('express');
const router = express.Router();

const controller = require('../controllers/users');

router.get('/', controller.getUsers);

router.post('/register', controller.register);

module.exports = router;
