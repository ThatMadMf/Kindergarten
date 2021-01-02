const Article = require('../db/shemes/article');

const getArticles = () => {
    return Article.find().populate('author');
}

const getArticle = (id) => {
    return Article.findOne({_id : id}).populate('author');
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
    }).save();
}

const updateArticle = ({title, content, img}, id) => {
    return Article.findOneAndUpdate({_id: id}, {title, content});
}

const deleteArticle = (id) => {
    return Article.findOneAndRemove({_id: id});
}

module.exports = {
    getArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
}