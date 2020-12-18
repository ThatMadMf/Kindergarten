const Article = require('../db/shemes/article');

const getArticles = () => {
    return Article.find().populate('author');
}

const createArticle = (title, content, author, img) => {
    return new Article({
        title,
        content,
        author,
        img: {
            data: img.buffer,
            contentType: 'image'
        }
    });
}

module.exports = {
    getArticles,
    createArticle,
}