const articleService = require('../services/articles');

const getArticles = (req, res, next) => {
    articleService.getArticles()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

const getArticle = (req, res, next) => {
    articleService.getArticle(req.params.id)
        .then((article) => {
            res.status(200).send(article);
        })
        .catch((err) => {
            console.error(err);
            res.status(404).send(err);
        })
}

const createArticle = (req, res, next) => {
    articleService.createArticle(req.body.title, req.body.content, req.body.author, req.file)
        .then((article) => {
            res.status(201).send(article);
        })
        .catch((err) => {
            console.error(err);
            res.status(400).send(err);
        })
}

const updateArticle = (req, res, next) => {
    articleService.updateArticle({...req.body}, req.params.id)
        .then((article) => {
            res.status(200).send(article);
        })
        .catch((err) => {
            console.error(err);
            res.status(400).send(err);
        })
}

const deleteArticle = (req, res, next) => {
    articleService.deleteArticle(req.params.id)
        .then(() => {
            res.status(204).send();
        })
        .catch((err) => {
            console.error(err);
            res.status(400).send(err);
        })
}

module.exports = {
    getArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
}