const articleService = require('../services/articles')

const getArticles = (req, res, next) => {
    articleService.getArticles()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

const createArticle = (req, res, next) => {
    articleService.createArticle(req.body.title, req.body.content, req.body.author)
        .then((article) => {
            res.status(201).send(article);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        })
}

module.exports = {
    getArticles,
    createArticle,
}