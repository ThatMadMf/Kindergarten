const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage();

const upload = multer({storage: storage});

const controller = require('../controllers/articles');

router.get('/', controller.getArticles);
router.get('/:id', controller.getArticle);
router.post('/', upload.single('img'), controller.createArticle);
router.put('/:id', upload.single('img', controller.updateArticle));
router.delete('/:id', controller.deleteArticle);

module.exports = router;
