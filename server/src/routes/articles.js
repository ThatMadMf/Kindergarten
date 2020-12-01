const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage();

const upload = multer({storage: storage});

const controller = require('../controllers/articles');

router.get('/', controller.getArticles);
router.post('/', upload.single('img'), controller.createArticle);

module.exports = router;
