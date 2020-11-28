const Article = require('../db/shemes/article');
const uuid = require('uuid');
const User = require("../db/shemes/user");

const getArticles = () => {
    return Article.find();
}

const createArticle = (title, content, author) => {
    return new Article({id: uuid.v4(), title, content, author: User.findById(author)._id}).save();
}

module.exports = {
    getArticles,
    createArticle,
}