const express = require('express');
const router = express.Router();

const authentication = require('../services/authentication');
const controller = require('../controllers/users');

router.get('/', authentication, controller.getUsers);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/data', authentication, controller.getData);

module.exports = router;
