const Article = require('../db/shemes/article');

const getArticles = () => {
    return Article.find();
}

const createArticle = (title, content, author) => {
    return new Article({title, content, author}).save();
}

module.exports = {
    getArticles,
    createArticle,
}