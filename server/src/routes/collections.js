const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage();

const upload = multer({storage: storage});

const controller = require('../controllers/collections');

router.get('/', controller.getCollections);

module.exports = router;