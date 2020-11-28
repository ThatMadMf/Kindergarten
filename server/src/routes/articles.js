const express = require('express');
const router = express.Router();

const controller = require('../controllers/articles');

router.get('/', controller.getArticles);
router.post('/', controller.createArticle);

module.exports = router;
