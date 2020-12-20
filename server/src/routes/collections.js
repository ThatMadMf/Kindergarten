const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage();

const controller = require('../controllers/collections');

router.get('/', controller.getCollections);
router.get('/:id', controller.getCollection);
router.delete('/:id', controller.deleteCollection);

module.exports = router;